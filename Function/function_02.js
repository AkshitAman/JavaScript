function OrderTea(teaType) {
  function confirmOrder() {
    return `Order Confirmed for ${teaType}`;
  }
  return confirmOrder();
}

let Order = OrderTea("Lemon Tea");
console.log(Order);
