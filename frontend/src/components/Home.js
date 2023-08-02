import React, { useEffect, useState, useContext } from "react";
import ItemInfo from "./ItemInfo";
import noteContext from "../context/notes/noteContext";

export default function Home() {
  const [InformationOfCard, setData] = useState([]);
  const a = useContext(noteContext);
  console.log("The is passs is ", a.selectedCategoryId);

  useEffect(() => {
    if (a.selectedCategoryId == "null") {
      fetch("http://127.0.0.1:3000/api/prod/getAllprod")
        .then((response) => response.json())
        .then((data) => setData(data));
    } else {
      fetch(
        `http://127.0.0.1:3000/api/prod/findprodbycatid/${a.selectedCategoryId}`
      )
        .then((response) => response.json())
        .then((data) => setData(data));
    }
  }, [a]);

  console.log(InformationOfCard);
  // const InformationOfCard = [
  //     {
  //         "id": 1,
  //         "name": "jiophone",
  //         "description": "India ka smartphone",
  //         "price": 1500,
  //         "image_url": null,
  //         "location": "nagar",
  //         "isavailable": true,
  //         "categId": 1,
  //         "userId": 2
  //     },
  //     {
  //         "id": 2,
  //         "name": "cosmos",
  //         "description": "by carl sagan",
  //         "price": 500,
  //         "image_url": null,
  //         "location": "nagar",
  //         "isavailable": true,
  //         "categId": 2,
  //         "userId": 2
  //     },
  //     {
  //         "id": 3,
  //         "name": "cosmos",
  //         "description": "by carl sagan",
  //         "price": 500,
  //         "image_url": null,
  //         "location": "nagar",
  //         "isavailable": true,
  //         "categId": 2,
  //         "userId": 1
  //     },

  // ]

  return (
    <>
      <div className="container">
        <div className="row my-5">
          
          {InformationOfCard.map((element) => {
            return (
              
              <div className="col-md-3" key={element.id}>
                <ItemInfo
                  title={element.name}
                  description={element.description}
                  Imageurl={element.image_url}
                  price={element.price}
                  id={element.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// name
// image url
// price
// description
