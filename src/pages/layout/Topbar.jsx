import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../../public/images/main.png';
import Image from 'next/image';
import { Context } from '../Context/Context';
import logo from '../../../public/images/logo.png';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

function Topbar() {
  const { setNav, nav } = useContext(Context);
  return (
    <section className="bg-2 topnavbar shadow">
      <Row className=" m-0 py-3">
        <Col lg={3}>
          <Image src={logo} alt="Logo_image" height={60} className='cursor-pointer' />
        </Col>
        <Col lg={9}>
          <Row>
            <Col className="ps-4">
              <div className="d-flex align-items-center h-100">
                <FontAwesomeIcon
                  onClick={() => setNav(!nav)}
                  icon={faBars}
                  className="menuToggleIcon fs-4 text-white"
                  width={25}
                  height={25}
                />
              </div>
            </Col>
            <Col className="text-end">
              <div className='d-flex align-items-center justify-content-end'>
                <FontAwesomeIcon icon={faUserCircle} style={{ color: '#f4f7fa' }} className='me-3 fs-3'  width={25}
                  height={25}/>
                <Image src={img} width={50} height={50} className="rounded-circle cursor-pointer" alt="user_image" title='Devika Developer' />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </section>
  );
}

export default Topbar;
