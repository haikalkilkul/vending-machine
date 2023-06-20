"use client"
import { useState } from 'react';
import CartComponent from './cartComponent';
import VendingItem from './vendingItem';
import vendingItems from '../data/data.json';

export default function Home() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (item) => {
    setSelectedItems([...selectedItems, item]);
    setTotalPrice(totalPrice + item.price);
  };

  const removeItem = (index) => {
    const updatedItems = [...selectedItems];
    const removedItem = updatedItems.splice(index, 1)[0];
    setSelectedItems(updatedItems);
    setTotalPrice(totalPrice - removedItem.price);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-4 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Vending Machine</h1>
        <div className="grid grid-cols-3  gap-4">
          { vendingItems.map((item, index) => (
            <VendingItem
              key={ index }
              item={ item }
              addItem={ addItem }
            />
          )) }
        </div>
      </div>

      <CartComponent
        selectedItems={ selectedItems }
        totalPrice={ totalPrice }
        removeItem={ removeItem }
      />
    </div>
  );
}