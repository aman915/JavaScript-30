// selects all list with class = controls and type input
var inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  //to add the px after updated value
  var suffix = this.dataset.sizing || "";
  //setting the new value
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(function(input) {
  input.addEventListener("change", handleUpdate); //to see the change in value
  input.addEventListener("mousemove", handleUpdate);
});
