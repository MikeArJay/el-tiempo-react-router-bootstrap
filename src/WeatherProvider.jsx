import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [weatherList, setWeatherList] = useState([]);
    const [ciudades, setCiudades] = useState([]);
    

    const fetchWeather = async () => {
        try {
            const response = await fetch('/weather.json');
            const data = await response.json();
            setWeatherList(data.ciudades);
        } catch (error) {
            console.error('Error al cargar el tiempo:', error);
        }
    };
    useEffect(() => {
        fetchWeather();

    }, [])

    useEffect(() => {
        if (weatherList.length > 0) {
            console.log(weatherList)
            const newCiudades = weatherList.map(ciudad => ciudad.nombre);
            console.log(newCiudades);
            setCiudades(newCiudades);
        }

    }, [weatherList])





    return (
        <WeatherContext.Provider value={{ weatherList, ciudades }}>
            {children}
        </WeatherContext.Provider>
    )
}