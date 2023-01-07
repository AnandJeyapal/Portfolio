import React from "react";
import GoldMedal from '../images/medal.png'


export default function DetailCard(props) {
  return (
    <div className="detail--block">
    
    <div className="flex-grow-1">
        <h3 class="mb-0">{props.title}</h3>
        <div className="subheading mb-3">{props.company}</div>
        <p>{props.description}</p>
        {props.subDescription  && <p>{props.subDescription}</p>}
    </div>
    {props.medal && <div><img src={GoldMedal}/></div>}
    <div className="flex-shrink-0"><span className="text-primary muli">{props.duration}</span></div>
</div>
  )
}