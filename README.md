Proyecto E-Commerce con Microservicios
Descripción
Este proyecto es una aplicación de e-commerce desarrollada utilizando una arquitectura de microservicios. Cada funcionalidad del sistema está implementada como un microservicio independiente para asegurar la escalabilidad, flexibilidad y facilidad de mantenimiento. El frontend de la aplicación está desarrollado en Angular.

Estructura del Proyecto
Frontend
Angular: La interfaz de usuario de la aplicación está desarrollada en Angular. Este frontend consume las API proporcionadas por los microservicios para realizar operaciones como la visualización de productos , procesamiento de pedidos, entre otras.
Microservicios
Cada microservicio está desarrollado de forma independiente y se comunica con los demás a través de API REST. A continuación, se describen los microservicios incluidos en el proyecto:

ms-auth-service: Microservicio para la autenticación y gestión de usuarios.
ms-carrito-service: Microservicio para la gestión del carrito de compras.
ms-catalogo-service: Microservicio para la gestión del catálogo de productos.
ms-cliente-service: Microservicio para la gestión de la información de clientes.
ms-factura-service: Microservicio para la generación y gestión de facturas.(NO disponible Fusionado con procesamiento de pedidos)
ms-gateway-service: Gateway API que centraliza las llamadas a los diferentes microservicios.
ms-inventario-service: Microservicio para la gestión del inventario de productos.
ms-pago-service: Microservicio para el procesamiento de pagos.(NO disponible Fusionado con procesamiento de pedidos)
ms-procesamiento-pedidos-service: Microservicio para la gestión y procesamiento de pedidos.
ms-proveedor-service: Microservicio para la gestión de proveedores.(OFF)
ms-registry-service: Servicio de registro que lleva la cuenta de todos los microservicios disponibles.
producto-service: Microservicio para la gestión de productos.
venta-service: Microservicio para la gestión de ventas.(OFF)
Configuración y Despliegue
Requisitos Previos
Node.js y npm
Angular CLI
Intellij IDE (para despliegue de microservicios)

Instrucciones de Configuración
Clonar el Repositorio
sh
Copiar código
git clone git clone https://github.com/DarkingNro10/ProyectoZapatilla.git
Configurar el Frontend

Navega al directorio del frontend y instala las dependencias:

sh
Abrir el frontend "frond.end"
npm install o npm update
ng build
ng serve
El frontend estará disponible en http://localhost:4200.

sh
Abrir el frontend "E-Comerce-Angular"
npm install o npm update
ng build
ng serve --port 4201
El frontend estará disponible en http://localhost:4201.

Configurar los Microservicios

Cada microservicio tiene su propio archivo de configuración en formato YAML. Navega al directorio de cada microservicio y configura los parámetros necesarios.

Construir y Ejecutar los Microservicios con Intellij IDE:

Abre los microservicios en Intellij IDE, primero habilita las instancias multiples de los microservicios que quieras habilitar
Paso 1(abrir las configuraciones de Debug o Run):
![image](https://github.com/DarkingNro10/ProyectoZapatilla/assets/143747948/a1d3c1f2-dbaf-4f84-8251-0fe449a2c81a)

Paso 2 (ir a modify options y habilitar multiples instacioas)
![image](https://github.com/DarkingNro10/ProyectoZapatilla/assets/143747948/62eb4c24-7bdb-4dae-9df9-4748836392c5)

Corre los microservicios en este orden:
1 config-server
2 registry-server
3 gateway
4 auth o clientes
5 categoria
6 productos
7 carrito de compras
8 procesamiento de pedidos
etc

uso con el frontend
Accede a la interfaz de usuario en http://localhost:4201.
Navega por el catálogo de productos y añade productos al carrito.
Realiza pedidos y procesa el pedido y genera un pdf.
Visualiza y gestiona tus productos y categorias desde la vista admin.

Vista Tienda productos
![image](https://github.com/DarkingNro10/ProyectoZapatilla/assets/143747948/193cf596-8a9e-420b-a602-b18eb2539a55)

Vista carrito de compras
![image](https://github.com/DarkingNro10/ProyectoZapatilla/assets/143747948/7bef405f-7d84-413c-9b21-a2d95b2aeea1)

Vista Procesamiento de pedidos 

![image](https://github.com/DarkingNro10/ProyectoZapatilla/assets/143747948/6501c28f-6a27-40b9-8507-43bca59a21a4)

Vista de Pedido procesado y generar pdf descargable

![image](https://github.com/DarkingNro10/ProyectoZapatilla/assets/143747948/3d7cd942-b79e-4f3a-a4be-5cab90b47b7d)

Pdf generado:

![image](https://github.com/DarkingNro10/ProyectoZapatilla/assets/143747948/9aaf2e40-ed0c-4612-aef5-e569c57fc38e)







