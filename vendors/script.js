document.getElementById('button-upload').addEventListener('click', function() {
  var fileInput = document.getElementById('upload-image');
  var profileImage = document.getElementById('image');

  var file = fileInput.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    profileImage.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

function onClickUpload() {
  let uploadImage = document.getElementById("upload-image");
  uploadImage.click();
}
document.getElementById('log-out').addEventListener('click', function() {

  alert('Logged out successfully');
});

const products = [
  { id: 1, name: "Product 1", stock: 10, price: 19.99, image: "product1.jpg" },
  { id: 1, name: "Product 1", stock: 10, price: 19.99, image: "product1.jpg" },
  { id: 1, name: "Product 1", stock: 10, price: 19.99, image: "product1.jpg" },
  { id: 1, name: "Product 1", stock: 10, price: 19.99, image: "product1.jpg" },
  { id: 1, name: "Product 1", stock: 10, price: 19.99, image: "product1.jpg" },

  

];


// Function to generate the product table
function generateProductTable() {
  const productContainer = document.getElementById("product-list");

  // Clear existing product table
  productContainer.innerHTML = "";

  // Create table element
  const table = document.createElement("table");
  table.className = "product-table";

  // Create table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["ID", "Name", "Description", "Stock", "Price", "Actions"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  const tbody = document.createElement("tbody");
  products.forEach((product) => {
    const productRow = document.createElement("tr");
    productRow.innerHTML = `
      <td>${product.id}</td>
      <td>
        <div class="product-info">
          <img src="${product.image}" alt="${product.name}">
          <span>${product.name}</span>
        </div>
      </td>
      <td>${product.description}</td>
      <td>${product.stock}</td>
      <td>${product.price}</td>
      <td>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </td>
    `;
    tbody.appendChild(productRow);
  });
  table.appendChild(tbody);

  // Append table to the container
  productContainer.appendChild(table);
}

// Call the function to generate the product table
generateProductTable();