const PORT = 5000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/itemDetail/:itemId", (req, res) => {
  const { itemId } = req.params;
  console.log("Item ID:", itemId);
  const item = {
    name: "Foo Item",
    id: "aj22ftw4",
  };
  res.status(200).json(JSON.stringify(item));
});

app.get("/itemList/:userId", (req, res) => {
  const { userId } = req.params;
  console.log("User ID:", userId);
  const items = [
    {
      name: "Foo Item",
      id: "aj22ftw4",
    },
    {
      name: "Bar Item",
      id: "zk5hbsakg8",
    },
  ];
  res.status(200).json(JSON.stringify(items));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
