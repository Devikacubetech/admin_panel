import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function UpdateModel({ showmodel, setShowModel, updateId }) {
  const [inputData, setInputData] = useState({
    name: '',
    slug: '',
    parent_id: '',
  });

  let getData = async () => {
    console.log('function');
    await axios
      .get(`http://localhost:5000/api/website/categories/getupdatedata/${updateId}}`)
      .then((res) => {
        const { name, slug, parent_id } = res.data.Data[0];
        setInputData({ name, slug, parent_id });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, [updateId]);

  const handleInput = (e) => {
    const newInputData = { ...inputData };
    newInputData[e.target.name] = e.target.value;
    setInputData(newInputData);
  };

  const setUpdateData = async () => {
    setShowModel(false);
    await axios
      .post(`http://localhost:5000/api/website/categories/create/${updateId}`, inputData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Modal show={showmodel} onHide={() => setShowModel(false)} className="update-model">
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <Form className=" p-3 rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Name"
                required
                name="name"
                value={inputData.name}
                onChange={handleInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword" required>
              <Form.Control
                type="text"
                placeholder="Slug Name"
                name="slug"
                value={inputData.slug}
                onChange={handleInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword" required>
              <Form.Control
                type="number"
                placeholder="parent_id"
                name="parent_id"
                value={inputData.parent_id}
                onChange={handleInput}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={() => setShowModel(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={setUpdateData}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateModel;
