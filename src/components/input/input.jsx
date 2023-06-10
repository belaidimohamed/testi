import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

export default function Input({label='',type='text',error=null,onChange}) {
  const [value, setValue] = useState('')
  return (
    <div>
      <TextField
        type={type}
        error= {error? true : false}
        value={value}
        onChange = {(event) => {
          setValue(event.target.value)
          onChange(event.target.value)
        }}

        label={label}
        helperText={error}
      />
    </div>
  )
}