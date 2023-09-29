import BistroDitails from "../BistroDitails/BistroDitails";
import Carosel from "../Carosel/Carosel";
import Category from "../Category/Category";
import ChifRecommend from "../ChifRecommend/ChifRecommend";
import MenuItems from "../MenuItems/MenuItems";
import ManuItems from "../MenuItems/MenuItems";
import OurMenu from "../OurMenu/OurMenu";
import TelephoneUs from "../TelephoneUs/TelephoneUs";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Carosel/>
            <Category/>
            <BistroDitails/>
            <MenuItems/>
            <TelephoneUs/>
            <ChifRecommend/>
            <OurMenu/>
            <Testimonials/>
        </div>
    );
};

export default Home;