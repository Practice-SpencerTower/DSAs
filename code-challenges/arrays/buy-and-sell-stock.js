// Best Time to Buy and Sell a Stock

function maxProfit(prices) {
    let maxProf = 0;
    let buyDay = 0;

    for (let sellDay = 1; i < prices.length; i++) {
        if (prices[sellDay] > prices[buyDay]) {
            let currProf = prices[sellDay] - prices[buyDay];
            if (currProf > maxProf) maxProf = currProf;
        } else {
            buyDay = sellDay;
        }
    }
    return maxProf;
}
