  const input = document.getElementById("textInput");
  const inpBtn = document.querySelector("#inputBtn");
  const output = document.getElementById("output");
  const outputBtn = document.querySelector("#ansBtn");

  input.addEventListener("keydown", function() {
    output.innerHTML = input.value; // Update the value of the paragraph on every keydown event
  });

//clear input text
inpBtn.addEventListener('click', function(){
  input.value = "";
})

// clear output text
function clearOutputText(){
  output.textContent="";
}


