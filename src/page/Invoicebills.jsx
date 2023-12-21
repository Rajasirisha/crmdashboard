import React from 'react';
import Navbar from '../components/Navbar';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';

const Invoicebills = () => {
    return (
        <>
             <Navbar />
             <Box height={30} />
             <Box sx={{display: "flex"}}>  
             <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p:4}}>
            <h1>Welcome to Invoice Bills</h1>
            </Box>
            </Box>
        </> 
    );
};

export default Invoicebills;