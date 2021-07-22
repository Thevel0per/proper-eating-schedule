import React from 'react';
import '../../styles/shared/Menu.scss';

const Menu = () =>
  <nav className="menu">
    <header className="menu__header">
      <img className="menu__logo" src="/logo200.png" alt="application logo"/>
    </header>
    <section className="menu__tabs">
      <div>
        { window.location.pathname === '/' ? <div className="menu__active-bar"></div> : null }
        <a href="/" className={window.location.pathname === '/' ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">home</span></a>
      </div>
      <div>
        { window.location.pathname.includes('/recipes') ? <div className="menu__active-bar"></div> : null }
        <a href="/recipes" className={window.location.pathname.includes('/recipes') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">menu_book</span></a>
      </div>
      <div>
        { window.location.pathname.includes('/ingredients') ? <div className="menu__active-bar"></div> : null }
        <a href="/ingredients" className={window.location.pathname.includes('/ingredients') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">ballot</span></a>
      </div>
      <div>
        { window.location.pathname.includes('/inventory') ? <div className="menu__active-bar"></div> : null }
        <a href="/inventory" className={window.location.pathname.includes('/inventory') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">inventory</span></a>
      </div>
      <div>
        { window.location.pathname.includes('/carts') ? <div className="menu__active-bar"></div> : null }
        <a href="/carts" className={window.location.pathname.includes('/carts') ? "menu__active-item" : "menu__item"}><span className="material-icons-round md-30">local_grocery_store</span></a>
      </div>
    </section>
    <footer className="menu__footer">
      <span className="menu__trademark">© {new Date().getFullYear()} Theveloper</span>
    </footer>
  </nav>

export default Menu;