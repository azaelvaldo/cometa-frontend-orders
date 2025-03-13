"use client";
import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/order")
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        return setOrder(data)
      })
      .catch((err) => console.error("Error obteniendo orden:", err));
  }, []);

  if (!order) return <div className="text-center p-10">Cargando...</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Estado de la Orden</h1>
      <p><strong>Fecha:</strong> {order.created}</p>
      <p><strong>Pagado:</strong> {order.paid ? "Sí" : "No"}</p>
      <h2 className="text-xl font-semibold mt-4">Cervezas Pedidas:</h2>
      <ul className="border p-4 rounded-lg shadow-sm bg-gray-100">
        {order.items.map((item, index) => (
          <li key={index} className="flex justify-between p-2 border-b">
            <span>{item.name} x {item.total / item.price_per_unit}</span>
            <span>${item.total.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 p-4 bg-gray-200 rounded-lg">
        <p><strong>Subtotal:</strong> ${order.subtotal.toFixed(2)}</p>
        <p><strong>Impuestos (10%):</strong> ${order.taxes.toFixed(2)}</p>
        <p><strong>Descuento (5%):</strong> -${order.discounts.toFixed(2)}</p>
        <p className="text-xl font-bold mt-2">Total: ${order.total.toFixed(2)}</p>
      </div>
    </div>
  );
}
