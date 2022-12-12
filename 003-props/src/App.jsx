// import logo from './logo.svg';
import "./App.css";
import Dinner from "./components/Dinner";
import Baryani from "./images/baryani.jpg";
import Barbecue from "./images/barbecue.jpg";
import Cake from "./images/chocolate-cake.jpg";
import Nihari from "./images/nihari.png";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1 className="heading">React component and Props</h1>
      </div>
      <div className="container">
        <Dinner
          title={"Baryani"}
          img={Baryani}
          description={
            "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot. It is combined in different ways with a variety of components to create a number of highly tasty and unique flavor combinations"
          }
        />
        <Dinner
          title={"Nihari"}
          img={Nihari}
          description={
            "It consists of slow-cooked meat, mainly a shank cut of beef, lamb and mutton, or goat meat, as well as chicken and bone marrow"
          }
        />
        <Dinner
          title={"Barbecue"}
          img={Barbecue}
          description={
            "An outdoor meal, usually a form of social entertainment, at which meats, fish, or fowl, along with vegetables, are roasted over a wood or charcoal fire. The term also denotes the grill or stone-lined pit for cooking such a meal, or the food itself, particularly the strips of meat"
          }
        />
        <Dinner
          title={"Cake"}
          img={Cake}
          description={
            "A sweet, baked, breadlike food, made with or without shortening, and usually containing flour, sugar, baking powder or soda, eggs, and liquid flavoring. 2. a flat, thin mass of bread, esp. unleavened bread"
          }
        />
      </div>
    </div>
  );
}

export default App;
