import { Helmet } from "react-helmet-async";
import OrderImg from "../../assets/shop/banner2.jpg";
import Cover from "../OurMenu/Cover/Cover";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../Hooks/UseMenu";
import OrderTap from "./OrderTap/OrderTap";

const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = UseMenu()
  const dessert = menu.filter(item => item.category === "dessert")
  const pizza = menu.filter(item => item.category === "pizza")
  const salad = menu.filter(item => item.category === "salad")
  const soup = menu.filter(item => item.category === "soup")
  const offered = menu.filter(item => item.category === "offered")
  const drinks = menu.filter(item => item.category === "drinks")
  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Our Shop</title>
      </Helmet>
      <Cover img={OrderImg} title="Our Shops" />

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>pizza</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>
        <TabPanel>
            <OrderTap item={salad}/>
        </TabPanel>
        <TabPanel>
            <OrderTap item={pizza}/>
        </TabPanel>
        <TabPanel>
            <OrderTap item={soup}/>
        </TabPanel>
        <TabPanel>
            <OrderTap item={dessert}/>
        </TabPanel>
        <TabPanel>
            <OrderTap item={drinks}/>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
