import MyPassPages from "./Button/PassPages";
import DropdownButton from "./Button/SelectBtn";

const items: string[] = ['featured', 'price', 'rarity'];

const MyContent = () => {
    return(
        <section className="content">
            <h2>Condimentum consectetur</h2>
            <div className="top-buttons">

                <p>Showing 20 - from 125</p>
                <DropdownButton label="featured" items={items}/>
            
            </div>
            <div className="cards-container">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque quam nesciunt nisi dolores aut tenetur accusantium suscipit harum, eveniet, minima doloribus hic obcaecati rerum dolorum voluptatibus ipsum, incidunt ipsam dolor.</p>
            </div>
            <MyPassPages/>
        </section>
    )
}

export default MyContent;