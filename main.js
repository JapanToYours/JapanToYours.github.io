function Convert() {
//inputs
  var shopee = Number(document.getElementById("shopee").value);
  var jpyPrice = Number(document.getElementById("jpyPrice1").value)
                +Number(document.getElementById("jpyPrice2").value)
                +Number(document.getElementById("jpyPrice3").value)
                +Number(document.getElementById("jpyPrice4").value)
                +Number(document.getElementById("jpyPrice5").value)
                +Number(document.getElementById("jpyPrice6").value)
                +Number(document.getElementById("jpyPrice7").value)
                +Number(document.getElementById("jpyPrice8").value)
                +Number(document.getElementById("jpyPrice9").value);
  var jpyShipping = Number(document.getElementById("jpyShipping").value);
  var transportation = document.getElementById("transportation").value;
  var risk = Number(document.getElementById("risk").value);
  var shopeeTransportationFee = Number(document.getElementById("shopeeTransportationFee").value)
  var pieces = Number(document.getElementById("pieces").value);
  var jpyRate = Number(document.getElementById("jpyRate").value);
  var weight = Number(document.getElementById("weight").value);
  var shippingRate = Number(document.getElementById("shippingRate").value);
  var profits = Number(document.getElementById("profits").value);
//outputs
  var highestPrice = document.getElementById("highestPrice");
  var lowestPrice = document.getElementById("lowestPrice");
  var sellingPrice = document.getElementById("sellingPrice");
  var cost = document.getElementById("cost");

  if (transportation == "alone") {weight = Math.max(0.9, weight)};

  cost.value = (jpyPrice + jpyShipping)*(jpyRate+0.01)*risk + (weight+0.1)*shippingRate + shopeeTransportationFee;
  cost.value = cost.value*shopee;
  sellingPrice.value = cost.value + profits;
  highestPrice.value = cost.value*1.25;
  lowestPrice.value = cost.value*1.15;
  if (sellingPrice.value < lowestPrice.value) {alert("小賠做佛心")}
  else if (sellingPrice.value > highestPrice.value) {alert("比公式高 只要沒算錯依然可報價")};

  sellingPrice.innerHTML = sellingPrice.value;
  highestPrice.innerHTML = highestPrice.value;
  lowestPrice.innerHTML = lowestPrice.value;
  cost.innerHTML = cost.value;
  return
};

function Pieces() {
  var pieces = Number(document.getElementById("pieces").value);

  for (var i = 1; i < pieces; i++) {
    document.getElementById("jpyPrice"+(i+1).toString()).type = "number";
  };
  for (var i = 9; i > pieces; i--) {
    document.getElementById("jpyPrice"+i.toString()).type = "hidden";
    document.getElementById("jpyPrice"+i.toString()).value = 0;
  };
  return
};
