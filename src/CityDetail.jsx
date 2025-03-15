import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/esm/Row";
import { WeatherContext } from "./WeatherProvider";
import { useParams } from "react-router";
import Table from 'react-bootstrap/Table';


export const CityDetail = () => {
    
    const { weatherList } = useContext(WeatherContext)
    const [fechas, setFechas] = useState([]);
    const {ciudad} = useParams();


    useEffect(() => {
        if (weatherList != undefined && weatherList.length > 0) {
            const objCiudad = weatherList.find(objCiudad => objCiudad.nombre === ciudad)
            console.log(objCiudad);
            setFechas(objCiudad.fechas);
        }
    }, [weatherList, ciudad])


    return (
        <Container className="justify-content-center">
            <Row className="text-center m-3"><h1>Tiempo en {ciudad}</h1></Row>
            
                {fechas && fechas.map((fecha, index) => (
                    <Row className="text-center m-2" key={index}>
                    <h2>{fecha.fecha}</h2>
                    <Table striped bordered hover align='center' >
                        <thead>
                            <tr>
                                <td colSpan={2} className='h4'>Temperatura</td>
                                <td colSpan={2} className='h4'>Viento</td>
                                <td colSpan={2} className='h4'>Sol</td>
                                <td className='h4'>Lluvia</td>
                            </tr>
                            <tr>
                                <td>min</td>
                                <td>max</td>
                                <td>velocidad</td>
                                <td>dirección</td>
                                <td>salida</td>
                                <td>puesta</td>
                                <td>mm</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{fecha.temperatura.minima}</td>
                                <td>{fecha.temperatura.maxima}</td>
                                <td>{fecha.viento.velocidad}</td>
                                <td>{fecha.viento.direccion}</td>
                                <td>{fecha.sol.salida}</td>
                                <td>{fecha.sol.puesta}</td>
                                <td>{fecha.lluvia}</td>
                            </tr>
                        </tbody>
                    </Table>
                    </Row>
                ))}
           
        </Container>
    )
}