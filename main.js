function convert() {
  var sellPrice = document.getElementById("sellPrice");
  var ourPrice = document.getElementById("ourPrice");
  var jpyPrice = Number(document.getElementById("jpyPrice").value);
  var jpyRate = Number(document.getElementById("jpyRate").value);
  var jpyShipping = Number(document.getElementById("jpyShipping").value);
  var weight = Number(document.getElementById("weight").value);
  var shippingRate = Number(document.getElementById("shippingRate").value);
  sellPrice.innerHTML = (jpyPrice + jpyShipping)*(jpyRate+0.06) + weight*shippingRate + 200;
  ourPrice.innerHTML = (jpyPrice + jpyShipping)*(jpyRate+0.03) + weight*(shippingRate+180);
  return
}
