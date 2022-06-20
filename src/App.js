import React, { useEffect, useState } from "react";
import Component from "./Component";
import Modal from "./Modal";
import { v4 as uuidv4 } from "uuid";
import "./styles/style.css";

function App() {
  const [Data, Setdata] = useState([]);
  const [modal, ShowModal] = useState(false);
  useEffect(() => {
    const url =
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        Setdata(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  function timeConverter(timestamp) {
    var a = new Date(timestamp * 1000);
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var time = `${month} ${date},${year}`;
    return time;
  }
  function hideModal() {
    ShowModal(false);
  }
  function getModal() {
    ShowModal(true);
  }

  return (
    <>
      <div className="grid-container">
        {Data.map((ele, index) => {
          return (
            <>
              <Component
                key={index}
                header={ele.title}
                Onclick={getModal}
                srclg={ele.thumbnail.small}
                content={ele.content}
                name={ele.author.name}
                role={ele.author.role}
                date={timeConverter(ele.date)}
              />
              <Modal
                modalsrc={ele.thumbnail.large}
                title={ele.title}
                content={ele.content}
                avatar={ele.author.avatar}
                modalname={ele.author.name}
                modalrole={ele.author.role}
                modalpara={ele.content}
                show={modal}
                onHide={hideModal}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
