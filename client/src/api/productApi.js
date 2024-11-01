export const fetchProducts = async () => {
    const response = await fetch('/api/products');
    return response.json();
};

export const fetchProductById = async (id) => {
    const response = await fetch(`/api/products/${id}`);
    return response.json();
}; 