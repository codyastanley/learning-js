function countByTens() {
  var num2 = 0;
  while (num2 < 100) {
    num2 += 10

    var newP = document.createElement('p');

    var num2Text = document.createTextNode(num2);
    newP.appendChild(num2Text);

    var div = document.getElementById("externalScript");
    div.appendChild(newP);
  }
}
