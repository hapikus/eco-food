import React from 'react'
import { Table, Avatar } from 'antd';

const products = {
  // Raw Food
  'Agave Leaves': {'weight': 200, 'nut': [2, 1, 1, 4]},
  'Bean Sprout': {'weight': 100, 'nut': [2, 1, 0, 5]},
  'Beans': {'weight': 150, 'nut': [1, 4, 3, 0]},
  'Beet': {'weight': 230, 'nut': [2, 0, 2, 4]},
  'Beet Greens': {'weight': 100, 'nut': [3, 1, 0, 4]},
  'Mushrooms': {'weight': 200, 'nut': [2, 4, 1, 1]},
  'Camas Bulb': {'weight': 150, 'nut': [1, 2, 5, 0]},
  'Corn': {'weight': 230, 'nut': [4, 1, 0, 3]},
  'Fiddleheads': {'weight': 150, 'nut': [2, 1, 0, 5]},
  'Fireweed Shoots': {'weight': 150, 'nut': [3, 1, 0, 4]},
  'Giant Cactus Fruit': {'weight': 100, 'nut': [2, 0, 2, 4]},
  'Heart Of Palm': {'weight': 100, 'nut': [4, 2, 0, 2]},
  'Huckleberries': {'weight': 150, 'nut': [2, 0, 0, 6]},
  'Papaya': {'weight': 200, 'nut': [2, 1, 0, 5]},
  'Pineapple': {'weight': 200, 'nut': [6, 0, 0, 2]},
  'Prickly Pear Fruit': {'weight': 190, 'nut': [2, 1, 1, 4]},
  'Pumpkin': {'weight': 340, 'nut': [5, 1, 0, 2]},
  'Taro Root': {'weight': 250, 'nut': [6, 1, 0, 1]},
  'Tomato': {'weight': 240, 'nut': [5, 1, 0, 2]},
  'Wheat': {'weight': 150, 'nut': [6, 2, 0, 0]},
  'Rice': {'weight': 150, 'nut': [7, 1, 0, 0]},
  'Sunflower': {'weight': 50, 'nut': [2, 2, 4, 0]},

  // Campfire 0
  'Boiled Grains': {'weight': 350, 'nut': [9, 2, 0, 1]},
  'Charred Meat': {'weight': 400, 'nut': [0, 5, 10, 0]},
  'Charred Fish': {'weight': 400, 'nut': [0, 11, 4, 0]},
  'Charred Agave': {'weight': 350, 'nut': [5, 1, 3, 3]},
  'Charred Beans': {'weight': 350, 'nut': [1, 8, 3, 0]},
  'Charred Beet': {'weight': 350, 'nut': [3, 0, 3, 6]},
  'Charred Cactus Fruit': {'weight': 200, 'nut': [4, 0, 2, 6]},
  'Charred Camas Bulb': {'weight': 350, 'nut': [2, 3, 6, 1]},
  'Charred Corn': {'weight': 350, 'nut': [7, 1, 0, 4]},
  'Charred Fireweed Shoots': {'weight': 350, 'nut': [5, 1, 0, 6]},
  'Charred Heart Of Palm': {'weight': 210, 'nut': [6, 3, 1, 2]},
  'Charred Mushrooms': {'weight': 350, 'nut': [3, 6, 2, 1]},
  'Charred Papaya': {'weight': 350, 'nut': [3, 1, 0, 8]},
  'Charred Pineapple': {'weight': 350, 'nut': [8, 1, 0, 3]},
  'Charred Taro': {'weight': 350, 'nut': [10, 1, 0, 1]},
  'Charred Tomato': {'weight': 350, 'nut': [7, 1, 0, 4]},
  'Wilted Fiddleheads': {'weight': 350, 'nut': [4, 1, 0, 7]},

  // Butchery
  'Prepared Meat': {'weight': 600, 'nut': [0, 4, 6, 0]},
  'Scrap Meat': {'weight': 50, 'nut': [0, 5, 5, 0]},
  'Prime Cut': {'weight': 600, 'nut': [0, 9, 4, 0]},
  'Raw Roast': {'weight': 600, 'nut': [0, 6, 5, 0]},
  'Raw Sausage': {'weight': 500, 'nut': [0, 4, 8, 0]},
  'Raw Bacon': {'weight': 200, 'nut': [0, 3, 9, 0]},//

  // Milling
  'Acorn Powder': {'weight': 40, 'nut': [1, 5, 2, 5]},
  'Bean Paste': {'weight': 40, 'nut': [3, 5, 7, 0]},
  'Sugar': {'weight': 50, 'nut': [15, 0, 0, 0]},
  'Camas Paste': {'weight': 60, 'nut': [3, 2, 10, 0]},
  'Cornmeal': {'weight': 60, 'nut': [9, 3, 3, 0]},
  'Cereal Germ': {'weight': 20, 'nut': [5, 0, 7, 3]},
  'Flour': {'weight': 50, 'nut': [15, 0, 0, 0]},
  'Huckleberry Extract': {'weight': 60, 'nut': [0, 0, 0, 15]},
  'Rice Flour': {'weight': 50, 'nut': [15, 0, 0, 0]},
  'Simple Syrup': {'weight': 400, 'nut': [12, 0, 3, 0]},
  'Sun Cheese': {'weight': 250, 'nut': [2, 4, 12, 0]},
  'Yeast': {'weight': 60, 'nut': [0, 8, 0, 7]},

  // Campfire >0
  'Bannock': {'weight': 700, 'nut': [15, 3, 6, 0]},
  'Beet Campfire Salad': {'weight': 900, 'nut': [8, 4, 3, 13]},
  'Campfire Roast': {'weight': 1000, 'nut': [0, 16, 12, 0]},
  'Charred Sausage': {'weight': 700, 'nut': [0, 10, 14, 0]},
  'Fern Campfire Salad': {'weight': 900, 'nut': [9, 5, 1, 13]},
  'Field Campfire Stew': {'weight': 1100, 'nut': [12, 4, 8, 4]},
  'Meaty Stew': {'weight': 1100, 'nut': [4, 13, 10, 1]},
  'Fried Camas': {'weight': 700, 'nut': [9, 3, 10, 2]},
  'Fried Fiddleheads': {'weight': 700, 'nut': [11, 3, 6, 4]},
  'Fried Hearts Of Palm': {'weight': 700, 'nut': [13, 3, 6, 2]},
  'Fried Taro': {'weight': 700, 'nut': [14, 1, 8, 1]},
  'Fried Tomatoes': {'weight': 700, 'nut': [11, 3, 8, 2]},
  'Jungle Campfire Salad': {'weight': 900, 'nut': [11, 4, 3, 10]},
  'Jungle Campfire Stew': {'weight': 1100, 'nut': [6, 8, 11, 3]},
  'Tallow': {'weight': 200, 'nut': [0, 0, 8, 0]},
  'Root Campfire Salad': {'weight': 950, 'nut': [8, 5, 4, 11]},
  'Root Campfire Stew': {'weight': 1100, 'nut': [6, 5, 12, 5]},
  'Topped Porridge': {'weight': 700, 'nut': [10, 4, 0, 10]},
  'Wild Stew': {'weight': 1100, 'nut': [8, 2, 6, 12]},

  // Baking
  'Baked Agave': {'weight': 700, 'nut': [14, 2, 4, 8]},
  'Baked Beet': {'weight': 700, 'nut': [10, 1, 2, 15]},
  'Baked Corn': {'weight': 700, 'nut': [12, 3, 2, 11]},
  'Baked Heart Of Palm': {'weight': 700, 'nut': [12, 6, 4, 6]},
  'Baked Meat': {'weight': 700, 'nut': [0, 17, 13, 0]},
  'Baked Roast': {'weight': 1000, 'nut': [4, 16, 10, 4]},
  'Baked Taro': {'weight': 700, 'nut': [8, 6, 2, 12]},
  'Baked Tomato': {'weight': 700, 'nut': [16, 1, 5, 6]},
  'Bread': {'weight': 750, 'nut': [23, 6, 4, 2]},
  'Camas Bread': {'weight': 800, 'nut': [13, 5, 11, 7]},
  'Camas Bulb Bake': {'weight': 700, 'nut': [12, 7, 5, 4]},
  'Flatbread': {'weight': 500, 'nut': [17, 8, 3, 2]},
  'Fruit Muffin': {'weight': 800, 'nut': [10, 5, 4, 16]},
  'Huckleberry Fritter': {'weight': 900, 'nut': [16, 0, 20, 8]},
  'Huckleberry Pie': {'weight': 1300, 'nut': [13, 5, 10, 16]},
  'Leavened Dough': {'weight': 10, 'nut': [6, 18, 13, 5]},
  'Meat Pie': {'weight': 1300, 'nut': [18, 4, 20, 2]},
  'Pastry Dough': {'weight': 10, 'nut': [4, 0, 0, 4]},
  'Roast Pumpkin': {'weight': 1400, 'nut': [23, 2, 2, 7]},
  'Worldly Donut': {'weight': 750, 'nut': [15, 2, 17, 2]},

  // Advanced Baking
  'Bearclaw': {'weight': 850, 'nut': [14, 4, 21, 7]},
  'Elk Wellington': {'weight': 1450, 'nut': [10, 26, 22, 4]},
  'Fantastic Forest Pizza': {'weight': 1250, 'nut': [27, 4, 10, 13]},
  'Fruit Tart': {'weight': 800, 'nut': [22, 3, 9, 14]},
  'Hearty Hometown Pizza': {'weight': 1200, 'nut': [28, 7, 11, 3]},
  'Macaroons': {'weight': 1000, 'nut': [20, 7, 14, 16]},
  'Pirozhok': {'weight': 850, 'nut': [14, 19, 10, 4]},
  'Sensuous Sea Pizza': {'weight': 1200, 'nut': [28, 11, 7, 4]},
  'Stuffed Turkey': {'weight': 1600, 'nut': [17, 24, 16, 7]},
  'Tasty Tropical Pizza': {'weight': 1200, 'nut': [28, 6, 12, 4]},

  // Cooking
  'Autumn Stew': {'weight': 1200, 'nut': [13, 8, 5, 12]},
  'Clam Chowder': {'weight': 800, 'nut': [21, 15, 7, 2]},
  'Crispy Bacon': {'weight': 800, 'nut': [0, 18, 26, 0]},
  'Fruit Salad': {'weight': 900, 'nut': [12, 4, 3, 19]},
  'Basic Salad': {'weight': 800, 'nut': [18, 6, 4, 10]},
  'Vegetable Medley': {'weight': 900, 'nut': [8, 4, 7, 17]},
  'Loaded Taro Fries': {'weight': 1200, 'nut': [14, 6, 18, 0]},
  'Meat Stock': {'weight': 600, 'nut': [3, 8, 9, 0]},
  'Mochi': {'weight': 750, 'nut': [25, 0, 0, 5]},
  'Phad Thai': {'weight': 1200, 'nut': [9, 13, 19, 3]},
  'Pupusas': {'weight': 900, 'nut': [6, 11, 9, 14]},
  'Rice Noodles': {'weight': 200, 'nut': [10, 0, 0, 0]},
  'Smooth Gut Noodle Roll': {'weight': 1200, 'nut': [19, 15, 9, 1]},
  'Taro Fries': {'weight': 600, 'nut': [10, 2, 20, 0]},
  'Vegetable Soup': {'weight': 1200, 'nut': [12, 4, 7, 19]},
  'Vegetable Stock': {'weight': 700, 'nut': [11, 1, 2, 11]},

  // Advanced Cooking 
  'Agouti Enchiladas': {'weight': 800, 'nut': [20, 8, 27, 3]},        
  'Banh Xeo': {'weight': 1550, 'nut': [26, 17, 10, 4]},
  'Bear S U P R E M E': {'weight': 1250, 'nut': [6, 22, 23, 9]},
  'Bison Chow Fun': {'weight': 1450, 'nut': [32, 7, 14, 3]},
  'Boiled Sausage': {'weight': 600, 'nut': [0, 27, 22, 0]},
  'Corn Fritters': {'weight': 500, 'nut': [13, 4, 22, 8]},
  'Elk Taco': {'weight': 700, 'nut': [15, 8, 22, 6]},
  'Fried Hare Haunches': {'weight': 750, 'nut': [6, 15, 27, 4]},
  'Poke Bowl': {'weight': 1100, 'nut': [24, 10, 11, 4]},
  'Oil': {'weight': 120, 'nut': [0, 0, 15, 0]},
  'Seared Meat': {'weight': 600, 'nut': [4, 19, 17, 7]},
  'Boiled Rice': {'weight': 210, 'nut': [13, 2, 0, 0]},
  'Crimson Salad': {'weight': 1200, 'nut': [15, 7, 10, 24]},
  'Fish N Chips': {'weight': 1000, 'nut': [20, 10, 20, 0]},
  'Infused Oil': {'weight': 120, 'nut': [0, 0, 12, 3]},
  'Kelpy Crab Roll': {'weight': 1350, 'nut': [22, 13, 11, 5]},
  'Millionaires Salad': {'weight': 1000, 'nut': [18, 6, 6, 26]},
  'Pineapple Friend Rice': {'weight': 720, 'nut': [20, 12, 12, 9]},
  'Seeded Camas Roll': {'weight': 1400, 'nut': [20, 2, 13, 16]},
  'Spiky Roll': {'weight': 1300, 'nut': [20, 17, 7, 2]},
  'Sweet Salad': {'weight': 1200, 'nut': [18, 9, 7, 22]},
  'Tortilla': {'weight': 350, 'nut': [20, 10, 0, 0]},
  'Wild Mix': {'weight': 800, 'nut': [15, 6, 4, 21]},
}

const data = [];

let productsKeys = Object.keys(products);
productsKeys.forEach((key, index) => {
  let imagesSrc = `./assets/food-icons/${key.replaceAll(' ', '')}_Icon.png`;
  data.push({
    key: `${index+1}`,
    name: key,
    icon: imagesSrc,
    calories: products[key].weight,
    proteins: products[key].nut[0],
    fats: products[key].nut[1],
    vitamins: products[key].nut[2],
    nutrients: products[key].nut[3],
  })
})

const columns = [
  {
    title: 'Icon',
    dataIndex: 'icon',
    key: 'icon',
    render: (icon) => {
      // console.log('Current directory: ' + window.location.pathname);
      console.log('icon', icon);
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
      {/* <img src={require('./assets/food-icons/AgaveLeaves_Icon.png')}></img>
      <Avatar src={<img src={require('./assets/food-icons/AgaveLeaves_Icon.png')} alt="avatar" />} /> */}
      <Table columns={columns} dataSource={data} />
    </>
    
  };

export default FoodTable