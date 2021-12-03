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
  var myPrice = Number(document.getElementById("myPrice").value);
//outputs
  var highestPrice = document.getElementById("highestPrice");
  var lowestPrice = document.getElementById("lowestPrice");
  var profits = document.getElementById("profits");
  var cost = document.getElementById("cost");

  if (transportation == "alone") {weight = Math.max(0.9, weight)};

  cost.value = parseInt((jpyPrice + jpyShipping)*(jpyRate+0.01)*risk + (weight+0.1)*shippingRate + shopeeTransportationFee + myPrice*shopee)+20;
  profits.value = parseInt(myPrice - cost.value);
  highestPrice.value = parseInt(cost.value*1.25);
  lowestPrice.value = parseInt(cost.value*1.15);

  if (profits.value < 0) {alert("賠爆了")}
  else if (profits.value < lowestPrice.value - cost.value) {alert("小賠做佛心")};

  profits.innerHTML = profits.value;
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
