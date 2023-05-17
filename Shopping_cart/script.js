// Cart items
let cartItems = [];

// Function to add an item to the cart
function addItemToCart(item) {
  cartItems.push(item);
  displayCartItems();
}

// Function to remove an item from the cart
function removeItemFromCart(index) {
  cartItems.splice(index, 1);
  displayCartItems();
  updateTotal();
}

// Function to display the cart items
function displayCartItems() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  if (cartItems.length === 0) {
    const emptyCartMessage = document.createElement('div');
    emptyCartMessage.classList.add('empty-cart-message');
    emptyCartMessage.innerText = 'Cart is empty';
    cartContainer.appendChild(emptyCartMessage);
  } else {
    for (let i = 0; i < cartItems.length; i++) {
      const itemContainer = document.createElement('div');
      itemContainer.classList.add('cart-item');

      const itemImage = document.createElement('img');
      itemImage.src = cartItems[i].image;
      itemImage.alt = cartItems[i].name;
      itemImage.classList.add('item-image');

      const itemName = document.createElement('span');
      itemName.innerText = cartItems[i].name;
      itemName.classList.add('item-name');

      const itemPrice = document.createElement('span');
      itemPrice.innerText = '₫' + cartItems[i].price;
      itemPrice.classList.add('item-price');

      const quantityInput = document.createElement('input');
      quantityInput.type = 'number';
      quantityInput.min = '1';
      quantityInput.value = cartItems[i].quantity;
      quantityInput.addEventListener('input', () => {
        updateItemQuantity(i, parseInt(quantityInput.value));
      });

      const removeButton = document.createElement('button');
      removeButton.innerText = 'Remove product';
      removeButton.classList.add('remove');
      removeButton.setAttribute('onclick', `removeItemFromCart(${i})`);

      const totalProductPrice = document.createElement('span');
      totalProductPrice.innerText = 'Total: ₫' + (cartItems[i].quantity * cartItems[i].price);
      totalProductPrice.classList.add('total-product-price');

      itemContainer.appendChild(itemImage);
      itemContainer.appendChild(itemName);
      itemContainer.appendChild(itemPrice);
      itemContainer.appendChild(quantityInput);
      itemContainer.appendChild(totalProductPrice);
      itemContainer.appendChild(removeButton);
      cartContainer.appendChild(itemContainer);
    }

    updateTotal();
  }
}

// Function to update item quantity
function updateItemQuantity(index, quantity) {
  if (quantity < 1) {
    removeItemFromCart(index);
  } else {
    cartItems[index].quantity = quantity;
  }
  displayCartItems();
  updateTotal();
}

// Function to clear the cart
function clearCart() {
  cartItems = [];
  displayCartItems();
  updateTotal();
}

// Function to calculate and display the total
function updateTotal() {
  let subtotal = 0;
  for (let i = 0; i < cartItems.length; i++) {
    subtotal += cartItems[i].quantity * cartItems[i].price;
  }
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  document.getElementById('subtotal').textContent = '₫' + subtotal;
  document.getElementById('tax').textContent = '₫' + tax;
  document.getElementById('total').textContent = '₫' + total;
}

// Example usage
addItemToCart({ name: 'MAC Mini Lipstick 1.8g', price: 400000, quantity: 1, image: 'pro/beauty1.png' });
addItemToCart({ name: 'Derf Loose Powder Oil Control Loose Powder', price: 33000, quantity: 1, image: 'pro/beauty2.png' });
addItemToCart({ name: 'Derf Silver Eyeliner Pencil Waterproof', price: 9400, quantity: 1, image: 'pro/beauty3.png' });



//if customers click "Add to shopping cart" to add the current product to the shopping cart, the product exists in the shopping cart page

// const a = [5];

// if (a.includes(1)) {
//   addItemToCart({ name: 'MAC Mini Lipstick 1.8g', price: 400000, quantity: 1, image: 'pro/beauty1.png' });
// }



