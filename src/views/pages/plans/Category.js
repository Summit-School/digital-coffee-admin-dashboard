import React, { useEffect, useState } from 'react';
import Table from 'ui-component/table/Table';
import { useDispatch } from 'react-redux';
import { readAll } from '../../../store/planCatsReducers';

const Category = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    dispatch(readAll()).then((res) => {
      const editable = res.payload.map((o) => ({ ...o }));
      setCategories(editable);
    });
  }, [dispatch]);
  const columns = [
    {
      title: 'Title',
      field: 'title'
    },
    {
      title: 'Price',
      field: 'price'
    },
    {
      title: 'Date',
      field: 'createdAt'
    }
  ];

  return <Table title="Premium plan categories" data={categories} columns={columns} />;
};

export default Category;
