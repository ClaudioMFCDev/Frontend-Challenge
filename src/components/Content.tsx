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
import Card from '../components/card/Card';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "./Button/Pagination";
import { cards } from './card-data'; // Import the cards array


const items: string[] = ["featured", "price", "rarity"];



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
            <Card
            key={index}
            state={card.state}
            stock={card.stock}
            price={card.price}
            oldPrice={card.oldPrice}
            name={card.name}
            description={card.description}
            image={card.image}
            />
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
