import React from "react";
import ReactDom from "react-dom";
import Details from "./details.js";
import "./styles.css"
function Card(Details)
{
  return <Card name={Details.name} 
          source={Details.source}
          club={Details.club}
          country={Details.country}/>
  }
const r=document.getElementById("root");
ReactDom.render(
  <div>
    {Details.map(Card)}
</div>,
r
);
