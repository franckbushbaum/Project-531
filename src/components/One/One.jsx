import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function One() {

    const handleChange = (event) => {
        setAge(event.target.value);
      };
      
    return (
        <>
            <p>Under Construction...</p>

            <Box sx={{ minWidth: 120 }}>
                <FormControl sx={{ m: 1, minWidth: 150 }}>
                    <InputLabel id="pick">Pick a workout</InputLabel>
                    <Select
                        labelId="pick"
                        id="demo-simple-select"
                        value='0'
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={1}>Chest</MenuItem>
                        <MenuItem value={2}>Legs</MenuItem>
                        <MenuItem value={3}>Shoulders</MenuItem>
                        <MenuItem value={4}>Back</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </>

    );
}

export default One;