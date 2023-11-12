import { Helmet } from "react-helmet-async";
import Cover from "./Cover/Cover";
import CoverImg from '../../assets/menu/banner3.jpg'
import MenuItems from "../Home/MenuItems/MenuItems";
import UseMenu from "../../Hooks/UseMenu";
import TitleSheard from "../../Component/TitleSheard";
import SingleMenu from "../Home/MenuItems/SingleMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessart from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
const OurMenu = () => {

  const [menu] = UseMenu()
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const salad = menu.filter(item => item.category === "salad")
  const soup = menu.filter(item => item.category === "soup")
  const offered = menu.filter(item => item.category === "offered")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={CoverImg} title="OUR MENU"/>
      <TitleSheard subHeading="Don't miss" heading="TODAY'S OFFER"/>
      <MenuCategory items={offered}/>
      <MenuCategory items={dessert} img={dessart} title="Dessert"/>
      <MenuCategory items={pizza} img={pizzaImg} title="Pizza"/>
      <MenuCategory items={salad} img={saladImg} title="Salad"/>
      <MenuCategory items={soup} img={soupImg} title="Soup"/>

    </div>
  );
};

export default OurMenu;
