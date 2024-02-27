function Start() {
  var text = document.getElementById("text").value;
  console.log(text);
  var count = document.getElementById("count").value;
  console.log(count);
  var result = " ";
  for (let i = 0; i < count; i++) {
    var one = text.replace("_?!?_", i);
    console.log(one);
    result = result + one + "    ";
  }
  document.getElementById("result").innerHTML = result;
}
