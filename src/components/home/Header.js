import React from "react";
import Hero from "../globals/Hero";
import homeImg from "../../images/homeBcg.jpeg";
import Banner from "../globals/Banner";
const Header = () => {
  return (
    <Hero img={homeImg}>
      <Banner
        greeting='welcome to'
        title='beachwalk resort'
        text='  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia voluptates, quidem nulla ipsam laboriosam!'
      />
    </Hero>
  );
};

export default Header;
