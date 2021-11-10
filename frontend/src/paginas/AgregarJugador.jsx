import * as React from 'react';
import Grid from '@mui/material/Grid';
import { createStyles } from '@mui/material/styles'
import { yellow } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import { useParams } from 'react-router';
export default function AgregarJugador() {
    let {id}= useParams()
    return(<>
    <Grid>
        <Paper sx={{bgcolor: '#cfe8fc', height: 60, width: 400}} elevation= {6} >
            <Box><h1>{id}Holaaa</h1></Box>
        
        </Paper>
    </Grid>
    
    </>)
}