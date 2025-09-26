document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product1", price: 39.99 },
    { id: 2, name: "Product2", price: 359.9999 },
    { id: 3, name: "Product3", price: 79.99 },
  ];

  const cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPrice = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id=${product.id}>Add to Cart</button>
    `;
    productList.appendChild(productDiv);
  });

  checkoutBtn.addEventListener("click", () => {});
});
