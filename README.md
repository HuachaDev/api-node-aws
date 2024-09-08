# API-NODE-AWS

## Descripción

API-NODE-AWS es un proyecto basado en Node.js que utiliza API Gateway, DynamoDB y AWS . Se implementa servicios relacionados con la API SWAPI. Este proyecto incluye funcionalidades para obtener, agregar y gestionar datos sobre personajes y films de Star Wars, traduciendo las keys de inglés a español.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **API Gateway**: Para la gestión de las rutas y endpoints.
- **DynamoDB**: Base de datos NoSQL de AWS para el almacenamiento de datos.
- **AWS SDK**: Biblioteca para interactuar con los servicios de AWS.
- **node-fetch**: Biblioteca para hacer solicitudes HTTP.
- **uuid**: Biblioteca para generar identificadores únicos.

## Endpoints

- **Obtener Personajes de Star wars**: 
  - `GET https://pjo5do9i3f.execute-api.us-east-2.amazonaws.com/people`
  - Descripción: Obtiene una lista de personajes de Star Wars desde la API SWAPI, con claves traducidas de inglés a español.

- **Obtener Films de Star wars**: 
  - `GET https://pjo5do9i3f.execute-api.us-east-2.amazonaws.com/films`
  - Descripción: Obtiene una lista de films de Star Wars desde la API SWAPI, con claves traducidas de inglés a español.

- **Agregar Personaje**: 
  - `POST https://pjo5do9i3f.execute-api.us-east-2.amazonaws.com/persons`
  - Descripción: Agrega un nuevo personaje a la base de datos. Se requiere enviar un payload con la información del personaje.
  - Example:
    ```bash
  {
    "name": "",
    "height": "",
    "mass": "",
    "hair_color": "",
    "skin_color": "",
    "eye_color": "",
    "gender": "" 
  }

- **Leer Personajes**: 
  - `GET https://pjo5do9i3f.execute-api.us-east-2.amazonaws.com/persons`
  - Descripción: Lee los personajes guardados en la base de datos.

## Instalación

1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/tu_usuario/API-NODE-AWS.git

2. Navega al directorio del proyecto e instala las dependencias:
   ```bash
   git clone https://github.com/tu_usuario/API-NODE-AWS.git
   cd API-NODE-AWS
    npm install

3. Despliega el proyecto en AWS utilizando Serverless Framework:
    serverless deploy  
    serverless deploy --verbose


