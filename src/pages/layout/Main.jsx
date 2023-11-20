import React from 'react';
import { Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFillDrip, faGauge, faImage } from '@fortawesome/free-solid-svg-icons';

import { useRouter } from 'next/router';
import Link from 'next/link';

function Main() {
  const router = useRouter().pathname;
  return (
    <div className="shadow sidenav border rounded-3 bg-2">
      <Link href="/">
        <div className={router == '/' ? ' ps-4 py-3 items text-white default-bg' : 'ps-4 py-3 items text-white '}>
          <FontAwesomeIcon icon={faGauge} style={{ color: '#2f74c8' }} width={25} height={25} />
          <span className="ms-2">Dashbord</span>
        </div>
      </Link>

      <Accordion className="border-0 ">
        <Accordion.Item eventKey="0" className="bg-transparent border-0">
          <Accordion.Header
            className={`items ${router == '/category/display-catgory-data' || router == '/category/add-category'
                ? 'default-bg'
                : 'bg-transparent'
              }`}
          >
            Categories
          </Accordion.Header>
          <Accordion.Body className="p-0 bg-transparent">
            <Link href="/category/display-catgory-data">
              <div className="ps-3 py-2 border text-white">View Categories</div>
            </Link>
            <Link href="/category/add-category">
              <div className="ps-3 py-2 border text-white">Add Category</div>
            </Link>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="bg-transparent border-0">
          <Accordion.Header className="bg-transparent items">Products</Accordion.Header>
          <Accordion.Body className="p-0">
            <div className="ps-3 py-2 border text-white">View Prodocts</div>
            <div className="ps-3 py-2 border text-white">Add Product</div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="ps-4 py-3 items text-white">
        <FontAwesomeIcon icon={faFillDrip} style={{ color: '#2f74c8' }} width={25} height={25} />
        <span className="ms-2">Colors</span>
      </div>
      <Link href='/image'>
        <div className="ps-4 py-3 items text-white">
          <FontAwesomeIcon icon={faImage} style={{ color: '#2f74c8' }} width={25} height={25} />
          <span className="ms-2">Images</span>
        </div>
      </Link>

    </div>
  );
}

export default Main;
