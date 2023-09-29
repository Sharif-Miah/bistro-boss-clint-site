import BistroDitails from "../BistroDitails/BistroDitails";
import Carosel from "../Carosel/Carosel";
import Category from "../Category/Category";
import ChifRecommend from "../ChifRecommend/ChifRecommend";
import MenuItems from "../MenuItems/MenuItems";
import ManuItems from "../MenuItems/MenuItems";
import TelephoneUs from "../TelephoneUs/TelephoneUs";

const Home = () => {
    return (
        <div>
            <Carosel/>
            <Category/>
            <BistroDitails/>
            <MenuItems/>
            <TelephoneUs/>
            <ChifRecommend/>
        </div>
    );
};

export default Home;