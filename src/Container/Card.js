import React from "react"
export default function Main(props) {
    return (
        <div className="Card">
            <img className="Card--img" src={`./images/${props.imageURL}`}></img>
            <div className="Card--data">
                <div Card--data--nav>
                    <img src="./images/gmaps.png" alt="broken" className="Maps--logo" />
                    <span className="Card--Country">{props.location}</span>
                    <a href={props.googleMapURL} className="Card--gmap">View on Google Maps</a>
                </div>

                <h1 className="Card--title">{props.title}</h1>
                <p className="Card--date">{props.startDate} - {props.endDate}</p>
                <p className="Card--desc">{props.description}</p>
            </div>
        </div>
    )
}