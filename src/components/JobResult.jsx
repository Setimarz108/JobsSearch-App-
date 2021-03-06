import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { addToFav, removeFromFav } from "../store/actions";
import { connect } from "react-redux";

const mapStateToProps = (s) => s;

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (company) => dispatch(addToFav(company)),
  removeFromFavourites: (company) => dispatch(removeFromFav(company)),
});

function JobResult({
  data,
  favourites,
  addToFavourites,
  removeFromFavourites,
}) {
  const isFav = favourites.elements.includes(data.company_name);
  console.log(isFav, favourites);
  const toggleFavourite = () => {
    isFav
      ? removeFromFavourites(data.company_name)
      : addToFavourites(data.company_name);
  };

  return (
    <div 
      className="mx-0 mt-3 p-3"
      style={{
        color: "#fff",
        backgroundColor: "#5865F2",
        border: "1px solid gray",
        borderRadius:"10px",
        width:"50%",
       
      }}
    >
      <Col xs={3} className="d-flex">
        {isFav ? (
          <StarFill
            color="gold"
            size={16}
            className=" mr-4 my-auto"
            onClick={toggleFavourite}
          />
        ) : (
          <Star
            color="gold"
            size={16}
            className="mr-4 my-auto"
            onClick={toggleFavourite}
          />
        )}
        <Link style={{color: 'white', fontSize:"30px", marginLeft:"10px", display: 'inline'}} to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>

      <Col xs={9}>
        <Link  style={{color: 'white'}} to={{ pathname: data.url }} target="_blank">
          {data.title}
        </Link>
      </Col>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(JobResult);
