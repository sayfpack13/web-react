import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './assets/utils/navbar';
import Home from './home';
import { Box, Toolbar } from '@mui/material';
import "./assets/css/index.css"
import Login from './login';
import { getUser } from './assets/utils/functions';


export default function CV() {
    const [user, setUser] = useState(getUser())



    if (user.status) {
        // loggedin
        return (

            <BrowserRouter>
                <Box sx={{ display: 'flex' }}>
                    <Navbar setUser={setUser}></Navbar>
                    <Box component="main" width="100%">
                        <Toolbar />
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter >

        )
    } else {
        // visitor
        return (

            <BrowserRouter>
                <Box sx={{ display: 'flex' }}>
                    <Navbar></Navbar>
                    <Box component="main" width="100%">
                        <Toolbar />
                        <Routes>
                            <Route path="/" element={<Home />}></Route>
                            <Route path="/login" element={<Login setUser={setUser}/>}></Route>
                        </Routes>
                    </Box>
                </Box>
            </BrowserRouter >

        )
    }

}
