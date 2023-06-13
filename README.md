# Tienda INFOTECH

Es un proyecto de ecommerce de una tienda de productos informáticos, creado para cumplir con los requisitos necesarios para aprovar el curso de ReactJs dictado por CoderHouse. 

# Tecnologías utilizadas

* NodeJS
* React
* React Router
* Firebase

## Funcionalidades
* Listado de productos disponibles.
* Agregar productos al carrito de compras.
* Ver y quitar productos del carrito.
* Realizar orden de compra. 

## Instalación

### Para instalar y ejecutar la aplicación web en tu máquina, realiza los siguientes pasos:

1. Instalar Node.js.
2. Clonar el repositorio en tu máquina.
3. Abrir una terminal en el directorio del proyecto.
4. Ejecutar el comando 'npx create-react-app "nombreapp"' para instalas las dependencias.
5. Ejecutar el comnado 'npm install react-router-dom' para instalar el paquete que contiene enlaces para usar "React Router", que estan incorporados en la aplicación.
6. Ejecutar el comando 'npm install firebase' el paquete que es necesario para la conexión con Firebase.
7. Ejecutar el comando 'npm start' para iniciar la aplicación web. Lo cual abrira una ventana en tu navegador con la URL "http://localhost:3000" para poder utilizar la misma. 

## Configuración de Firebase

### Para utilizar Firebase en esta aplicación, debes seguir los siguientes pasos:

1. Crea una cuenta en Firebase y crea un nuevo proyecto.
2. En la sección "Authentication" de Firebase, habilita el proveedor de 3. autenticación de correo electrónico y contraseña.
4. En la sección "Firestore" de Firebase, crea una nueva base de datos y configura las reglas de seguridad para permitir lectura/escritura solamente a usuarios autenticados.
5. En la sección "Project settings" de Firebase, haz clic en "Add app" y sigue las instrucciones para agregar una nueva aplicación web.
6. Copia las credenciales de Firebase y configura las variables de entorno en el archivo .env de tu proyecto.

## Licencia
Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más información.