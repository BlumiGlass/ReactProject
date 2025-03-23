export const fetchData = async () => {
    return new Promise(async(resolve, reject) => {
            try {
                if (Math.random() < 0.2) {
                    throw new Error("Simulated network error");
                }
                const response = await fetch('https://dummyjson.com/products/category/kitchen-accessories?delay=3000');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                resolve(result.products);
            } catch (error) {
                reject(error.message);
            }
    });
};