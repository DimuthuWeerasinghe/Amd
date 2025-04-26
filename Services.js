async function Service() {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        const products = await response.json();
        console.log(products);

        const productsContainer = document.getElementById('products');
        
        // Clear existing content
        productsContainer.innerHTML = '';

        // Loop over products and create cards
        products.forEach(product => {
            const card = `
                <div class="col" >
                    <div class="card shadow-sm h-100" >
                        <img src="${product.image}" alt="${product.title}" class="card-img-top" style="width:70%; height:150px; object-fit:contain; margin:auto; padding-top:10px;">
                        <div class="card-body text-center">
                            <h5 class="card-title" style="font-size:16px;">${product.title}</h5>
                            <p class="card-text">$${product.price}</p>
                        </div>
                    </div>
                </div>
            `;
            productsContainer.innerHTML += card;
        });

    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the function when page loads
Service();
