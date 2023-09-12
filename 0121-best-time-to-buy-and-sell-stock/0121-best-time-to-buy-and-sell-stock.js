/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  
    let maxProfit = 0; // 최대 이익을 저장하는 변수
  let minPrice = prices[0]; // 최소 가격을 저장하는 변수

  for (let i = 1; i < prices.length; i++) {
    // 현재 가격과 최소 가격을 비교하여 차이를 계산
    const profit = prices[i] - minPrice;

    // 만약 현재 차이가 현재까지의 최대 이익보다 크다면 업데이트
    if (profit > maxProfit) {
      maxProfit = profit;
    }

    // 최소 가격 업데이트
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
};