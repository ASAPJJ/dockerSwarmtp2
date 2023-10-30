# Usar la imagen ligera de Node.js basada en Alpine
FROM node:16-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar archivos de definición de paquetes y paquetes bloqueados
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto que tu aplicación usará (por ejemplo, 3000)
EXPOSE 3000

# Comando para ejecutar tu aplicación
CMD [ "node", "soapServer.js" ]
