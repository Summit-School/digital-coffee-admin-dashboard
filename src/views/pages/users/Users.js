import React from 'react';
import Table from 'ui-component/table/Table';

const Users = () => {
  const data = [
    { name: 'John Dave', email: 'john@gmail.com', phoneNumber: 672491296, premiumPlan: 'Free', date: '13-05-2023' },
    { name: 'Bren Micheal', email: 'bren@gmail.com', phoneNumber: 672491296, premiumPlan: 'Free', date: '13-05-2023' },
    { name: 'Marry Jane', email: 'marry@gmail.com', phoneNumber: 672491296, premiumPlan: 'Premium', date: '13-05-2023' },
    { name: 'Shohail Holmes', email: 'shohail@gmail.com', phoneNumber: 672491296, premiumPlan: 'Free', date: '13-05-2023' },
    { name: 'Aseka Jenipha', email: 'aseka@gmail.com', phoneNumber: 672491296, premiumPlan: 'Pro', date: '13-05-2023' },
    { name: 'Meuko Samuel', email: 'meuko@gmail.com', phoneNumber: 672491296, premiumPlan: 'Expert', date: '13-05-2023' }
  ];
  const columns = [
    {
      title: 'Name',
      field: 'name'
    },
    {
      title: 'Email',
      field: 'email'
    },
    {
      title: 'Phone Number',
      field: 'phoneNumber'
    },
    {
      title: 'Premium plan',
      field: 'premiumPlan'
    },
    {
      title: 'Date',
      field: 'date'
    }
  ];
  return <Table title="Users" data={data} columns={columns} />;
};

export default Users;
