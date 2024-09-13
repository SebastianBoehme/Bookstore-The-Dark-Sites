let inventory = [
  {
    name: "Gaming Laptop",
    price: 1299.99,
    category: "Technik",
    quantity: 3,
  },
  {
    name: "Wanderschuhe",
    price: 89.99,
    category: "Sport",
    quantity: 12,
  },
  {
    name: "E-Book Reader",
    price: 119.99,
    category: "Technik",
    quantity: 7,
  },
  {
    name: "Fitness-Tracker",
    price: 49.99,
    category: "Gesundheit",
    quantity: 4,
  },
];

function renderContent() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML = "";

  for (let i = 0; i < inventory.length; i++) {

    contentRef.innerHTML += /*html*/ `
        <div class="content_box"> 
            <p>Artikel: ${inventory[i].name}</p>
            <p>Preis pro Stk.: ${inventory[i].price}€</p>
            <p>Kategorie: ${inventory[i].category}</p>
            <p>Lagerestand: ${inventory[i].quantity} Stk.</p>
        </div>
    `;
  }
}
