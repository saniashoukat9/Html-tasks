const products = [{
    "id": 1,
    "name": "Product no 01",
    "description": "High-quality product with modern features.",
    "price": 29.99,
    "currency": "USD",
    "inStock": true,
    "category": "Electronics",
    "tags": ["gadget", "tech", "new"],
    "createdAt": "2025-05-16T10:00:00Z",
    "updatedAt": "2025-05-16T10:00:00Z" 
  },
  {
    "id": 2,
    "name": "Product no 02",
    "description": "Durable and affordable item for everyday use.",
    "price": 15.50,
    "currency": "USD",
    "inStock": false,
    "category": "Home & Kitchen",
    "tags": ["kitchen", "daily-use"],
    "createdAt": "2025-05-15T12:30:00Z",
    "updatedAt": "2025-05-15T12:30:00Z"
  }
];
const container = document.getElementsByClassName("card-container")[0];

products.map(function(product) {
  const card = document.createElement("div");
  card.className = "card";


  card.innerHTML = `
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <p>Price: ${product.currency} ${product.price}</p>
    <p>Category: ${product.category}</p>
    <p> ${product.inStock ? "Available" : "Out of Stock"}</p>
    <p>Tags: ${product.tags.join(", ")}</p>
    <p>CreatedAt: ${product.createdAt} </p>
    <p>UpdatedAt: ${product.updatedAt} </p>
  `;

  container.appendChild(card);
})
