import React from "react";
import { observer } from "mobx-react-lite";
import { Button, Form, Input } from "antd";
import ecoFoodData from "../../../../../stores/EcoFoodData";

const AddProduct = () => {
  const [form] = Form.useForm();
  const formLayout = "horizontal";

  const submitForm = () => {
    ecoFoodData.addNewProduct();
    form.resetFields();
  };

  return (
    <>
      <Form
        {...{ labelCol: { span: 6 }, wrapperCol: { span: 14 } }}
        layout={formLayout}
        form={form}
        initialValues={{ layout: formLayout }}
        style={{ maxWidth: 600 }}
        onFinish={submitForm}
      >
        <Form.Item label="Product name" name={"productName"} onChange={ecoFoodData.setNewProductName}>
          <Input placeholder={ecoFoodData.newProduct.name} />
        </Form.Item>
        <Form.Item label="Calories" name={"calories"} onChange={ecoFoodData.setNewProductCalories}>
          <Input placeholder={ecoFoodData.newProduct.calories} />
        </Form.Item>
        <Form.Item label="Proteins" name={"proteins"} onChange={ecoFoodData.setNewProductProteins}>
          <Input placeholder={ecoFoodData.newProduct.proteins} />
        </Form.Item>
        <Form.Item label="Fats" name={"fats"} onChange={ecoFoodData.setNewProductFats}>
          <Input placeholder={ecoFoodData.newProduct.fats} />
        </Form.Item>
        <Form.Item label="Vitamins" name={"vitamins"} onChange={ecoFoodData.setNewProductVitamins}>
          <Input placeholder={ecoFoodData.newProduct.vitamins} />
        </Form.Item>
        <Form.Item label="Nutrients" name={"nutrients"} onChange={ecoFoodData.setNewProductNutrients}>
          <Input placeholder={ecoFoodData.newProduct.nutrients} />
        </Form.Item>
        <Form.Item {...{ wrapperCol: { span: 14, offset: 4 } }}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default observer(AddProduct);
