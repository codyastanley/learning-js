function countByTens() {
  var num2 = 0;
   // The 'while' funtion loops until we reach 100.
  while (num2 <= 200) {

    // Creates a <p> element and stores it in newP variable for use later.
    var newP = document.createElement('p');

    // Creates a node of text, stores it in a variable to be added to the <p> (newP) next.
    var num2Text = document.createTextNode(num2);

    // Adds the text (the current number) to the <p>
    newP.appendChild(num2Text);

    // Locate where to add our new <p> elements.
    var outputBox = document.getElementById("externalScriptOutput");

    // Adds the new <p> elements to the page within the parent element.
    outputBox.appendChild(newP);

    // Increment the number by 10
    num2 += 10;

    // The function loops back to the beginning.
  }
}
