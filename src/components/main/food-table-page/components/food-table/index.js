import React from "react";
import { observer } from "mobx-react-lite";
import { Table, Avatar } from "antd";
import ecoFoodData from "../../../../../stores/EcoFoodData";

const FoodTable = () => {
  const dataForFoodTable = [];

  let productsKeys = Object.keys(ecoFoodData.products);
  
  productsKeys.forEach((key, index) => {
    let imagesSrc = {
      letter: key[0],
      color: ecoFoodData.products[key].avatarColor,
    };
    if (!ecoFoodData.products[key].custom) {
      imagesSrc = `./assets/food-icons/${key.replaceAll(" ", "")}_Icon.png`;
    }
    dataForFoodTable.push({
      key: `${index + 1}`,
      name: key,
      icon: imagesSrc,
      calories: ecoFoodData.products[key].weight,
      proteins: ecoFoodData.products[key].nut[0],
      fats: ecoFoodData.products[key].nut[1],
      vitamins: ecoFoodData.products[key].nut[2],
      nutrients: ecoFoodData.products[key].nut[3],
    });
  });

  const columns = [
    {
      title: "Icon",
      dataIndex: "icon",
      key: "icon",
      render: (icon) => {
        if ((icon.letter || "").length === 1) {
          return (
            <Avatar
              style={{
                backgroundColor: icon.color,
                verticalAlign: "middle",
              }} 
              size="large"
            >
              {icon.letter}
            </Avatar>
          );
        }
        let imagesSrc = require(`${icon}`);
        return <Avatar src={<img src={imagesSrc} alt="icon" />} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Calories",
      dataIndex: "calories",
      key: "calories",
      sorter: (a, b) => a.calories - b.calories,
    },
    {
      title: "Proteins",
      dataIndex: "proteins",
      key: "proteins",
      sorter: (a, b) => a.proteins - b.proteins,
    },
    {
      title: "Fats",
      dataIndex: "fats",
      key: "fats",
      sorter: (a, b) => a.fats - b.fats,
    },
    {
      title: "Vitamins",
      dataIndex: "vitamins",
      key: "vitamins",
      sorter: (a, b) => a.vitamins - b.vitamins,
    },
    {
      title: "Nutrients",
      dataIndex: "nutrients",
      key: "nutrients",
      sorter: (a, b) => a.nutrients - b.nutrients,
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataForFoodTable} />
    </>
  );
};

export default observer(FoodTable);
