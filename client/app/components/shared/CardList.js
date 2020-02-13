import React from "react";
import { Link } from "react-router-dom";
import { CardStyle } from "../../styles/page";


const CardList = ({ items }) => {
  return items.map(item => (
    <CardStyle key={item.id}>
      <Link
        to={{
          pathname: `/character/${item.id}`,
          state: {
            ...item
          }
        }}
      >
        <img src={item.image} alt={item.name} className="characters-img" />
      </Link>

      <h3>{item.name}</h3>
    </CardStyle>
  ));
};

export default CardList;
