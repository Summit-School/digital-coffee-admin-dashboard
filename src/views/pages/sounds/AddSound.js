import React, { useState } from 'react';
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
// import { readAll } from '../../../store/planCatsReducers';
// import { readAllPlans } from '../../../store/plansReducer';
import { upload } from '../../../store/soundReducer';

import { toast } from 'react-toastify';

const AddSound = () => {
  const [loading, setLoading] = useState(false);
  // const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [plan, setPlan] = useState('');
  const [coverAlbum, setCoverAlbum] = useState(null);
  const [sound, setSound] = useState(null);

  const handleSoundFunction = () => {
    let data = new FormData();
    data.append('title', title);
    data.append('category', category);
    data.append('coverImage', coverAlbum);
    data.append('sound', sound);
    data.append('premium', plan);

    dispatch(upload(data), setLoading(true))
      .then((res) => {
        if (res.meta.requestStatus === 'fulfilled') {
          setLoading(false);
          toast.success('sound uploaded');
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
          <TextField label="Title" id="fullWidth" onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          {/* <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
          </Select> */}
          <TextField label="Category" id="fullWidth" onChange={(e) => setCategory(e.target.value)} />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="demo-simple-select-label">Premium</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={plan}
            label="Premium"
            onChange={(e) => setPlan(e.target.value)}
          >
            <MenuItem value="free">Free</MenuItem>
            <MenuItem value="premium">Premium</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Button variant="outlined" component="label">
            Upload Cover Album
            <input type="file" hidden onChange={(e) => setCoverAlbum(e.target.files[0])} />
          </Button>
          {coverAlbum && coverAlbum.name}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 4 }}>
          <Button variant="outlined" component="label">
            Upload Sound
            <input type="file" hidden onChange={(e) => setSound(e.target.files[0])} />
          </Button>
          {sound && sound.name}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <Button variant="contained" component="label" onClick={handleSoundFunction}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </FormControl>
      </MainCard>
    </Box>
  );
};

export default AddSound;
