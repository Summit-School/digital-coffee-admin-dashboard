import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MainCard from 'ui-component/cards/MainCard';

const AddPlans = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
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
        <form>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Category" onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div style={{ marginBottom: '10px' }}>Price: 1000 FCFA</div>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="demo-simple-select-label">Duration</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Duration" onChange={handleChange}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <TextField label="Description" id="fullWidth" />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <Button variant="contained" component="label">
              Submit
            </Button>
          </FormControl>
        </form>
      </MainCard>
    </Box>
  );
};

export default AddPlans;
