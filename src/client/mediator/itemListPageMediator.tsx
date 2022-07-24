import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { LoadingCard } from "../component";
import { ItemListPage } from "../page";
import { getItemList } from "../service";
import { Item } from "../../type";

const ItemListPageMediator = () => {
  const navigate = useNavigate();

  const [itemList, setItemList] = useState<Item[] | undefined>();

  const handleGetItemListError = (error: string) => {
    console.log("Loading Error", error);
  };

  const navigateToItemDetailPage = (itemId: string) => {
    navigate(`/item-detail/${itemId}`);
  };

  const updateItemList = (newItemList: Item[]) => {
    console.log("Loading Success", newItemList);
    setItemList(newItemList);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newItemList = await getItemList("mock_user_id");
      updateItemList(newItemList);
    };

    fetchData().catch(handleGetItemListError);
  }, []);

  if (!itemList) {
    return <LoadingCard />;
  } else {
    return (
      <ItemListPage
        itemList={itemList}
        onItemClick={navigateToItemDetailPage}
      />
    );
  }
};

export { ItemListPageMediator };
