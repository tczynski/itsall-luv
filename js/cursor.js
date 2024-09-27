window.addEventListener("mousemove", function(event) {
  var customCursor = document.getElementById("custom-cursor");
  customCursor.style.left = event.clientX + "px";
  customCursor.style.top = event.clientY + "px";
  
});

window.addEventListener("mousedown", function(event) {
  var customCursorClick = document.getElementById("custom-cursor-click");
  customCursorClick.style.left = event.clientX + "px";
  customCursorClick.style.top = event.clientY + "px";
  customCursorClick.style.visibility = "visible";

  var customCursor = document.getElementById("custom-cursor");
  customCursor.style.visibility = "hidden";
});

window.addEventListener("mouseup", function(event) {
  var customCursorClick = document.getElementById("custom-cursor-click");
  customCursorClick.style.visibility = "hidden";

  var customCursor = document.getElementById("custom-cursor");
  customCursor.style.visibility = "visible";
});

document.body.addEventListener("mouseenter", function() {
  var customCursor = document.getElementById("custom-cursor");
  customCursor.style.visibility = "visible";
});

document.body.addEventListener("mouseleave", function() {
  var customCursor = document.getElementById("custom-cursor");
  customCursor.style.visibility = "hidden";
});


