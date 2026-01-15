
const API_URL = '/api/contactos';

export const contactoService = {
    // 1. Obtener todos (GET)
    async obtenerTodos() {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Error al cargar contactos");
        return await response.json();
    },

    // 2. Crear nuevo (POST)
    async crear(nuevoContacto) {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(nuevoContacto)
        });
        if (!response.ok) throw new Error("Error al guardar");
        return true;
    },

    // 3. Actualizar existente (PUT) 
    async actualizar(id, contactoModificado) {
        // El backend espera que el objeto incluya el ID, así que lo combinamos
        const datosEnviar = { id, ...contactoModificado };

        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datosEnviar)
        });

        if (!response.ok) throw new Error("Error al actualizar");
        return true;
    },

    // 4. Eliminar (DELETE)
    async eliminar(id) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error("Error al eliminar");
        return true;
    }
};