
const getState = ({ getStore, getActions, setStore }) => {
  return {
      store: {
          contacts: [],
          agenda: "my_agenda", // Asegúrate de que este slug sea correcto y exista en la API
          demo: []  // Inicializa demo como un array vacío
      },
      actions: {
          getContacts: async () => {
              const store = getStore();
              try {
                  const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`);
                  if (!resp.ok) {
                      throw new Error(`HTTP error! status: ${resp.status}`);
                  }
                  const data = await resp.json();
                  setStore({ contacts: data.contacts });
              } catch (error) {
                  console.error("Error loading contacts", error);
              }
          },
          addContact: async (contact) => {
              const store = getStore();
              try {
                  const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts`, {
                      method: "POST",
                      body: JSON.stringify(contact),
                      headers: { "Content-Type": "application/json" }
                  });
                  if (!resp.ok) {
                      throw new Error(`HTTP error! status: ${resp.status}`);
                  }
                  await getActions().getContacts();
              } catch (error) {
                  console.error("Error adding contact", error);
              }
          },
          updateContact: async (id, updatedContact) => {
              const store = getStore();
              try {
                  const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`, {
                      method: "PUT",
                      body: JSON.stringify(updatedContact),
                      headers: { "Content-Type": "application/json" }
                  });
                  if (!resp.ok) {
                      throw new Error(`HTTP error! status: ${resp.status}`);
                  }
                  await getActions().getContacts();
              } catch (error) {
                  console.error("Error updating contact", error);
              }
          },
          deleteContact: async (id) => {
              const store = getStore();
              try {
                  const resp = await fetch(`https://playground.4geeks.com/contact/agendas/${store.agenda}/contacts/${id}`, {
                      method: "DELETE"
                  });
                  if (!resp.ok) {
                      throw new Error(`HTTP error! status: ${resp.status}`);
                  }
                  await getActions().getContacts();
              } catch (error) {
                  console.error("Error deleting contact", error);
              }
          },
          loadDemoData: async () => {
              // Implementa la lógica para cargar datos demo aquí si es necesario
              // Ejemplo:
              // const resp = await fetch('/api/demo');
              // const data = await resp.json();
              // setStore({ demo: data });
          },
          changeColor: (index, color) => {
              const store = getStore();
              const updatedDemo = [...store.demo];
              if (updatedDemo[index]) {
                  updatedDemo[index].background = color;
                  setStore({ demo: updatedDemo });
              }
          }
      }
  };
};

export default getState;
