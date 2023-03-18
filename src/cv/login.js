import React, { useState } from 'react'
import { Button, Box, Paper, Grid, TextField } from '@mui/material';
import { fields_style, navigate } from './assets/utils/vars';
import { loginUser } from './assets/utils/functions';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
    const [username, setUser] = useState("")
    const [password, setPass] = useState("")
    const navigate = useNavigate()

    const login = () => {
        var rslt = loginUser(username, password)
        props.setUser(rslt)
        if (rslt.status) {
            navigate("/")
        }
    }
    return (

        <Box sx={{ marginLeft: "auto", marginRight: "auto", marginTop: "50px", width: "50%", textAlign: "center", display: "grid" }} bgcolor="#dbdbdb">
            <h1 style={{ color: "#000" }}>Login</h1>

            <TextField sx={fields_style} label="Username" onChange={e => setUser(e.target.value)} value={username} variant="outlined" />
            <br></br>
            <TextField sx={fields_style} label="Password" onChange={e => setPass(e.target.value)} value={password} variant="outlined" />
            <br></br>

            <Button onClick={() => { login() }} variant="contained" size="large">Login</Button>
        </Box>
    )
}
