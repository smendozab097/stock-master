
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"; // Importamos los estilos del toast

const endpoint = 'http://localhost:3000';

export const getProducts = async () => {
    try {
        const response = await fetch(`${endpoint}/productos`);
        const data = await response.json();
        return data;
    } catch (error) {
        Toastify({
            text: "⚠️ Sistema fuera de servicio. Intente más tarde.",
            duration: 4000, // Se va solo en 4 segundos
            gravity: "top", // Aparece arriba
            position: "right", // Al lado derecho
            style: {
                background: "#e11d48", // Color rojo de Tailwind (rose-600)
                borderRadius: "12px",
                fontWeight: "bold"
            }
        }).showToast();
        console.error('Error fetching products:', error);
        throw error;
    }
}


/* export const getProductById = async (id) => {
    try {
        const response = await fetch(`${endpoint}/productos/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching product with id ${id}:`, error);
        throw error;
    }
} */


export const createProduct = async (producto) => {
    try {
        const response = await fetch(`${endpoint}/productos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creando producto:', error);
        throw error;
    }
}

export const updateProduct = async (id, updatedProduct) => {
    try {
        const response = await fetch(`${endpoint}/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error updating product with id ${id}:`, error);
        throw error;
    }
}

export const deleteProduct = async (id) => {
    try {
        await fetch(`${endpoint}/productos/${id}`, {
            method: 'DELETE'
        });
    } catch (error) {
        console.error(`Error deleting product with id ${id}:`, error);
        throw error;
    }
}
