const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: '$15.99',
    img: './images/item-1.jpeg',
    desc: `Delicious Pancakes with carmel and a strawberry on top with a side of cream. `,
  },
  {
    id: 2,
    title: 'Burger and Fries',
    category: 'lunch',
    price: '$13.99',
    img: './images/item-2.jpeg',
    desc: `A cheeseburger with a side of fries, ketchup and mayonase. `,
  },
  {
    id: 3,
    title: 'Godzilla milkshake',
    category: 'shakes',
    price: '$6.99',
    img: './images/item-3.jpeg',
    desc: `A delectable mixture of a strawberry milkshake, donut, cream, gummy bears and an actual strawbwerry on top.`,
  },
  {
    id: 4,
    title: 'Classic breakfast',
    category: 'breakfast',
    price: '$20.99',
    img: './images/item-4.jpeg',
    desc: `A breakfast classic which includes toast, eggs, and beans. `,
  },
  {
    id: 5,
    title: 'Cheseburger',
    category: 'lunch',
    price: '$22.99',
    img: './images/item-5.jpeg',
    desc: `This is a classic cheseburer with chese topins, buns, and a burger. `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: '$18.99',
    img: './images/item-6.jpeg',
    desc: `A milkashake with the cookie called oreo and has a strawbery on top.`,
  },
  {
    id: 7,
    title: 'Bacon overflow',
    category: 'breakfast',
    price: '$8.99',
    img: './images/item-7.jpeg',
    desc: `A sandwich wich has bacon cheese, egg, letus, and the buns. `,
  },
  {
    id: 8,
    title: 'Fast food combo',
    category: 'lunch',
    price: '$70.99',
    img: './images/item-8.jpeg',
    desc: `A delectable combination of burger, fries, milkshake and a sandwich`,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: '$16.99',
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: '$39.99',
    img: './images/item-10.jpeg',
    desc: `Grilled steak with sause and side dressing.`,
  },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
  displayMenuBtns();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <img src=${item.img} class="photo" alt=${item.price}>
    <div class="item-info">
      <header>
         <h4>${item.title}</h4>
      <h4 class="price">${item.price}</h4>
      </header>
     <p class="item-text">${item.desc}</p>
    </div>
  </article>`;
  });
  displayMenu = displayMenu.join('');

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join('');
  container.innerHTML = categoryBtns;

  const filterBtns = document.querySelectorAll('.filter-btn');

  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });

  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === 'all') {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
