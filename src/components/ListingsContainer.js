import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {
  return (
    <main>
      <ul className="cards">
        {listings.map((list)=> (
          <ListingCard
          key={list.id}
          list = {list}
          onDelete={onDelete}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
