import React from 'react';
import '../../styles/shared/Menu.scss';

const Menu = () =>
  <nav className="menu">
    <header className="menu__header">Proper Eating Schedule</header>
    <section className="menu__tabs">
      <a href="/" className={window.location.pathname === '/' ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">home</span></a>
      <a href="/recipes" className={window.location.pathname.includes('/recipes') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">menu_book</span></a>
      <a href="/ingredients" className={window.location.pathname.includes('/ingredients') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">ballot</span></a>
      <a href="/inventory" className={window.location.pathname.includes('/inventory') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">inventory</span></a>
      <a href="/carts" className={window.location.pathname.includes('/carts') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">local_grocery_store</span></a>
    </section>
    <footer className="menu__footer">
      <span className="menu__trademark">© {new Date().getFullYear()} Theveloper</span>
    </footer>
  </nav>

export default Menu;