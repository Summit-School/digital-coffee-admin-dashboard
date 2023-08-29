import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MainCard from 'ui-component/cards/MainCard';
// redux imports
import { useDispatch } from 'react-redux';
import { create } from '../../../store/plansReducer';
import { readAll } from '../../../store/planCatsReducers';
import { toast } from 'react-toastify';

const AddPlans = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState('');
  const [duration, setDuration] = useState('');
  const [desc, setDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(readAll()).then((res) => {
      const editable = res.payload.map((o) => ({ ...o }));
      setCategories(editable);
    });
  }, [dispatch]);

  const handlePlansFunction = () => {
    const data = {
      category: category.title,
      price: category.price,
      duration,
      desc
    };
    dispatch(create(data), setLoading(true))
      .then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setLoading(false);
          toast.success('plan added');
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
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories &&
              categories.map((item) => (
                <MenuItem value={item} key={item._id}>
                  {item.title}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <div style={{ marginBottom: '10px' }}>Price: {category && category.price} FCFA</div>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="demo-simple-select-label">Duration</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={duration}
            label="Duration"
            onChange={(e) => setDuration(e.target.value)}
          >
            <MenuItem value={1}>One month</MenuItem>
            <MenuItem value={3}>Three months</MenuItem>
            <MenuItem value={6}>Six months</MenuItem>
            <MenuItem value={12}>One year</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 4 }}>
          <TextField label="Description" id="fullWidth" onChange={(e) => setDesc(e.target.value)} />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Button variant="contained" component="label" onClick={handlePlansFunction}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </FormControl>
      </MainCard>
    </Box>
  );
};

export default AddPlans;
