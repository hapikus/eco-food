import React, { useState } from 'react'
import { Collapse } from 'antd';
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
        <Collapse.Panel header="Controls" key="1">
          <p>123</p>
        </Collapse.Panel>
        <Collapse.Panel header="Food table" key="2">
          <FoodTable />
        </Collapse.Panel>
        <Collapse.Panel header="Result" key="3">
          <Result />
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}

export default FoodTablePage