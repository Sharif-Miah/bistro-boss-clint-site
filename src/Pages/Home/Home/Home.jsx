import BistroDitails from "../BistroDitails/BistroDitails";
import Carosel from "../Carosel/Carosel";
import Category from "../Category/Category";
import ChifRecommend from "../ChifRecommend/ChifRecommend";
import MenuItems from "../MenuItems/MenuItems";
import ManuItems from "../MenuItems/MenuItems";
import OurMenu from "../OurMenu/OurMenu";
import TelephoneUs from "../TelephoneUs/TelephoneUs";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Home</title>
      </Helmet>
      <Carosel />
      <Category />
      <BistroDitails />
      <MenuItems />
      <TelephoneUs />
      <ChifRecommend />
      <OurMenu />
      <Testimonials />
    </div>
  );
};

export default Home;
