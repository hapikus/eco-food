import React from 'react'
import { observer } from "mobx-react-lite";
import { Button, Form, Input } from "antd";
import ecoFoodData from "../../../../../stores/EcoFoodData";

const Options = () => {
    const [form] = Form.useForm();
    const formLayout = "horizontal";
  
    return (
      <>
        <Form
          {...{ labelCol: { span: 6 }, wrapperCol: { span: 14 } }}
          layout={formLayout}
          form={form}
          initialValues={{ layout: formLayout }}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            label="Max calories"
            onChange={ecoFoodData.setMaxWeight}
          >
            <Input placeholder={ecoFoodData.maxWeight} />
          </Form.Item>
          <Form.Item
            label="Max combinations"
            onChange={ecoFoodData.setMaxProductsCount}
          >
            <Input placeholder={ecoFoodData.maxProductsCount} />
          </Form.Item>
          <Form.Item
            label="Maximum recipe length"
            onChange={ecoFoodData.setMaxLen}
          >
            <Input placeholder={ecoFoodData.maxLen} />
          </Form.Item>
          <Form.Item
            label="How much to show"
            onChange={ecoFoodData.setHowMuchToShow}
          >
            <Input placeholder={ecoFoodData.howMuchToShow} />
          </Form.Item>
          <Form.Item {...{ wrapperCol: { span: 14, offset: 4 } }}>
            <Button 
              type="primary"
              onClick={ecoFoodData.createResult}            
            >
              Run
            </Button>
          </Form.Item>
        </Form>
      </>
    );
}

export default observer(Options);