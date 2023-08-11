import React from 'react';
import Table from 'ui-component/table/Table';

const Plans = () => {
  const data = [
    { category: 'John Dave', price: 'john@gmail.com', duration: 672491296, description: 'Free', date: '13-05-2023' },
    { category: 'Bren Micheal', price: 'bren@gmail.com', duration: 672491296, description: 'Free', date: '13-05-2023' },
    { category: 'Marry Jane', price: 'marry@gmail.com', duration: 672491296, description: 'Premium', date: '13-05-2023' },
    { category: 'Shohail Holmes', price: 'shohail@gmail.com', duration: 672491296, description: 'Free', date: '13-05-2023' },
    { category: 'Aseka Jenipha', price: 'aseka@gmail.com', duration: 672491296, description: 'Pro', date: '13-05-2023' },
    { category: 'Meuko Samuel', price: 'meuko@gmail.com', duration: 672491296, description: 'Expert', date: '13-05-2023' }
  ];
  const columns = [
    {
      title: 'Category',
      field: 'category'
    },
    {
      title: 'Price',
      field: 'price'
    },
    {
      title: 'Duration',
      field: 'duration'
    },
    {
      title: 'Description',
      field: 'description'
    },
    {
      title: 'Date',
      field: 'date'
    }
  ];

  return <Table title="Premium plans" data={data} columns={columns} />;
};

export default Plans;
