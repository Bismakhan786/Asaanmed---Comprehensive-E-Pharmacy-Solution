import React from "react";
import { View } from "react-native";

function sumOfArray(sum, num) {
    return sum + num
}

const getTotal = item => {
    
    if (item.length)
    {
        const subtotals = item.map(item => item.product.price * item.qty);
        return subtotals.reduce(sumOfArray).toFixed(2);
    }
    return 0;
}

export default getTotal;