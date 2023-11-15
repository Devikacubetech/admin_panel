import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function AddCategory() {
  const [inputData, setInputData] = useState({
    name: '',
    slug: '',
    parent_id: '',
  });
  const handleInput = (e) => {
    const newInputData = { ...inputData };
    newInputData[e.target.name] = e.target.value;
    setInputData(newInputData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/api/website/categories/create`, inputData)
      .then((res) => {
        console.log(res);
        setInputData({
          name: '',
          slug: '',
          parent_id: '',
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section>
      <h3 className="text-center py-3">Add Category</h3>
      <div className="category-div px-3 shadow w-50 mx-auto">
        <Form className="border p-3 rounded" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Enter Name"
              required
              value={inputData.name}
              onChange={handleInput}
              name="name"
              className="text-white"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="text"
              placeholder="Slug Name"
              required
              value={inputData.slug}
              onChange={handleInput}
              name="slug"
              className="text-white"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="number"
              placeholder="parent_id"
              required
              value={inputData.parent_id}
              onChange={handleInput}
              name="parent_id"
              className="text-white"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-2">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
}

export default AddCategory;
