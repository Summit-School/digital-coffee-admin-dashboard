import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import MainCard from 'ui-component/cards/MainCard';

const AddCategory = () => {
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
            <TextField label="Category" id="fullWidth" />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 4 }}>
            <TextField label="Price" id="fullWidth" type="number" />
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

export default AddCategory;
