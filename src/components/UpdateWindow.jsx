import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';


function UpdateWindow() {

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        console.log('do nothing')
    }, []);

    return (
        <>
            <div className="update-window">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque id diam vel quam 
                elementum pulvinar etiam. Aliquam vestibulum morbi blandit cursus risus. Sed tempus urna et pharetra pharetra massa massa ultricies. Faucibus pulvinar elementum integer enim neque. Lacus sed viverra tellus in hac habitasse platea. Nibh ipsum consequat nisl vel pretium lectus. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. 
                Volutpat sed cras ornare arcu dui vivamus arcu felis. Urna condimentum 
                mattis pellentesque id nibh tortor id. Donec ac odio tempor orci dapibus ultrices. 
                Consequat ac felis donec et odio pellentesque. Felis bibendum ut tristique et.
            </div>
        </>
    )
}

export default UpdateWindow;