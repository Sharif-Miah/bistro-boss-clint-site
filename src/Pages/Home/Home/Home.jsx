import BistroDitails from "../BistroDitails/BistroDitails";
import Carosel from "../Carosel/Carosel";
import Category from "../Category/Category";
import MenuItems from "../MenuItems/MenuItems";
import ManuItems from "../MenuItems/MenuItems";

const Home = () => {
    return (
        <div>
            <Carosel/>
            <Category/>
            <BistroDitails/>
            <MenuItems/>
        </div>
    );
};

export default Home;