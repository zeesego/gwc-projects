/* .js files add interaction to your website */

var displayScript = document.getElementById("scriptReturned");
var scriptButton = document.getElementById("scriptButton");

if (scriptButton) {
  scriptButton.addEventListener("click", generateScript);
}

function generateScript () {
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var message = document.getElementById("message").value;

  displayScript.innerHTML = "Hello, My name is " + name + " and I reside in " + location + ". I am writing you to ask that you help protect children who are put on the internet for content at a young age. There have been countless cases of child abuse within family vlogger households, such as the case of Ruby Franke in Springville, Utah. I believe that the current method of exploiting one's children for content and virality is highly unethical and demeaning to not only the family dynamic but the children's mental and physical wellbeing as well. " + message + " I appreciate your help and ask that you please send me a response letting me know if you are able to pass a Bill that would protect these children. Thank you for your time and considering my request. Sincerely, " + name + ".";
}