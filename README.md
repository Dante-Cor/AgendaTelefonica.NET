# 📱 Agenda Telefónica FullStack (.NET Core)

Bienvenido al repositorio de **AgendaFullStack**. Este es un proyecto de gestión de contactos desarrollado con tecnologías modernas del ecosistema .NET, demostrando una arquitectura limpia y buenas prácticas de desarrollo Full Stack.

## 🚀 Descripción

Esta aplicación permite a los usuarios gestionar una agenda telefónica personal a través de una interfaz web intuitiva. Realiza operaciones **CRUD** completas (Crear, Leer, Actualizar y Borrar) conectándose a una base de datos SQL Server.

El proyecto fue construido enfocándose en la escalabilidad y el mantenimiento, utilizando Entity Framework Core para el manejo de datos.

## 🛠️ Tecnologías Utilizadas

* **Backend:** ASP.NET Core (C#)
* **ORM:** Entity Framework Core
* **Base de Datos:** SQL Server (LocalDB para desarrollo)
* **Frontend:** HTML5, CSS3, Bootstrap (Razor Views)
* **Control de Versiones:** Git & GitHub
* **Despliegue:** Microsoft Azure

## ✨ Funcionalidades Principales

* ✅ **Listar Contactos:** Vista general de todos los registros en la agenda.
* ✅ **Crear Nuevo Contacto:** Formulario validado para ingresar nombre, teléfono, email, etc.
* ✅ **Editar Información:** Capacidad de modificar datos existentes.
* ✅ **Eliminar Contacto:** Borrado de registros de la base de datos.
* ✅ **Diseño Responsivo:** Adaptable a dispositivos móviles y escritorio.

## 🔧 Configuración e Instalación Local

Si deseas correr este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Dante-Cor/AgendaTelefonica.NET.git](https://github.com/Dante-Cor/AgendaTelefonica.NET.git)
    ```

2.  **Abrir en Visual Studio:**
    Abre el archivo de solución `.sln` con Visual Studio 2022.

3.  **Configurar Base de Datos:**
    El proyecto usa `(localdb)\mssqllocaldb` por defecto. Asegúrate de que tu cadena de conexión en `appsettings.json` sea correcta:
    ```json
    "ConnectionStrings": {
      "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=AgendaFullStackDB;Trusted_Connection=True;MultipleActiveResultSets=true"
    }
    ```

4.  **Ejecutar Migraciones:**
    Abre la **Consola del Administrador de Paquetes** en Visual Studio y ejecuta:
    ```powershell
    Update-Database
    ```
    Esto creará la base de datos y las tablas automáticamente en tu servidor local.

5.  **¡Correr la App!**
    Presiona `F5` o el botón de Play en Visual Studio para iniciar el servidor.

## 📂 Estructura del Proyecto

* `/Models`: Definición de las entidades de datos (Contacto, etc.).
* `/Data`: Contexto de la base de datos (ApplicationDbContext).
* `/Controllers`: Lógica de negocio y manejo de peticiones HTTP.
* `/Views`: Interfaz de usuario construida con Razor.

## 👤 Autor

**Dante** - *Desarrollador Full Stack .NET*
* [Perfil de GitHub](https://github.com/Dante-Cor)

---
*Este proyecto es parte de mi portafolio profesional y práctica continua en tecnologías .NET.*
