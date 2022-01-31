import React from 'react';
import { useSelector } from 'react-redux';
import { errorSelector, moneySelector } from '../redux/moneySlice';
import { Typography } from 'antd';
const { Title } = Typography;
function MoneyContainer() {
    const money = useSelector(moneySelector);
    const error = useSelector(errorSelector);
   
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const l = numberWithCommas(money);
    return (
        <div className="money-container">
            <Title style={{color: "white"}} >$ {l}</Title>
            {
                error ? <p>{error}</p> : null
            }
        </div>
    );
}

export default MoneyContainer;