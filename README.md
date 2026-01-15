# 📱 Agenda Telefónica FullStack (.NET Core)

Bienvenido al repositorio de **AgendaTelefonica.NET**. Este es un proyecto de gestión de contactos desarrollado con tecnologías modernas del ecosistema .NET, demostrando una arquitectura limpia y buenas prácticas de desarrollo Full Stack.

## 🚀 Descripción

Esta aplicación permite a los usuarios gestionar una agenda telefónica personal a través de una interfaz web intuitiva. Realiza operaciones **CRUD** completas (Crear, Leer, Actualizar y Borrar) conectándose a una base de datos SQL Server.

El proyecto fue construido enfocándose en la escalabilidad y el mantenimiento, utilizando Entity Framework Core para el manejo de datos.

## 🛠️ Tecnologías Utilizadas

### Backend (Servidor)
* **Framework:** ASP.NET Core Web API (C#)
* **ORM:** Entity Framework Core
* **Base de Datos:** SQL Server (LocalDB)
* **Documentación API:** OpenAPI (Nativo .NET)

### Frontend (Cliente)
* **Librería UI:** React.js
* **Estilos:** CSS3 
* **Consumo de API:** Fetch (Nativo)
  
###  Nube
* **Despliegue:** Microsoft Azure

## ✨ Funcionalidades Principales

* ✅ **Interfaz Reactiva:** Carga de datos sin recargar la página (SPA).
* ✅ **Gestión de Contactos:** Crear, leer, editar y eliminar registros.
* ✅ **Conexión API:** Comunicación asíncrona entre React y .NET.
* ✅ **Base de Datos Relacional:** Persistencia de datos en SQL Server.
  
## 🔧 Configuración e Instalación Local

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Dante-Cor/AgendaTelefonica.NET.git](https://github.com/Dante-Cor/AgendaTelefonica.NET.git)
    ```

2.  **Configurar Backend (.NET):**
    * Abre la solución en Visual Studio 2022.
    * Asegúrate de que la cadena de conexión en `appsettings.json` apunte a tu instancia local de SQL Server.
    * Ejecuta las migraciones en la consola:
      ```powershell
      Update-Database
      ```
    * Inicia el proyecto de Backend (API).

3.  **Configurar Frontend (React):**
    * Navega a la carpeta del cliente (por ejemplo `/ClientApp` o donde esté tu código React).
    * Instala las dependencias:
      ```bash
      npm install
      ```
    * Inicia el servidor de desarrollo:
      ```bash
      npm start
      ```
## 📂 Estructura del Proyecto

* `/Controllers`: Endpoints de la API (.NET).
* `/Models`: Definición de datos y entidades.
* `/ClientApp` (o `/Frontend`): Código fuente de la aplicación React.
* `/Data`: Contexto de base de datos (DbContext).

## 👤 Autor:

**Dante** - *Desarrollador Full Stack .NET*
* [Perfil de GitHub Dante-Cor](https://github.com/Dante-Cor)

---
*Este proyecto es parte de mi portafolio profesional y práctica continua en tecnologías .NET.*
