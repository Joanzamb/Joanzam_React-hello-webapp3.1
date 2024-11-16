const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            agenda: "my_agenda", // Asegúrate de que este slug sea correcto y exista en la API
            demo: [] // Array para datos de demostración
        },
        actions: {
            // Obtener todos los contactos de la agenda
            getContacts: async () => {
                const store = getStore();
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`);
                    if (!resp.ok) {
                        throw new Error(`Error HTTP! status: ${resp.status}`);
                    }
                    const data = await resp.json();
                    setStore({ contacts: data }); // La API devuelve un array de contactos
                } catch (error) {
                    console.error("Error al cargar los contactos:", error);
                }
            },

            // Agregar un nuevo contacto
            addContact: async (contact) => {
                const store = getStore();
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`, {
                        method: "POST",
                        body: JSON.stringify(contact),
                        headers: { "Content-Type": "application/json" }
                    });
                    if (!resp.ok) {
                        throw new Error(`Error HTTP! status: ${resp.status}`);
                    }
                    await getActions().getContacts(); // Refresca los contactos después de añadir
                } catch (error) {
                    console.error("Error al agregar el contacto:", error);
                }
            },

            // Actualizar un contacto existente
            updateContact: async (id, updatedContact) => {
                const store = getStore();
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`, {
                        method: "PUT",
                        body: JSON.stringify(updatedContact),
                        headers: { "Content-Type": "application/json" }
                    });
                    if (!resp.ok) {
                        throw new Error(`Error HTTP! status: ${resp.status}`);
                    }
                    await getActions().getContacts(); // Refresca los contactos después de actualizar
                } catch (error) {
                    console.error("Error al actualizar el contacto:", error);
                }
            },

            // Eliminar un contacto
            deleteContact: async (id) => {
                const store = getStore();
                try {
                    const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`, {
                        method: "DELETE"
                    });
                    if (!resp.ok) {
                        throw new Error(`Error HTTP! status: ${resp.status}`);
                    }
                    await getActions().getContacts(); // Refresca los contactos después de eliminar
                } catch (error) {
                    console.error("Error al eliminar el contacto:", error);
                }
            },

            // Cambiar el color de un elemento demo
            changeColor: (index, color) => {
                const store = getStore();
                const updatedDemo = [...store.demo];
                if (updatedDemo[index]) {
                    updatedDemo[index].background = color;
                    setStore({ demo: updatedDemo });
                }
            },

            // Cargar datos de demostración (si es necesario)
            loadDemoData: async () => {
                // Puedes añadir lógica aquí si necesitas cargar datos demo
            }
        }
    };
};

export default getState;
