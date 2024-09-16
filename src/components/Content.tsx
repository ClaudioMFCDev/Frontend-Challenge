import {
  faGhost,
  faFeatherPointed,
  faSackDollar,
  faSliders,
  faWandSparkles,
  faCircle,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import MyPassPages from "./Button/PassPages";
import DropdownButton from "./Button/SelectBtn";
import SearchInput from "./Button/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const items: string[] = ["featured", "price", "rarity"];
const cards = [
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Melisa",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/pet1.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Melisa",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/pet1.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Melisa",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/pet1.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Melisa",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/pet1.png",
  },
  {
    state: "ON SALE",
    stock: "In sock",
    price: "$450.00",
    oldPrice: "$522.50",
    icon: "faGhost",
    name: "Melisa",
    description: "Melisa is a dog who love watch movies and eat pop corn",
    image: "/pet1.png",
  },
];

const MyContent = () => {
  return (
    <section className="content">
      <h2 className="h2-top">Condimentum consectetur</h2>
      <div id="filters">
        <DropdownButton
          label="Select a game"
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
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>

              <div className="card-stock">
                <span className="stock-label">In stock</span>
              </div>

              <div className="image">
                <img src={card.image} alt={card.name} />
              </div>

              <div className="card-details">
                <p className="card-name">{card.name}</p>
                <p className="card-price">
                  $450.00 <span className="old-price">$522.50</span>
                </p>
                <p className="card-description">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit.
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
          <MyPassPages />
        </div>
      </div>
    </section>
  );
};

export default MyContent;
