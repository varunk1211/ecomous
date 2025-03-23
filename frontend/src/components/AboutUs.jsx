import React from "react";
import ShowFeedback from "./ShowFeedback";

export default function AboutUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center">
        Welcome to V Shop! We are dedicated to providing you with the best
        shopping experience.
      </p>
      <p>
        Our mission is to make shopping easier and more enjoyable for everyone.
        At V Shop, you’ll find a wide range of products at competitive prices,
        with exceptional customer service and fast delivery.
      </p>
      <h3>Why Choose Us?</h3>
      <ul>
        <li>Quality Products</li>
        <li>Customer Satisfaction</li>
        <li>Easy Returns</li>
        <li>Fast Shipping</li>
        <li>24/7 Support</li>
      </ul>
      <p>
        We are committed to bringing the best products to our customers. If you
        have any questions or feedback, feel free to contact us.
      </p>
      <hr></hr>
      <ShowFeedback />
    </div>
  );
}
