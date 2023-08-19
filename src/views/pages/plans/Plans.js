import React, { useEffect, useState } from 'react';
import Table from 'ui-component/table/Table';
import { useDispatch } from 'react-redux';
import { readAllPlans } from '../../../store/plansReducer';

const Plans = () => {
  const dispatch = useDispatch();
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    dispatch(readAllPlans()).then((res) => {
      const editable = res.payload.map((o) => ({ ...o }));
      setPlans(editable);
    });
  }, [dispatch]);

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
      field: 'desc'
    },
    {
      title: 'Date',
      field: 'createdAt'
    }
  ];

  return <Table title="Premium plans" data={plans} columns={columns} />;
};

export default Plans;
