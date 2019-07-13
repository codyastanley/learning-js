function countByTens() {
  var num2 = 0;
  while (num2 < 100) { //funtion loops until we reach 100

    // Creates a <p> element and stores it in newP variable for use later.
    var newP = document.createElement('p');

    // Creates a node of text, stores it in a variable to be added to the <p> (newP) next.
    var num2Text = document.createTextNode(num2);

    // Adds the text (the current number) to the <p>
    newP.appendChild(num2Text);

    // Locate where to add our new <p> elements.
    var div = document.getElementById("externalScript");

    // Adds the new <p> elements to the page within the parent element.
    div.appendChild(newP);

    // Increment the number by 10
    num2 += 10

    // The function loops back to the beginning.
  }
}
