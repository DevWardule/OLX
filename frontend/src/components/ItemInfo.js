import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Link } from "react-router-dom";
export default function ItemInfo(props) {
  const a = useContext(noteContext);

  const checkForID = () => {
    a.setId(props.id);
    a.setproductImgUrl(props.Imageurl);
    // console.log(props.id);
    // console.log(a.id);
  };

  console.log(props.Imageurl);

  return (
    <>
      <div className="my-3">
        <div className="card border border-5 border-white">
          <img
            src={`/Images/${props.Imageurl}`}
            height={"200px"}
            // width={"100px"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}...</p>
          </div>
          <div className="d-flex justify-content-between my-2">
            <Link
              className="btn btn-info mx-3"
              to="/infoofitem"
              onClick={checkForID}
            >
              read more
            </Link>
            <button className="btn btn-info mx-3 ">Favourite</button>
          </div>
        </div>
      </div>
    </>
  );
}
