import React from "react";
import { useNavigate } from "react-router-dom";

import { HomePage } from "../page";

const HomePageMediator = () => {
  const navigate = useNavigate();

  const navigateToItemListPage = () => {
    navigate(`/item-list/${"mockUserId"}`);
  };

  return <HomePage onButtonClick={navigateToItemListPage} />;
};

export { HomePageMediator };
