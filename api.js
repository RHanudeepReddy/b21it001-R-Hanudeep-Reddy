import { BASE_URL } from '../config';

const fetchProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export { fetchProducts };
