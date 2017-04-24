document.getElementsByClassName("tablink")[0].click();        
function openCase(evt, caseName) {
  var i, x, tls;
  x = document.getElementsByClassName("case");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tls = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tls[i].classList.remove("w3-light-grey");
  }
  document.getElementById(caseName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}

document.getElementsByClassName("tablinkS")[0].click(); 
function openCaseS(evt, caseSName) {
  var i, x, tls;
  x = document.getElementsByClassName("caseS");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tls = document.getElementsByClassName("tablinkS");
  for (i = 0; i < x.length; i++) {
    tls[i].classList.remove("w3-light-grey");
  }
  document.getElementById(caseSName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
} 

document.getElementsByClassName("tablinkCs")[0].click(); 
function openCaseCs(evt, caseCsName) {
  var i, x, tls;
  x = document.getElementsByClassName("caseCs");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tls = document.getElementsByClassName("tablinkCs");
  for (i = 0; i < x.length; i++) {
    tls[i].classList.remove("w3-light-grey");
  }
  document.getElementById(caseCsName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}

document.getElementsByClassName("tablinkCpp")[0].click(); 
function openCaseCpp(evt, caseCppName) {
  var i, x, tls;
  x = document.getElementsByClassName("caseCpp");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tls = document.getElementsByClassName("tablinkCpp");
  for (i = 0; i < x.length; i++) {
    tls[i].classList.remove("w3-light-grey");
  }
  document.getElementById(caseCppName).style.display = "block";
  evt.currentTarget.classList.add("w3-light-grey");
}        