/* ================= PRODUCTS DATA ================= */
        let products = [
            {
                name: 'Casual Shirt',
                price: 999,
                cat: 'men',
                img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f',
                link: 'https://ltl.sh/share/bniwxmaaaa?external_product_id=62vz3z'
            },
            {
                name: 'Women Dress',
                price: 1499,
                cat: 'women',
                img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c',
                link: 'https://ltl.sh/share/bniwxmaaaa?external_product_id=62vz3z'
            },
            {
                name: 'Kids Wear',
                price: 799,
                cat: 'kids',
                img: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475',
                link: 'https://ltl.sh/share/bniwxmaaaa?external_product_id=62vz3z'
            }
        ];

        /* ================= MENU ================= */
        function toggleMenu() {
            document.getElementById('nav').classList.toggle('show');
        }

        /* ================= DARK MODE ================= */
        function toggleDark() {
    document.body.classList.toggle('dark');

    const icon = document.getElementById("themeIcon");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("ri-moon-fill");
        icon.classList.add("ri-sun-fill");
    } else {
        icon.classList.remove("ri-sun-fill");
        icon.classList.add("ri-moon-fill");
    }
}
    // set correct icon on page load
const icon = document.getElementById("themeIcon");
if (document.body.classList.contains("dark")) {
    icon.classList.remove("ri-moon-fill");
    icon.classList.add("ri-sun-fill");
} else {
    icon.classList.remove("ri-sun-fill");
    icon.classList.add("ri-moon-fill");
}

        /* ================= RENDER PRODUCTS ================= */
        function renderProducts() {
            let search = document.getElementById('search').value.toLowerCase();
            let category = document.getElementById('category').value;
            let html = '';

            products
                .filter(p =>
                    p.name.toLowerCase().includes(search) &&
                    (category === 'all' || p.cat === category)
                )
                .forEach(p => {
                    html += `
        <div class="product">
          <img src="${p.img}">
          <h4>${p.name}</h4>
          <div class="price">₹${p.price}</div>
          <a class="btn" href="${p.link}" target="_blank">
            Buy on Meesho
          </a>
        </div>
      `;
                });

            document.getElementById('productList').innerHTML = html;
        }

        /* ================= INIT ================= */
        renderProducts();