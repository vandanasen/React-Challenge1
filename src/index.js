import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  return (
    <div className="App">
      {/* Show user data here */}
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />
        <h1>{user.name}</h1>
        <p>Location</p>
        <p>{user.location}</p>
        <p>Eats</p>
        <p>{user.foodType}</p>
        <p>Age</p>
        <p>{user.age}</p>
        <p>Likes</p>
        <p>{user.likes}</p>
        <p>Twitter</p>
        <a href="https://twitter.com/chrisoncode">@chriscode</a>
      </div>
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
