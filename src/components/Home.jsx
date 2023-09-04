import React from "react";
import "../styles/Home.css";
import { homeInfo } from "../assets/imports/homeInfo";
function Home() {
  return (
    <div className="home-container">
        {
          Object.keys(homeInfo).map((key) => {
            const value = homeInfo[key];
            return (
              <article style={{ backgroundColor:value[1] }} className="home-card">
              <div>
                <img src={value[2]}/>
                <div className="home-card-text">
                  <h3>{value[0]}</h3>
                </div>
              </div>
            </article>
            );
          })
        }
      
    </div>
  );
}

export default Home;
