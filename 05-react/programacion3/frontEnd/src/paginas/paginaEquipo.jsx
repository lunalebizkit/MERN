import React, {useEffect} from "react";
import CantidadEquipo from "../components/CantidadEquipo";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GetEquipo } from "../acciones/equipos";
const PaginaEquipo= ()=>{
    const dispatch= useDispatch();
    const equipos= useSelector((state) => state.equipo.listaEquipo);
    const cargando= useSelector((state)=> state.equipo.cargando);
   /* const [equipo, setEquipo]= useState([]);
    const obtenerEquipo= async ()=>{
        const res= await axios.get('http://localhost:4000/equipos');
        setEquipo(res.data)
    }*/
    useEffect(()=>{
        dispatch(GetEquipo());
    }, [dispatch])
    // useEffect(()=>{
    //     obtenerEquipo()
    // }, []);
    const renderEquipo= ()=>{
       return equipos.map( equip =>{
           return (
               <tr key={equip.id}>
               <td>{equip.nombre}</td>
               <td>{equip.talle}</td>
               <td>{equip.precio}</td>
               <td><Link to={`/equipo/${equip.id}`}>Editar</Link></td>
               </tr>
           )
       })
    }
    return(
        <>
        <h2 className="bg-info text-center">Lista de Equipos</h2>
        <CantidadEquipo />
        <table>
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Deporte</th>
                <th>Deporte</th>
                </tr>
            </thead>
            <tbody>
            {renderEquipo()}
            </tbody>
        </table>
        </>
    )
}
export default PaginaEquipo;