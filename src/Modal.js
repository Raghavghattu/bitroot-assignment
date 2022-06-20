import React from "react";

function Modal(props) {
  return (
    <>
      {props.show && (
        <div className="Modal">
          <button onClick={props.onHide} className="Modal-closebtn">
            X
          </button>
          <img className="Modal-img" src={props.modalsrc} />
          <div className="Modal-container">
            <h1 className="Modal-title">{props.title}</h1>
            <p className="Modal-para">{props.modalpara}</p>
            <div className="Modalfooter">
              <img className="Modal-avatar" src={props.avatar} />
              <h5 className="Modal-name">
                {props.modalname} - {props.modalrole}
              </h5>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
