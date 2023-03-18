import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './assets/utils/navbar';
import Home from './home';
import Movies from './Movies/movies';
import "./assets/css/index.css"
import { Box, Toolbar } from '@mui/material';





export function Netflix(props) {
  return (

    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Navbar></Navbar>
        <Box component="main">
          <Toolbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movies" element={<Movies />}></Route>
          </Routes>
        </Box>
      </Box>
    </BrowserRouter >

  )
}