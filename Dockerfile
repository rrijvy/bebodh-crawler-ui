FROM node:20-alpine3.18
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV NEXT_PUBLIC_API_URL=http://localhost:28851/api
ENV API_URL=http://localhost:28851/api
ENV SOCKET_URL=wss://localhost:44364/ws
ENV NEXT_PUBLIC_SOCKET_URL=wss://localhost:44364/ws
ENV NEXTAUTH_SECRET="My custom Secret key for authentication."
EXPOSE 3000
CMD [ "npm", "run", "dev" ]