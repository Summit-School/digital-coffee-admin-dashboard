import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MainCard from 'ui-component/cards/MainCard';
// redux imports
import { useDispatch } from 'react-redux';
import { create } from '../../../store/planCatsReducers';
import { toast } from 'react-toastify';

const AddCategory = () => {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCatFunction = () => {
    const data = {
      title: category,
      price
    };
    dispatch(create(data), setLoading(true))
      .then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setLoading(false);
          toast.success('category added');
        }
        if (res.meta.requestStatus === 'rejected') {
          setLoading(false);
          toast.error(res.payload);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        width: 800,
        maxWidth: '100%',
        margin: 'auto'
      }}
      noValidate
      autoComplete="off"
    >
      <MainCard>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <TextField label="Category" id="fullWidth" onChange={(e) => setCategory(e.target.value)} />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <TextField label="Price" id="fullWidth" type="number" onChange={(e) => setPrice(e.target.value)} />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Button variant="contained" component="label" onClick={handleCatFunction}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </FormControl>
      </MainCard>
    </Box>
  );
};

export default AddCategory;
