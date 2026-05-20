import './styles/globals.css';
import { getProducts, createProduct } from './services/product.service';
import { stockBadgeColor, formatPrice } from "./utils/formatters";

// Este código se ejecuta cuando el HTML ya está cargado.
document.addEventListener('DOMContentLoaded', async () => {
    // Carga inicial de productos existentes desde el backend.
    const products = await getProducts();
    renderProducts(products);

    // Captura el formulario y escucha su envío.
    const form = document.getElementById('product-form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita que la página se recargue.

        // Lee los valores actuales del formulario.
        const data = new FormData(form);
        const producto = {
            id: crypto.randomUUID(), // Genera un ID único para el producto.
            nombre: data.get('nombre').toLowerCase().trim(),
            descripcion: data.get('descripcion'),
            precio: Number(data.get('precio')),
            stock: Number(data.get('stock'))
        };

        // Envía el producto al backend para guardarlo en la base de datos.
        await createProduct(producto);

        // Limpia el formulario para permitir un nuevo ingreso.
        form.reset();

        // Vuelve a cargar y renderizar los productos actualizados.
        const productosActualizados = await getProducts();
        renderProducts(productosActualizados);
    });
});


const renderProducts = (listaDeProductos) => {
    try {
        const tbody = document.getElementById('inventory-list');
        tbody.innerHTML = '';

        listaDeProductos.forEach(producto => {
            tbody.innerHTML += `<tr class="hover:bg-slate-50/30 transition-colors group">
                            <td class="px-8 py-6">
                                <div class="flex flex-col">
                                <span class="capitalize font-bold text-slate-900">${producto.nombre}</span>
                                <span class="text-xs text-slate-400 mt-1 line-clamp-1 max-w-[300px]">${producto.descripcion}</span>
                                </div>
                            </td>
                            <td class="px-8 py-6 text-center">
                                <span class="${stockBadgeColor(producto.stock)}">${producto.stock}</span>
                            </td>
                            <td class="px-8 py-6 text-center font-bold text-slate-900">${formatPrice(producto.precio)}</td>
                            <td class="px-8 py-6 text-right">
                                <div class="flex justify-end gap-3">
                                <button data-id="${producto.id}" class="w-10 h-10 flex items-center justify-center text-indigo-600 hover:bg-indigo-50 rounded-xl transition-all border border-transparent hover:border-indigo-100" title="Editar">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </button>
                                <button data-id="${producto.id}" class="w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-rose-50 rounded-xl transition-all border border-transparent hover:border-rose-100" title="Eliminar">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                                </div>
                            </td>
                        </tr>`
        });
    } catch (error) {
        console.error('Error renderizando productos:', error);
        throw error;
    }
}