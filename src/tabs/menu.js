function Menu() {
  const markup = `
   <div class="menu">
        <h2>Our Menu</h2>

        <h3>Starters</h3>
        <div class="menu-item">
          <h4>Achu Soup</h4>
          <img src="https://example.com/achu-soup.jpg" alt="Achu Soup" />
          <p>A savory soup made with pounded cocoyams, beef, and spices.</p>
        </div>
        <div class="menu-item">
          <h4>Egusi Pudding</h4>
          <img
            src="https://example.com/egusi-pudding.jpg"
            alt="Egusi Pudding"
          />
          <p>
            A steamed pudding made from melon seeds, spinach, and traditional
            spices.
          </p>
        </div>

        <h3>Main Courses</h3>
        <div class="menu-item">
          <h4>Ndole</h4>
          <img src="https://example.com/ndole.jpg" alt="Ndole" />
          <p>
            A delicious stew made with bitterleaf greens, peanuts, and your
            choice of meat or fish.
          </p>
        </div>
        <div class="menu-item">
          <h4>Poulet DG</h4>
          <img src="https://example.com/poulet-dg.jpg" alt="Poulet DG" />
          <p>
            A popular dish of fried plantains and chicken cooked in a tomato and
            onion sauce.
          </p>
        </div>

        <h3>Desserts</h3>
        <div class="menu-item">
          <h4>Koki Corn</h4>
          <img src="https://example.com/koki-corn.jpg" alt="Koki Corn" />
          <p>
            A sweet corn pudding made with fresh corn, coconut milk, and a hint
            of vanilla.
          </p>
        </div>
        <div class="menu-item">
          <h4>Puff-Puff</h4>
          <img src="https://example.com/puff-puff.jpg" alt="Puff-Puff" />
          <p>
            Deep-fried dough balls, crispy on the outside and soft on the
            inside, lightly dusted with powdered sugar.
          </p>
        </div>
    </div>
  `;

  return markup;
}

export default Menu;
