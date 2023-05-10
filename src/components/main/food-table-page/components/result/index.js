import { React } from "react";
import { observer } from "mobx-react-lite";
import { Table, Avatar } from "antd";
import ecoFoodData from "../../../../../stores/EcoFoodData";

const Result = () => {
  const dataForResultTable = [];

  ecoFoodData.dishesForTable.forEach((dishes, index) => {
    let iconsArr = [];
    dishes[0].forEach((ingredient) => {
      let imagesSrc = `./assets/food-icons/${ingredient.replaceAll(' ', '')}_Icon.png`;
      iconsArr.push(imagesSrc);
      // iconsArr.push(ingredient);
    });

    dataForResultTable.push({
      key: `${index+1}`,
      icons: iconsArr,
      proteins: dishes[1],
      fats: dishes[2],
      vitamins: dishes[3],
      nutrients: dishes[4],
      summary: dishes[5],
      balance: dishes[6],
      calories: dishes[7],
      sp: dishes[8],
    });
  });

  const columns = [
    {
      title: "Ingredients",
      dataIndex: "icons",
      key: "icons",
      render: (icons) => {
        let avatarArray = []
        icons.forEach(icon => {
          let imagesSrc = require(`${icon}`);
          avatarArray.push(<Avatar src={<img src={imagesSrc} alt="icon" />} />)
        })
        return <>{[...avatarArray]}</>;
      },
    },
    {
      title: "Proteins",
      dataIndex: "proteins",
      key: "proteins",
    },
    {
      title: "Fats",
      dataIndex: "fats",
      key: "fats",
    },
    {
      title: "Vitamins",
      dataIndex: "vitamins",
      key: "vitamins",
    },
    {
      title: "Nutrients",
      dataIndex: "nutrients",
      key: "nutrients",
    },
    {
      title: "Summary",
      dataIndex: "summary",
      key: "summary",
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
    },
    {
      title: "Calories",
      dataIndex: "calories",
      key: "calories",
    },
    {
      title: "SP",
      dataIndex: "sp",
      key: "sp",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={dataForResultTable} />
    </>
  );
};

export default observer(Result);
