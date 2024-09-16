import {
  faGhost,
  faFeatherPointed,
  faSackDollar,
  faSliders,
  faWandSparkles,
  faCircle,
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
              <div id="content-card-top" className="centered-flex">
                <div>
                  <p id="card-state">
                    <FontAwesomeIcon icon={faCircle} className="icon-green" />
                    {card.state}
                  </p>
                  <p className="card-stock">{card.stock}</p>
                </div>
                <div className="card-amount">
                  <button>1 +</button>
                </div>
              </div>
              <div className="image">
                <img src={card.image} alt={card.name} />
                <span>{card.name}</span>
              </div>
              {/* <p>{card.description}</p>
              <button>Tell me about</button> */}
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
