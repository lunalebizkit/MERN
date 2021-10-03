import React, {useEffect, useState} from "react";
import CantidadEquipo from "../components/CantidadEquipo";
import axios from "axios";
import { Link } from "react-router-dom";
const PaginaEquipo= ()=>{
    const [equipo, setEquipo]= useState([]);
    const obtenerEquipo= async ()=>{
        const res= await axios.get('http://localhost:4500/equipos');
        setEquipo(res.data)
    }
    useEffect(()=>{
        obtenerEquipo()
    }, []);
    return(
        <>
        <h2 className="bg-info text-center">Lista de Equipos</h2>
        <table>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Deporte</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        </>
    )
}
export default PaginaEquipo;