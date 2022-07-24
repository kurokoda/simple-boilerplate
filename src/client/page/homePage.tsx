import React from "react";
import { Button } from "react-bootstrap";

type HomePageProps = {
  onButtonClick: () => void;
};

const HomePage = ({onButtonClick}: HomePageProps) => {
  return (
    <>
      <h3>Home Page</h3>
      <Button onClick={onButtonClick}>Go To Item List</Button>
    </>
  );
};

export { HomePage };
