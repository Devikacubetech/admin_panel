import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
const ViewCategory = dynamic(import('../../../../Components/Category/ViewCategory'));

export default function ViewcategoryPage() {
  const [ViewCategoryData,setCategoryData] = useState([]);
  const getData = async()=> {
    await axios.get('http://localhost:5000/api/website/categories/display').then((res)=> {
      return res.data;
    }).then((finalres)=> {
      setCategoryData(finalres.Data);
      
    })
  }
  
  useEffect(()=> {
    getData();
  },[ViewCategoryData]);
  return (
    <ViewCategory ViewCategoryData={ViewCategoryData}/>
  );
}
