import React, { useContext } from 'react';
import dynamic from 'next/dynamic';
import {  Col, Row } from 'react-bootstrap';
import { Context } from '../Context/Context';
const Topbar = dynamic(import('./Topbar'));
const Main = dynamic(import('./Main'));

export default function Layout({ children }) {
  let { nav } = useContext(Context);
  return (
    <>
      <div className="bg-1 layout">
        <Topbar />
        <Row className="m-0 py-4 ">
          <Col className={nav ? 'd-none col-0' : 'col-3 d-block'}>
            <Main />
          </Col>
          <Col className={nav ? 'col-12 ' : 'col-9'}>
            <div className="dataDiv shadow border border-1 border-white rounded-3 bg-2 text-white">{children}</div>
          </Col>
        </Row>
      </div>
    </>
  );
}
