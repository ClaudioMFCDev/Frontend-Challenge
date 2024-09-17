import {
  faFeatherPointed,
  faSackDollar,
  faSliders,
  faWandSparkles,
  faCircle,
  faCartShopping,
  faDragon,
} from "@fortawesome/free-solid-svg-icons";
import DropdownButton from "./Button/SelectBtn";
import SearchInput from "./Button/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Button/Pagination";

const items: string[] = ["featured", "price", "rarity"];
const cards = [
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Ward 123",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward1.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Galactic ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward2.jpg",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Prestigious ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward3.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Ward 123",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward1.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Galactic ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward2.jpg",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Prestigious ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward3.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Ward 123",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward1.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Galactic ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward2.jpg",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Prestigious ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward3.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Galactic ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward2.jpg",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Prestigious ward",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/ward3.png",
  },
];

const MyContent = () => {
    const currentPage = 1; // Cambia esta variable para la página actual
    const totalPages = 5; // Total de páginas en tu catálogo
  return (
    <section className="content">
      <h2 className="h2-top">Condimentum consectetur</h2>
      <div id="filters">
        <DropdownButton
          label="Select game"
          items={items}
          icon={faWandSparkles}
          className="dropdown-button-opac dropdown-button-lg"
        />
        <SearchInput />
        <DropdownButton
          title="Price"
          label="All"
          items={items}
          icon={faSackDollar}
          className="dropdown-button-opac"
        />
        <DropdownButton
          title="Item Type"
          label="All"
          items={items}
          icon={faFeatherPointed}
          className="dropdown-button-opac"
        />
      </div>
      <div id="inside">
        <div className="top-cards">
          <p>Showing 20 - from 125</p>
          <DropdownButton
            title="Sort By"
            label="featured"
            items={items}
            icon={faSliders}
            className="dropdown-button"
          />
        </div>
        <div className="cards-container">
          {cards.map((card, index) => (
            <div className="card">
              <div className="card-header">
                <p id="card-state">
                  <FontAwesomeIcon icon={faCircle} className="icon-green" />
                  ON SALE
                </p>
                <div className="card-amount">
                    <input type="number" value={1} />
                </div>
              </div>

              <div className="card-stock">
                <span className="stock-label">in stock</span>
              </div>

              <div className="image">
                <img src={card.image} alt={card.name} />
              </div>

              <div className="card-details">
                <p className="card-name">{card.name}
                <FontAwesomeIcon icon={faDragon} className="icon-green"/>
                </p>
                <p className="card-price">
                  $450.00 <span className="old-price">$522.50</span>
                </p>
                <p className="card-description">
                  Lorem ipsum dolor sit amet...
                </p>
              </div>

              <div className="card-actions">
                <button className="details-btn">DETAILS</button>
                <button className="add-btn">
                  ADD <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div id="pass-pages">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      </div>
    </section>
  );
};

export default MyContent;
