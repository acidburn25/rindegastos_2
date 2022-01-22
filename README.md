# Reto #2 Rindegastos

_Se desarrolló una pequeña aplicación que la cual calcula la cantidad de días faltantes para el cumpleaños de un Rindegastino. Se levantó dos servidores locales, uno para el frontend (puerto 3000) y otro para el backend (puerto 5000)._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Instalación 🔧

_Una vez clonado el repositorio, se deberá instalar las dependencias, par esto debemos ubicarnos en las carpetas "client/" y "server/", y en cada una ejecutar el siguiente comando:_
```
npm i
```

_Luego, en cada carpeta mencionada ejecutaremos el siguiente comando para iniciar los servidores locales:_
```
npm start
```

## Ejecutando las pruebas ⚙️

_Una vez realizada la instalación de las dependencias e iniciado los servidores locales, podemos ejecutar las pruebas usando Postman._
_Se generó el endpoint, a modo de ejemplo, "datediff?birthday=2022-06-25", por ende, los parámetros que se usarán serán lo siguientes:_

* birthday - Se ingresará la fecha en la cuál cumplirá años el Rindegastino en el formado yyyy-mm-dd.

_Se muestra en imagen una de las pruebas realzadas:_
![image](https://user-images.githubusercontent.com/92905019/150651732-9c4347c6-7f18-4a78-afba-18e816b698a0.png)

### Analice las pruebas end-to-end 🔩

_Realizaremos la pruebas a través del frontend, para esto ingresaremos los datos anteriormente mencionados en los formatos indicados. Acontinuación, se muestra las imágenes de las pruebas realizadas:_

* Aplicación al levantar el servidor frontend
![image](https://user-images.githubusercontent.com/92905019/150651749-19a8ba75-97cb-4bc5-ae86-a5f3fc2bcf5f.png)

* Ingresamos los datos con los formatos mencionados
![image](https://user-images.githubusercontent.com/92905019/150651835-4f88b3f6-067e-4662-b9a4-cf6907f51127.png)

* Obtenemos el resultado esperado
![image](https://user-images.githubusercontent.com/92905019/150651841-c6c7ab56-9618-4629-a24d-144ee1756469.png)

## Construido con 🛠️
* [NestJS](https://docs.nestjs.com) - Framework Node.js
* [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and Node.js
* [ReactJS](https://es.reactjs.org/) - JavaScript library for building user interfaces

## Autores ✒️

_Este proyecto fue desarrollado con el objetivo de demostrar los conocimientos aprendidos en el mundo de desarrollo._

* **Gabriel Lingan** - *Trabajó enteramente el proyecto* - [acidburn25](https://github.com/acidburn25)
