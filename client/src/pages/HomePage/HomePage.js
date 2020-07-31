import React from "react";
import "./HomePage.css";
import HomeNav from "../../components/HomeNav/HomeNav";
import Welcome from "../../components/Welcome/Welcome";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Card from "../../components/Card/Card";
import aboutus from "./aboutus.json";
import Footer from "../../components/Footer/Footer";

function HomePage() {
    
    const isBackgroundDark = true;
    
    return (

        <div
          style={{
            backgroundColor: isBackgroundDark ? '#1b262c' : 'light',
          }}
        >
        
        <HomeNav/>
        <Welcome/>
      
      <Card
        image={aboutus[0].image}
        idescription={aboutus[0].idescription}
        cardtext={aboutus[0].cardtext}
      />
        <Card
        image={aboutus[1].image}
        idescription={aboutus[1].idescription}
        cardtext={aboutus[1].cardtext}
      />
        <Card
        image={aboutus[2].image}
        idescription={aboutus[2].idescription}
        cardtext={aboutus[2].cardtext}
      />

        <QuoteCard/>
        <Footer/>
        </div>

    );
}


export default HomePage;