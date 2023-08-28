import React, { useEffect, useState } from 'react';
import Table from 'ui-component/table/Table';
import { useDispatch } from 'react-redux';
import { readAllUsers } from 'store/usersReducer';

const Users = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(readAllUsers()).then((res) => {
      const yeah = res.payload.users.map((o) => ({ ...o }));
      setUsers(yeah);
    });
  }, [dispatch]);

  const columns = [
    {
      title: 'First name',
      field: 'firstName'
    },
    {
      title: 'Last Name',
      field: 'lastName'
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
      field: 'subscription.plan'
    },
    {
      title: 'Price',
      field: 'subscription.price'
    },
    {
      title: 'Subscription Date',
      field: 'subscription.startDate'
    },
    {
      title: 'Expiry Date',
      field: 'subscription.endDate'
    },
    {
      title: 'Date',
      field: 'createdAt'
    }
  ];

  return <Table title="Users" data={users} columns={columns} />;
};

export default Users;
