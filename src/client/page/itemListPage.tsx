import React from "react";
import { Item } from "../../type";

type ItemListPageProps = {
  itemList: Item[];
  onItemClick: (itemId: string) => void;
};

const ItemListPage = ({ itemList, onItemClick }: ItemListPageProps) => {
  return (
    <>
      <h3>Item List</h3>
      {itemList.map((item: Item, index: number) => {
        const key = `item-list--item--${index}`;
        return (
          <div key={key} onClick={() => onItemClick(item.id)}>
            {item.name}
          </div>
        );
      })}
    </>
  );
};

export { ItemListPage };
