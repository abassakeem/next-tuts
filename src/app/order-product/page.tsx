"use client";
import { useRouter } from "next/navigation";
import React from "react";


export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    // Simulate an order placement
    console.log("Order placed!");
    router.push("/"); // Redirect to a success page
  };    
  return (
    <div>
      <h1>Order Product</h1>
      <button onClick={handleClick}>Place Order</button>
      <p>Click the button to place an order for the product.</p>
    </div>
  );
}
