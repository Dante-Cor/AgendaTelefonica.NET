import { useEffect, useState } from 'react';
import { contactoService } from './services/contactoService';
import './App.css';

function App() {
    const [contactos, setContactos] = useState([]);

    // Estados del formulario
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    // Estados NUEVOS para Búsqueda y Edición
    const [busqueda, setBusqueda] = useState(""); // Texto del buscador
    const [idEditando, setIdEditando] = useState(null); // ID del contacto que estamos editando (null si es nuevo)

    // --- LÓGICA DE VISTA ---

    const cargarLista = async () => {
        try {
            const data = await contactoService.obtenerTodos();
            setContactos(data);
        } catch (error) {
            console.error(error);
        }
    };

    // Función Inteligente: Sirve para Guardar (Nuevo) o Actualizar (Existente)
    const manejarEnvio = async (e) => {
        e.preventDefault();
        try {
            const datosFormulario = { nombre, apellido, telefono };

            if (idEditando) {
                // MODO EDICIÓN: Si tenemos un ID, actualizamos
                await contactoService.actualizar(idEditando, datosFormulario);
                alert("¡Contacto actualizado con éxito!");
                setIdEditando(null); // Salimos del modo edición
            } else {
                // MODO CREACIÓN: Si no hay ID, creamos uno nuevo
                await contactoService.crear(datosFormulario);
                alert("¡Contacto guardado!");
            }

            // Limpieza común
            setNombre(""); setApellido(""); setTelefono("");
            await cargarLista();

        } catch (error) {
            alert("Ocurrió un error en la operación");
        }
    };

    // Función para llenar el formulario cuando damos click en "Editar"
    const iniciarEdicion = (contacto) => {
        setNombre(contacto.nombre);
        setApellido(contacto.apellido);
        setTelefono(contacto.telefono);
        setIdEditando(contacto.id); // Activamos el "Modo Edición"
    };

    const cancelarEdicion = () => {
        setNombre(""); setApellido(""); setTelefono("");
        setIdEditando(null);
    };

    const manejarEliminacion = async (id) => {
        if (!window.confirm("¿Seguro que quieres eliminar a este contacto?")) return;
        try {
            await contactoService.eliminar(id);
            await cargarLista();
            if (idEditando === id) cancelarEdicion(); // Si borras lo que estabas editando, limpia el form
        } catch (error) {
            alert("No se pudo eliminar");
        }
    };

    useEffect(() => {
        cargarLista();
    }, []);

    // --- FILTRO DE BÚSQUEDA ---
    // Creamos una lista temporal filtrada basada en lo que escribas
    const contactosFiltrados = contactos.filter(c =>
        c.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        c.apellido.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", color: "#eee" }}>📒 Agenda Telefónica </h1>

            {/* 🔍 BARRA DE BÚSQUEDA */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="🔍 Buscar contacto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "none", fontSize: "16px" }}
                />
            </div>

            {/* FORMULARIO INTELIGENTE */}
            <div style={{ background: "#2a2a2a", padding: "20px", borderRadius: "10px", marginBottom: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.3)" }}>
                <h3 style={{ marginTop: 0, color: idEditando ? "#ffca28" : "#4CAF50" }}>
                    {idEditando ? "✏️ Editando Contacto" : "➕ Agregar Nuevo"}
                </h3>
                <form onSubmit={manejarEnvio}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                        <input placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} style={{ padding: "8px", borderRadius: "4px", border: "none" }} required />
                        <input placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} style={{ padding: "8px", borderRadius: "4px", border: "none" }} required />
                    </div>
                    <input placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} style={{ width: "100%", marginTop: "10px", padding: "8px", borderRadius: "4px", border: "none", boxSizing: "border-box" }} required />

                    <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
                        <button type="submit" style={{ flex: 1, background: idEditando ? "#ffca28" : "#4CAF50", color: idEditando ? "#000" : "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                            {idEditando ? "💾 Actualizar" : "💾 Guardar"}
                        </button>

                        {idEditando && (
                            <button type="button" onClick={cancelarEdicion} style={{ background: "#f44336", color: "white", border: "none", padding: "10px", borderRadius: "5px", cursor: "pointer" }}>
                                ❌ Cancelar
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* LISTA DE RESULTADOS */}
            <h3 style={{ color: "#ccc" }}>
                📞 Mis Contactos ({contactosFiltrados.length})
            </h3>

            {contactosFiltrados.length === 0 && (
                <p style={{ textAlign: "center", color: "#666" }}>No se encontraron contactos.</p>
            )}

            <ul style={{ listStyle: "none", padding: 0 }}>
                {contactosFiltrados.map((c) => (
                    <li key={c.id} style={{ background: "#333", margin: "8px 0", padding: "15px", borderRadius: "8px", display: "flex", justifyContent: "space-between", alignItems: "center", borderLeft: "5px solid #4CAF50" }}>
                        <div>
                            <span style={{ fontSize: "1.1em", display: "block", color: "white" }}>👤 <b>{c.nombre} {c.apellido}</b></span>
                            <small style={{ color: "#bbb" }}>📞 {c.telefono}</small>
                        </div>

                        <div style={{ display: "flex", gap: "8px" }}>
                            {/* Botón Editar */}
                            <button
                                onClick={() => iniciarEdicion(c)}
                                style={{ background: "#ffca28", border: "none", padding: "8px", borderRadius: "4px", cursor: "pointer" }}
                                title="Editar"
                            >
                                ✏️
                            </button>

                            {/* Botón Eliminar */}
                            <button
                                onClick={() => manejarEliminacion(c.id)}
                                style={{ background: "#ff5252", border: "none", padding: "8px", borderRadius: "4px", cursor: "pointer" }}
                                title="Eliminar"
                            >
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;