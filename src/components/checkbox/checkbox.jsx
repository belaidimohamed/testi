import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBox({label,onChange}) {
  return (
    <FormGroup>
      <FormControlLabel 
        onChange={(event) => {
          console.log(event.target.checked)
          onChange(event.target.checked)
        }} 
        control={<Checkbox defaultChecked />} 
        label={label} 
      />
    </FormGroup>
  );
}