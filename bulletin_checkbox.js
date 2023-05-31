//라디오 선택시 보이게 하기
function toggleVisibility(radioId) {
  var hiddenDivs = document.getElementsByClassName("hiddenDiv");
  
  for (var i = 0; i < hiddenDivs.length; i++) {
    var hiddenDiv = hiddenDivs[i];
    
    if (hiddenDiv.id === "hiddenDiv" + radioId.substr(4)) {
      hiddenDiv.style.display = "block";
    } else {
      hiddenDiv.style.display = "none";
    }
  }
}