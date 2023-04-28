import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [nb_Echeance, setNb_Echeance] = React.useState('');

  const handleChange = (event) => {
    setNb_Echeance(event.target.value);
    
  };

  return (
    <>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Durrée de Crédit</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={nb_Echeance}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={6}>6 mois</MenuItem>
          <MenuItem value={9}>9 mois</MenuItem>
          <MenuItem value={12}>12 mois</MenuItem>
          <MenuItem value={15}>15 mois</MenuItem>
          <MenuItem value={18}>18 mois</MenuItem>
          <MenuItem value={24}>24 mois</MenuItem>
        </Select>
      </FormControl>
    </Box>
    {console.log(nb_Echeance)}</>
  );
}