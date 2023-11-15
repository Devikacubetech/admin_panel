import React from 'react';
import dynamic from 'next/dynamic';
const AddCategory = dynamic(import('../../../../Components/Category/AddCategory'));

export default function AddcategoryPage() {
  return (
   <AddCategory/>
  );
}

