import * as React from 'react';
import { useParams } from 'react-router';
export default function AgregarJugador() {
    let {id}= useParams()
    console.log(id)
    return(<>
    <h1>{id}Holaaa</h1>
    </>)
}