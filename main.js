function Convert() {
  var highestPrice = document.getElementById("highestPrice");
  var lowestPrice = document.getElementById("lowestPrice");
  var sellingPrice = document.getElementById("sellingPrice");
  var cost = document.getElementById("cost");

  var notice = document.getElementById("notice");

  var method = Number(document.getElementById("method").value);
  var pieces = Number(document.getElementById("pieces").value);

  var jpyPrice = Number(document.getElementById("jpyPrice1").value)
                +Number(document.getElementById("jpyPrice2").value)
                +Number(document.getElementById("jpyPrice3").value)
                +Number(document.getElementById("jpyPrice4").value)
                +Number(document.getElementById("jpyPrice5").value)
                +Number(document.getElementById("jpyPrice6").value)
                +Number(document.getElementById("jpyPrice7").value)
                +Number(document.getElementById("jpyPrice8").value)
                +Number(document.getElementById("jpyPrice9").value);

  var jpyRate = Number(document.getElementById("jpyRate").value);
  var jpyShipping = Number(document.getElementById("jpyShipping").value);
  var weight = Number(document.getElementById("weight").value);
  var shippingRate = Number(document.getElementById("shippingRate").value);
  var shopee = Number(document.getElementById("shopee").value);
  var serviceFee = Number(document.getElementById("serviceFee").value);

  if (method == 1) {
    if (weight < 1) { weight = 1};

    notice.value = "代購商品僅尾款(200元上下)走蝦皮<br>其餘先匯款或是刷卡<br>也可先收訂金每一萬日幣收一千台幣起"
    highestPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.06) + (weight+0.2)*(shippingRate) + shopee*0.06 + 100 + (pieces-1)*50;
    lowestPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.03) + (weight+0.1)*(shippingRate) + shopee*0.06 + 60 + (pieces-1)*30;
    sellingPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.06) + serviceFee;
    cost.value = (jpyPrice + jpyShipping)*(jpyRate+0.005) + weight*(shippingRate) + shopee*0.06 + 60
    if (sellingPrice.value < cost.value) {alert("報價低於成本!!!!")}
    else if (sellingPrice.value < lowestPrice.value) {alert("報價低於底價 請調整手續費")}
    else if (sellingPrice.value > highestPrice.value) {alert("報價高於頂價 可能偏貴 請注意")};
  }

    else if (method == 2) {
      if (weight < 1) { weight = 1};

      notice.value = "預購商品全額蝦皮<br>記得調整蝦皮賣場價格至全額"
      highestPrice.value = ((jpyPrice + jpyShipping)*(jpyRate+0.06) + (weight+0.2)*(shippingRate))*1.1 + shopee*0.1 + 200;
      lowestPrice.value = ((jpyPrice + jpyShipping)*(jpyRate+0.03) + (weight+0.1)*(shippingRate))*1.05 + shopee*0.1 + 100;
      sellingPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.06) + serviceFee;
      cost.value = ((jpyPrice + jpyShipping)*(jpyRate+0.005) + weight*(shippingRate) + shopee*0.06 + 60)*1.05
      if (sellingPrice.value < cost.value) {alert("報價低於成本!!!!")}
      else if (sellingPrice.value < lowestPrice.value) {alert("報價低於底價 請調整手續費")}
      else if (sellingPrice.value > highestPrice.value) {alert("報價高於頂價 可能偏貴 請注意")};
  }
    else if (method == 3) {
      notice.innerHTML = "小物(200g以下)不單獨易利空運<br>需跟其他商品一起走國際段否則算是代購"
      highestPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.06)*1.1 + weight*shippingRate + shopee*0.06 + 100 + (pieces-1)*50;
      lowestPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.03)*1.05 + shopee*0.06 + 100 + (pieces-1)*30;
      sellingPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.06) + serviceFee;
      cost.value = ((jpyPrice + jpyShipping)*(jpyRate+0.005)+ shopee*0.06 + 70)*1.05
      if (sellingPrice.value < cost.value) {alert("報價低於成本!!!!")}
      else if (sellingPrice.value < lowestPrice.value) {alert("報價低於底價 請調整手續費")}
      else if (sellingPrice.value > highestPrice.value) {alert("報價高於頂價 可能偏貴 請注意")};
  }
    else if (method == 4) {
      notice.innerHTML = "庫存現貨不得超過五萬"
      highestPrice.value = ((jpyPrice + jpyShipping)*(jpyRate+0.06) + (weight+0.1)*(shippingRate))*3 + shopee*0.06 + 100;
      lowestPrice.value = ((jpyPrice + jpyShipping)*(jpyRate+0.03) + (weight)*(shippingRate))*1.5 + shopee*0.06 + 60;
      sellingPrice.value = (jpyPrice + jpyShipping)*(jpyRate+0.06) + serviceFee;
      cost.value = ((jpyPrice + jpyShipping)*(jpyRate+0.005) + weight*(shippingRate) + shopee*0.06 + 60)*1.2
      if (sellingPrice.value < cost.value) {alert("報價低於成本!!!!")}
      else if (sellingPrice.value < lowestPrice.value) {alert("報價低於底價 請調整手續費")}
      else if (sellingPrice.value > highestPrice.value) {alert("報價高於頂價 可能偏貴 請注意")};
  }
    else {
    alert("有BUG 找我修")
  }
  highestPrice.innerHTML = highestPrice.value;
  lowestPrice.innerHTML = lowestPrice.value;
  sellingPrice.innerHTML = sellingPrice.value;
  cost.innerHTML = cost.value;
  return
}

function Pieces() {
  var pieces = Number(document.getElementById("pieces").value);
  for (var i = 1; i < pieces; i++) {
    document.getElementById("jpyPrice"+(i+1).toString()).type = "number";
  };
  for (var i = 9; i > pieces; i--) {
    document.getElementById("jpyPrice"+i.toString()).type = "hidden";
    document.getElementById("jpyPrice"+i.toString()).value = 0;
  };
}
