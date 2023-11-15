import UpdateModel from '@/pages/models/UpdateModel';
import { faPenNib, faRepeat, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Row, Table } from 'react-bootstrap';

function ViewCategory({ ViewCategoryData }) {
  const [show, setShow] = useState(false);
  const [updateId, setUpdateId] = useState(0);
  const [selectDeleteIds, setDeleteIds] = useState([]);
  const updateData = (i) => {
    setUpdateId(i);
    setShow(true);
  };

  let GetDeleteId = (getdeleteId) => {
    if (!selectDeleteIds.includes(getdeleteId)) {
      selectDeleteIds.push(getdeleteId);
    }
    else {
      selectDeleteIds.splice(selectDeleteIds.indexOf(getdeleteId), 1);
    }
    setDeleteIds(selectDeleteIds);
  };

  let handleDelete = async () => {
    await axios
      .delete(`http://localhost:5000/api/website/categories/delete/${selectDeleteIds}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <UpdateModel showmodel={show} setShowModel={setShow} updateId={updateId} />
      <section className="px-3">
        <h3 className="text-center py-2 position-sticky top-0 bg-2 border-bottom">View Categories</h3>
        <div className="rounded shadow">
          <Row className="py-3 me-0">
            <Col className="col-6">
              <div className="search_input">
                <input type="search" className="py-1 px-2" placeholder="Search" />
              </div>
            </Col>
            <Col className="col-6">
              <div className="d-flex justify-content-end align-items-center">
                <FontAwesomeIcon icon={faRepeat} width={25} height={25} style={{ pointerEvents: ((selectDeleteIds.length) === 0) ? 'none' : 'auto' }}
                  className={`fs-6 cursor-pointer mb-2 bg-1 p-2 rounded me-3 ${(selectDeleteIds.length) == 0 ? 'opacity-25' : 'opacity-100'}`} />
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className={`fs-4 cursor-pointer mb-2 ${(selectDeleteIds.length) == 0 ? 'opacity-25' : 'opacity-100'}`}
                  width={30}
                  height={30}
                  onClick={handleDelete}
                  style={{ pointerEvents: ((selectDeleteIds.length) === 0) ? 'none' : 'auto' }}
                />
              </div>
            </Col>
          </Row>
          <Table striped bordered hover>
            <thead className="bg-transparent">
              <tr>
                <th className="bg-transparent text-white text-center">
                  <Button className="bg-transparent border-0" style={{ fontSize: '14px' }}>
                    Delete All
                  </Button>
                </th>
                <th className="bg-transparent text-white text-center">#</th>
                <th className="bg-transparent text-white text-center"> Name</th>
                <th className="bg-transparent text-white text-center">parent_id</th>
                <th className="bg-transparent text-white text-center">Slug Name</th>
                <th className="bg-transparent text-white text-center">Update</th>
                <th className='bg-transparent text-white text-center'>Status</th>
              </tr>
            </thead>
            <tbody>
              {ViewCategoryData.length == 0 ? (
                <>
                  <tr>
                    <td className="bg-transparent text-white text-center" colSpan={6}>
                      No Record Found....
                    </td>
                  </tr>
                </>
              ) : (
                ViewCategoryData.map((v, i) => {

                  return (
                    <>
                      <tr key={i}>
                        <td className="bg-transparent text-white text-center">
                          <input type="checkbox" className="checkbox cursor-pointer" onClick={() => GetDeleteId(v.id)} />
                        </td>
                        <td className="bg-transparent text-white text-center">{i + 1}</td>
                        <td className="bg-transparent text-white text-center">{v.name ? v.name : '_'}</td>
                        <td className="bg-transparent text-white text-center">{v.parent_id}</td>
                        <td className="bg-transparent text-white text-center">{v.slug ? v.slug : '_'}</td>
                        <td className="text-center bg-transparent">
                          <Button className="bg-success border-0" onClick={() => updateData(v.id)}>
                            <span className="me-2">Update</span>
                            <FontAwesomeIcon icon={faPenNib} width={15} height={15} />
                          </Button>
                        </td>
                        <td className="text-center bg-transparent">
                          {(v.status) ?
                            <Button className='bg-primary border-0'>
                              active
                            </Button> : <Button className='border-0 bg-danger'>
                              inactive
                            </Button>}
                        </td>
                      </tr>
                    </>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
}

export default ViewCategory;
