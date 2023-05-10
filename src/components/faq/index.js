import React from "react";
import { Collapse } from "antd";

const Faq = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Collapse defaultActiveKey={["1"]} onChange={onChange}>
      <Collapse.Panel header="Algorithm" key="1">
        <p>
          Our algorithm is based on the millennia-old history of humanity and
          all available information on the internet. Thanks to this, ChatGPT has
          been able to create a food combination function, which we have
          rigorously tested against various criteria.
          <br />
          <br />
          Thanks to this approach, we can offer our users a reliable and
          effective way to improve their diet and overall health. Our food
          combination function will help you create balanced and delicious meals
          that meet your needs and preferences.
          <br />
          <br />
          We are confident in the quality of our function and will continue to
          improve it to provide our users with the best possible experience.
          Thank you for choosing our platform!
        </p>
      </Collapse.Panel>
      <Collapse.Panel header="Testing" key="2">
        <p>
          Our team of professionals tests our recipes daily, without sparing
          their stomachs, to ensure their quality and the amount of SP they
          provide. This allows us to be confident in the effectiveness of our
          recipes and the benefits they provide to our users.
          <br />
          <br />
          We believe that having a team of experts constantly reviewing and
          refining our recipes is essential to providing the best possible
          experience for our users. With their expertise and dedication, we can
          ensure that our recipes are not only delicious, but also nutritionally
          balanced and aligned with our users' goals and preferences.
          <br />
          <br />
          Thank you for choosing our platform and trusting us with your health
          and wellness journey. We are committed to delivering the highest
          quality service possible and helping you achieve your goals!
        </p>
      </Collapse.Panel>
    </Collapse>
  );
};

export default Faq;
