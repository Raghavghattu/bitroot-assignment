import React from "react";

function Component(props) {
  return (
    <div className="Card">
      <img className="Card-img" src={props.srclg} />
      <div className="Card-section">
        <h1 onClick={props.Onclick} className="Card-header">
          {props.header}
        </h1>
        <p className="Card-content">{props.content}</p>
        <div className="SubCard">
          <h5 className="SubCard-name">
            {props.name} - {props.role}
          </h5>
          <h5 className="SubCard-date">{props.date}</h5>
        </div>
      </div>
      <div className="button">
        <button className="hoverbtn" onClick={props.Onclick}>
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Component;
