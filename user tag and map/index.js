import React from "react";
import ReactDom from "react-dom";
import Details from "./details.js";
import "./styles.css"
function Card(props){
  return <div>
    <h2>{props.name}</h2>
    <img src={props.source} width ="250px"/>
    <p>Club:{props.club}</p>
    <p>Country:{props.country}</p>
    </div>
}
function insertCard(details)
{
  return <Card name={details.name} 
          source={details.source}
          club={details.club}
          country={details.country}/>;
  }
const r=document.getElementById("root");
ReactDom.render(
  <div>
    {Details.map(insertCard)}
</div>,
r
);
