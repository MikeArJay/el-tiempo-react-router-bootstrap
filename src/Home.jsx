import Carousel from 'react-bootstrap/Carousel';
import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "./WeatherProvider";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardBody from 'react-bootstrap/esm/CardBody';



export const Home = () => {
    const { weatherList, ciudades } = useContext(WeatherContext);
    const [nombreCiudad, setNombreCiudad] = useState("Madrid");
    const [fechas, setFechas] = useState([]);

    useEffect(() => {
        if (weatherList != undefined && weatherList.length > 0) {
            const ciudad = weatherList.find(ciudad => ciudad.nombre === nombreCiudad)
            console.log(ciudad);
            setFechas(ciudad.fechas);
        }
    }, [weatherList, nombreCiudad])

    const selecionarCiudad=(ciudad)=>{
        setNombreCiudad(ciudad);
    }

    return (
        <Container fluid ='md' data-bs-theme="dark" className="min-vh-100 d-flex flex-column justify-content-center align-items-center p-0">


            <Row className="w-100 flex-grow-1 d-flex justify-content-center align-items-center max">
                <Carousel className="w-100 h-100 m-5">
                    {fechas && fechas.map((fecha, index) => (
                        <Carousel.Item key={index} className="h-100">
                            <Image
                                rounded
                                src={`/images/${nombreCiudad}.jpg`}
                                alt={nombreCiudad}
                                className="w-100 h-100"
                                style={{ objectFit: 'cover' }}
                            />
                            <Carousel.Caption >
                                <h1 className='display-1'><strong>{nombreCiudad}</strong></h1>
                                <h2>{fecha.fecha}</h2>
                                <Table striped bordered hover align='center'>
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
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Row>
            <Row>

                {ciudades && ciudades.map(ciudad => (
                    <Col key={ciudad}>
                        <Card>
                            <CardBody >
                            <Card.Title className='text-center'>{ciudad}</Card.Title>
                            <Button variant='light' onClick={()=>selecionarCiudad(ciudad)}>Seleccionar</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}

            </Row>

        </Container>
    );
};