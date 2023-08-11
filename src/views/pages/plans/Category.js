import React from 'react';
import Table from 'ui-component/table/Table';

const Category = () => {
  const data = [
    { title: 'John Dave', price: 'john@gmail.com', duration: 672491296, description: 'Free', date: '13-05-2023' },
    { title: 'Bren Micheal', price: 'bren@gmail.com', duration: 672491296, description: 'Free', date: '13-05-2023' },
    { title: 'Marry Jane', price: 'marry@gmail.com', duration: 672491296, description: 'Premium', date: '13-05-2023' },
    { title: 'Shohail Holmes', price: 'shohail@gmail.com', duration: 672491296, description: 'Free', date: '13-05-2023' },
    { title: 'Aseka Jenipha', price: 'aseka@gmail.com', duration: 672491296, description: 'Pro', date: '13-05-2023' },
    { title: 'Meuko Samuel', price: 'meuko@gmail.com', duration: 672491296, description: 'Expert', date: '13-05-2023' }
  ];
  const columns = [
    {
      title: 'Title',
      field: 'title'
    },

    {
      title: 'Date',
      field: 'date'
    }
  ];

  return <Table title="Premium plan categories" data={data} columns={columns} />;
};

export default Category;
