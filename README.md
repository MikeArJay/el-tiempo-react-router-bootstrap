# El Tiempo

### Objetivo

Desarrollar una aplicación web utilizando React, Bootstrap y Browser Router que muestre información meteorológica para diferentes ciudades. Los datos meteorológicos se proporcionarán en el archivo weather.JSON.

### Requisitos:

1. **Carga de Datos:** Los datos disponibles a lo largo de toda la aplicación estarán para los componentes estarán disponibles en  un contexto WeatherContext y servidas por un provider WeatherProvider.
2. **Rutas**: Utilizar Browser Router para implementar las siguientes rutas:
    - `/`: Muestra la lista de ciudades disponibles.
    - `/ciudad/:nombre`: Muestra la información meteorológica detallada para la ciudad especificada en el parámetro `:nombre`.
3. **Diseño**: Utilizar Bootstrap para el diseño y la presentación de la aplicación. La interfaz debe ser responsive y adaptable a diferentes tamaños de pantalla.

### Apartados:

  1. **Pantallal inicial.** La aplicación debe cargar los datos del fichero siguiendo los requisitos indicados.En la pantalla inicial se mostrará un carrousel con [el tiempo](https://fpdistancia.educastur.es/mod/assign/view.php?id=273613 "El tiempo") de una ciudad. Inicialmente se mostrarán los datos de una ciudad cualquiera. Habrá tantas slides como fechas con tiempo. Cada Slide mostrará una Card con una imagen de ciudad, nombre de ciudad , fecha , y los datos de temperatura y viento. Debajo del carrousel se mostrará un listado de las ciudades disponible con un botón seleccionar que nos cambiará los datos del tiempo mostrados en el  carrousel , pasando a mostrar los datos de tiempo de la ciudad seleccionada.  
 2. **Menú de Navegación.** La aplicación mostrará un menú con el campo ciudades que desplegará un submenú con las ciudades del fichero. Cada enlace a una ciudad nos lleva al detalle de los datos de la temperatura de la ciudad.  
3. **Detalle de ciudad.** Se mostrarán todos los datos de tiempo de la ciudad seleccionada usando una tabla . Las columnas serán las fechas para los distintos datos.