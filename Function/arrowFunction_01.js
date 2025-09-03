const calculateTotal = (price, quantity) => {
  return `Total cost is : ${price} * ${quantity}`;
};

let TotalCost = calculateTotal(2350, 3);
console.log(TotalCost);
