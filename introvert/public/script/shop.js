function showQV() {
  var t = document.querySelector('.quick-view').style.visibility;
  if(t === "visible") {
    document.querySelector('.quick-view').style.visibility = "hidden";
  } else {
    document.querySelector('.quick-view').style.visibility = "visible";
  }
  console.log("worked");
}
