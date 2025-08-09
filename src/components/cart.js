"use client";
import React, { useState, useEffect } from "react";
import cartData from "../data/cartData.json";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartData);
  }, []);

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className=" p-4 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 mb-6">Shopping Cart</h2>

      <div className="flow-root">
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} className="flex py-6">
              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col">
                <div>
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{item.name}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                  <p className="ml-4">${item.price}</p>
                  <div className="flex">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border-t border-gray-200 mt-6 pt-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${subtotal.toFixed(2)}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
       
      </div>
    </div>
  );
}
