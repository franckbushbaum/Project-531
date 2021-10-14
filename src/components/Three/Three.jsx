import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import { FaHome } from "react-icons/fa";

function Three() {

    const history = useHistory();

    const [inputValue, setInputValue] = useState({one_rep_max: '',
                                                    week: ''});

    


    const setValues = (event) => {
        switch(event.target.id) {
            case 'number':
                setInputValue({...inputValue, one_rep_max: event.target.value})
                break;
            // case 'week':
            //     setInputValue({...inputValue, week: event.target.value})
            //     break;
        }
    }

    const setValuesToo = (event) => {
        setInputValue({...inputValue, week: event.target.value})

    };

    const handleSubmit = (event) => {
        console.log('in handleSubmit')
        console.log(inputValue)
    }

    

    const goBack = () => {
        history.push('/three')
    }

    return (
    <>
        <div className="container-page-three">
            <div className="home-button">
                <div className="the-button">
                <Button variant="contained"
                    size="small"
                    color="secondary"
                    style={{ fontSize: 17, borderRadius: "29px" }}
                    onClick={goBack}><FaHome color="black" style={{ borderRadius: "50%" }} /></Button>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <TextField
                    className="one-rep-max-input"
                    label="Enter One Rep Max"
                    variant="outlined"
                    style={{ backgroundColor: '#dbe3de' }}
                    id="number"
                    required
                    placeholder="One Rep Max"
                    value={inputValue.one_rep_max}
                    onChange={setValues}
                />
                <div className="select-week">
                <Box sx={{ minWidth: 180 }} style={{ backgroundColor: "red" }} >
                    <FormControl id="week3" sx={{ m: 1, minWidth: 185 }}>
                        <InputLabel style={{ backgroundColor: "black" }} id="week">Select Week</InputLabel>
                        <Select
                            labelId="week1"
                            id="week2"
                            value={inputValue.week}
                            label="workout"
                            onChange={setValuesToo}
                        >
                            <MenuItem value={1}>Week 1</MenuItem>
                            <MenuItem value={2}>Week 2</MenuItem>
                            <MenuItem value={3}>Week 3</MenuItem>
                            <MenuItem value={4}>UGH</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                
            </div>
                <input type='submit' value='Submit' />
            </form>
            
            <div className="display"></div>
            <div className="nav-page-three"></div>
        </div>
        
    </>
    );
}

export default Three;