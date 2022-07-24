import React, { useMemo } from "react";
import { Item } from "../../type";

type ItemDetailPageProps = {
  itemDetail: Item;
};

const ItemDetailPage = ({ itemDetail }: ItemDetailPageProps) => {
  const { name } = itemDetail;

  return (
    <>
      <h3>Item Detail</h3>
      <p>{name}</p>
    </>
  );
};

export { ItemDetailPage };
