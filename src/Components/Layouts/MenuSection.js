import React from "react";
import "../Styles/MenuSection.css";
function MenuSection() {
  return (
    <>
      <div className="menu-container">
        <h1 className="menu-header">
          Menu
          <hr></hr>
        </h1>

        <div className="side-bar">
          <ul className="categories">
            <li className="list-item">Bagels</li>
            <li className="list-item">Hot Breakfast</li>
            <li className="list-item">Bakery</li>
            <li className="list-item">Hot Coffees</li>
            <li className="list-item">Ice Coffees</li>
            <li className="list-item">Popular Items</li>
            <li className="list-item">Combo Offers</li>
          </ul>
        </div>
        <div className="menu-content-container">
          <div className="menu-category">
            <h1 className="category-header">Bagels</h1>
            <div className="category-box"></div>
          </div>
          <div className="menu-category">
            <h1 className="category-header">Hot Breakfast</h1>
            <div className="category-box"></div>
          </div>
          <div className="menu-category">
            <h1 className="category-header">Bakery</h1>
            <div className="category-box"></div>
          </div>
          <div className="menu-category">
            <h1 className="category-header">Hot Coffees</h1>
            <div className="category-box"></div>
          </div>
          <div className="menu-category">
            <h1 className="category-header">Ice Coffees</h1>
            <div className="category-box"></div>
          </div>
          <div className="menu-category">
            <h1 className="category-header">Popular Items</h1>
            <div className="category-box"></div>
          </div>
          <div className="menu-category">
            <h1 className="category-header">Combo Offers</h1>
            <div className="category-box"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuSection;
