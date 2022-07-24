import React, { useEffect, useState } from "react";
import { LoadingCard } from "../component";
import { ItemDetailPage } from "../page";
import { Item } from "../../type";

import { getItemDetail } from "../service";

const ItemDetailPageMediator = () => {
  const [itemDetail, setItemDetail] = useState<Item | undefined>();

  const handleGetItemDetailError = (error: string) => {
    console.log(error);
  };

  const updateItemDetail = (newItemDetail: Item) => {
    setItemDetail(newItemDetail);
  };

  useEffect(() => {
    const fetchData = async () => {
      const newItemDetail = await getItemDetail("mock_item_id");
      updateItemDetail(newItemDetail);
    };

    fetchData().catch(handleGetItemDetailError);
  }, []);

  if (!itemDetail) {
    return <LoadingCard />;
  } else {
    const { name } = itemDetail;
    return <ItemDetailPage itemDetail={itemDetail} />;
  }
};

export { ItemDetailPageMediator };
