import React, { useState } from 'react';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState();
  const [quantity, setQuantity] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    //console.log(e.target.name);
    if (e.target.name === 'name') {
      setName(value);
    } else if (e.target.name === 'quantity') {
      setQuantity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };
    setItems([...items, newItem]);
    setName('');
    setQuantity('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Item name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Enter item name"
          />
        </div>
        <div>
          <label htmlFor="">Quantity:</label>
          <input
            type="text"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
      <h1>Item List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <ul>Name: {item.name}</ul>
            <ul>Quantity: {item.quantity}</ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
