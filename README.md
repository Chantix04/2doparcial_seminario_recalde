# Seminario_2doparcial_Recalde



### Creación de Imágenes:

En primer lugar, creamos las imágenes necesarias para nuestros servicios utilizando los siguientes comandos de Docker:

1. **API REST:**
    ```bash
    docker build -t rest .
    ```

2. **API SOAP:**
    ```bash
    docker build -t soap .
    ```

3. **Cliente:**
    ```bash
    docker build -t cliente .
    ```

4. **MySQL:**
    ```bash
    docker build -t mysql-image .
    ```

### Despliegue con Docker Swarm:

Luego, procedemos a desplegar nuestros servicios utilizando Docker Swarm:

1. **Inicialización de Swarm:**
    ```bash
    docker swarm init
    ```

2. **Despliegue con Docker Stack:**
    ```bash
    docker stack deploy -c docker-compose.yml mis-servicios
    ```

### Información Adicional:

- El servidor SOAP está configurado para escuchar en el puerto 5555.
- El servidor web está alojado en `localhost:8080`.
- Para poder visualizar la vista del html debe ingresar en http://127.0.0.1:5500/client/index.html

