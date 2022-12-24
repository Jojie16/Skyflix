    
    
    // get a reference to the button and yes button
    const button_no = document.getElementById('btn_no');
    const button_yes = document.getElementById('btn_yes');

    // add a click event listener to the button
    button_no.addEventListener('click', function() {
      // move the button to a random position on the page
      button_no.style.top = Math.random() * window.innerHeight + 'px';
      button_no.style.left = Math.random() * window.innerWidth + 'px';
    });

    // add a click event listener to the yes button
    function myFunction() {
        let text = "Press a button!\nEither OK or Cancel.";
        if (confirm(text) == true) {
          window.location = "https://www.skyflix.cf/Labyu-Reg/"; // next page
        } else {
          text = "OKAY SINO BA NAMAN AKO ^n^";
        }
        document.getElementById("demo").innerHTML = text;
      }
    