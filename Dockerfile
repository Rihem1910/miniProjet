# Dockerfile pour une API statique simple
FROM node:18-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers nécessaires
COPY package.json ./
COPY server.js ./

# Installer les dépendances
RUN npm install

# Exposer le port 8080
EXPOSE 8080

# Lancer l'application
CMD ["npm", "start"]
