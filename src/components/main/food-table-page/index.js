import React, { useState } from 'react'
import { Collapse } from 'antd';
import Options from './components/options';
import AddProduct from './components/add-product';
import FoodTable from './components/food-table';
import Result from './components/result';
import styles from './food-table-page.module.css';

const FoodTablePage = () => {
  const [key, setKey] = useState('1')
  const onChange = (key) => {
    setKey(key);
  }
  return (
    <div className={styles.container}>
      <Collapse activeKey={key} onChange={onChange}>
        <Collapse.Panel header="Options" key="1">
          <Options />
        </Collapse.Panel>
        <Collapse.Panel header="Add product" key="2">
          <AddProduct />
        </Collapse.Panel>
        <Collapse.Panel header="Food table" key="3">
          <FoodTable />
        </Collapse.Panel>
        <Collapse.Panel header="Result" key="4">
          <Result />
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default FoodTablePage