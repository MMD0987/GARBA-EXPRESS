window.addEventListener('scroll', function(){
    const header =document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0 );
});

function toggleMenu(){
    const tmenuToggle = document.querySelector('.menuToggle');
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
}

 // Gérer le panier d'achat
 let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += parseInt(item.price);
        cartItems.innerHTML += `
            <li>
                ${item.name} - ${item.price} FCFA
                <button onclick="removeFromCart(${index})">SUPPRIMER</button>
            </li>`;
    });
    cartTotal.textContent = total;
}

function checkout() {
    alert('Merci pour votre commande!');
    cart = [];
    renderCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = button.getAttribute('data-price');
        addToCart(name, price);
    });
});
