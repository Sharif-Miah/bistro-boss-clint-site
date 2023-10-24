import { Helmet } from "react-helmet-async";
import Cover from "./Cover/Cover";
import CoverImg from '../../assets/menu/banner3.jpg'
import MenuItems from "../Home/MenuItems/MenuItems";
const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <Cover img={CoverImg}/>
      <MenuItems/>
      <Cover img={CoverImg}/>
      <MenuItems/>
      <Cover img={CoverImg}/>
      <MenuItems/>
      <Cover img={CoverImg}/>
      <MenuItems/>
    </div>
  );
};

export default OurMenu;
