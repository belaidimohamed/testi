import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ label = '', onPress }) {
  return (
      <Button sx={{width:240}} variant="contained" color="success" onClick={onPress}>
        {label}
      </Button>
  );
}
