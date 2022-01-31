import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { buyProduct, sellProduct , moneySelector} from "../redux/moneySlice";
import { Button } from 'antd';
function ItemCard({ item }) {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const money = useSelector(moneySelector);

 
  const buyItem = (price) => {
    setAmount(Number(amount) + 1);
    dispatch(buyProduct(price));
   
  };

  const sellItem = (price) => {
    setAmount(Number(amount) - 1);
    dispatch(sellProduct(price));
  };

  const buyAndSellItem = (value, price) => {
    if (amount > value) {
      dispatch(sellProduct((amount - value) * price));
    }
    if (amount < value) {
      dispatch(buyProduct((value - amount) * price));
    }
    setAmount(value);
  };
  return (
    <div className="item-card">
      <img src={item.img} alt={item.title} />
      <h5>{item.title}</h5>
      <p>$ {item.price}</p>
      <div className="button-container">
        <Button
        
          className={amount === 0 ? "btn" : "btn sell"}
          onClick={() => sellItem(item.price)}
          disabled={amount === 0}
        >
          Sell
        </Button>
        <input
        className="amount-input"
          type="text"
          value={amount}
          onChange={(e) => buyAndSellItem(Number(e.target.value), item.price)}
          disabled={money <= 0 || item.price > money}
        />
        <Button
          className={item.price > money ? "btn" : "btn buy"}
          onClick={() => buyItem(item.price)}
          disabled={item.price > money}
        >
          Buy
        </Button>
      </div>
    </div>
  );
}

export default ItemCard;
