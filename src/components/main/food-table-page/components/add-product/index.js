import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Form, Input } from "antd";
import ecoFoodData from "../../../../../stores/EcoFoodData";

const AddProduct = () => {
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
        <Form.Item label="Product name" onChange={ecoFoodData.setNewProductName}>
          <Input placeholder={ecoFoodData.newProduct.name} />
        </Form.Item>
        <Form.Item label="Calories" onChange={ecoFoodData.setNewProductCalories}>
          <Input placeholder={ecoFoodData.newProduct.calories} />
        </Form.Item>
        <Form.Item label="Proteins" onChange={ecoFoodData.setNewProductProteins}>
          <Input placeholder={ecoFoodData.newProduct.proteins} />
        </Form.Item>
        <Form.Item label="Fats" onChange={ecoFoodData.setNewProductFats}>
          <Input placeholder={ecoFoodData.newProduct.fats} />
        </Form.Item>
        <Form.Item label="Vitamins" onChange={ecoFoodData.setNewProductVitamins}>
          <Input placeholder={ecoFoodData.newProduct.vitamins} />
        </Form.Item>
        <Form.Item label="Nutrients" onChange={ecoFoodData.setNewProductNutrients}>
          <Input placeholder={ecoFoodData.newProduct.nutrients} />
        </Form.Item>
        <Form.Item {...{ wrapperCol: { span: 14, offset: 4 } }}>
          <Button type="primary" onClick={ecoFoodData.addNewProduct}>
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default observer(AddProduct);
