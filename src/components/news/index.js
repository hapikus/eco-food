import React from "react";
import { Card } from "antd";

const News = () => {
  return (
    <Card title="News">
      <Card type="inner" title="We are open!">
        We're excited to announce that our service is now open to all! Our
        platform is designed to help you improve your diet and overall health,
        providing you with the tools and support you need to succeed. Whether
        you're looking to lose weight, gain muscle, or simply feel better, our
        service can help.
        <br />
        <br />
        With our platform, you can track your meals, calories, and nutrient
        intake with ease. We'll provide you with personalized recommendations
        based on your goals and preferences, as well as access to a community of
        like-minded individuals who are also working towards a healthier
        lifestyle.
        <br />
        <br />
        But that's not all - by using our service, you'll also earn SP (Success
        Points) and gain valuable experience that will help you level up in the
        game of life. Our gamified approach to health and wellness makes
        achieving your goals fun and rewarding.
        <br />
        <br />
        So what are you waiting for? Join our community today and start your
        journey towards better health and greater success!
      </Card>
    </Card>
  );
};

export default News;
