import React from 'react'
import { observer } from "mobx-react-lite";
import { Table, Avatar } from 'antd';
import ecoFoodData from "../../../../../stores/EcoFoodData";

const dataForFoodTable = [];

let productsKeys = Object.keys(ecoFoodData.products);
productsKeys.forEach((key, index) => {
  let imagesSrc = `./assets/food-icons/${key.replaceAll(' ', '')}_Icon.png`;
  dataForFoodTable.push({
    key: `${index+1}`,
    name: key,
    icon: imagesSrc,
    calories: ecoFoodData.products[key].weight,
    proteins: ecoFoodData.products[key].nut[0],
    fats: ecoFoodData.products[key].nut[1],
    vitamins: ecoFoodData.products[key].nut[2],
    nutrients: ecoFoodData.products[key].nut[3],
  })
})

const columns = [
  {
    title: 'Icon',
    dataIndex: 'icon',
    key: 'icon',
    render: (icon) => {
      let imagesSrc = require(`${icon}`);
      return <Avatar src={<img src={imagesSrc} alt="icon" />} />
    },
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Calories',
    dataIndex: 'calories',
    key: 'calories',
  },
  {
    title: 'Proteins',
    dataIndex: 'proteins',
    key: 'proteins',
  },
  {
    title: 'Fats',
    dataIndex: 'fats',
    key: 'fats',
  },
  {
    title: 'Vitamins',
    dataIndex: 'vitamins',
    key: 'vitamins',
  },
  {
    title: 'Nutrients',
    dataIndex: 'nutrients',
    key: 'nutrients',
  },
];

const FoodTable = () => {

    return <>
      <Table columns={columns} dataSource={dataForFoodTable} />
    </>
    
  };

export default observer(FoodTable);