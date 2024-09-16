import MyPassPages from "./Button/PassPages";
import DropdownButton from "./Button/SelectBtn";

const items: string[] = ['featured', 'price', 'rarity'];
const cards = [
    {
      id: 1,
      name: "Melisa",
      description: "Melisa is a dog who love watch movies and eat pop corn",
      image: "/pet1.png",
    },
    {
      id: 2,
      name: "Rex",
      description: "Rex enjoys running in the park and playing fetch.",
      image: "/pet2.png",
    },
    {
      id: 3,
      name: "Bella",
      description: "Bella loves swimming and chasing birds.",
      image: "/pet3.png",
    },
    {
      id: 4,
      name: "Melisa",
      description: "Melisa is a dog who love watch movies and eat pop corn",
      image: "/pet1.png",
    },
    {
      id: 5,
      name: "Rex",
      description: "Rex enjoys running in the park and playing fetch.",
      image: "/pet2.png",
    },
    {
      id: 6,
      name: "Bella",
      description: "Bella loves swimming and chasing birds.",
      image: "/pet3.png",
    },
  ];

const MyContent = () => {
    return(
        <section className="content">
            <h2 className="h2-top">Condimentum consectetur</h2>
            <div id="filters">
                
            </div>
            <div id="inside">
                <div className="top-cards">
                    <div className="top-buttons">
                        <p>Showing 20 - from 125</p>
                        <DropdownButton label="featured" items={items}/>
                    </div>
                </div>
                <div className="cards-container">
                    {cards.map( (card, index) => (
                        <div className="card">
                            <div className="image">
                                <img src={card.image} alt={card.name}/>
                                <span>{card.name}</span>
                            </div>
                            <p>{card.description}</p>
                            <button>Tell me about</button>
                        </div>
                    ) )}
                </div>
                <div id="pass-pages">
                    <MyPassPages/>
                </div>
            </div>
        </section>
    )
}

export default MyContent;