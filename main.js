function convert() {
  var sellPrice = document.getElementById("sellPrice");
  var ourPrice = document.getElementById("ourPrice");
  var jpyPrice = Number(document.getElementById("jpyPrice").value);
  var jpyRate = Number(document.getElementById("jpyRate").value);
  var jpyShipping = Number(document.getElementById("jpyShipping").value);
  var weight = Number(document.getElementById("weight").value);
  var shippingRate = Number(document.getElementById("shippingRate").value);
  var clothNum = Number(document.getElementById("clothNum").value);
  var fee = Number(document.getElementById("fee").value);
  sellPrice.innerHTML = (jpyPrice + jpyShipping)*(jpyRate+0.06) + weight*shippingRate + fee + (clothNum-1)*100;
  ourPrice.innerHTML = (jpyPrice + jpyShipping)*(jpyRate+0.03) + weight*(shippingRate+80);
  return
}
