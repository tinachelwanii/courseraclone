var text = document.getElementById("maincontent");
var def = text.innerHTML;
var ibm0 = document.getElementById("ibm0").innerHTML;
ibm0 = '<div id ="ibm0" class = "header cards">' + ibm0 + '</div>';
var meta0 = document.getElementById("meta0").innerHTML;
meta0 = '<div id ="meta0" class = "header cards">' + meta0 + '</div>';
var full0 = document.getElementById("full0").innerHTML;
full0 = '<div id ="full0" class = "header cards">' + full0 + '</div>';
var ibm1 = document.getElementById("ibm1").innerHTML;
ibm1 = '<div id ="ibm1" class = "header cards">' + ibm1 + '</div>';
var meta1 = document.getElementById("meta1").innerHTML;
meta1 = '<div id ="meta1" class = "header cards">' + meta1 + '</div>';
var full1 = document.getElementById("full1").innerHTML;
full1 = '<div id ="full1" class = "header cards">' + full1 + '</div>';
var ibm2 = document.getElementById("ibm2").innerHTML;
ibm2 = '<div id ="ibm2" class = "header cards">' + ibm2 + '</div>';
var meta2 = document.getElementById("meta2").innerHTML;
meta2 = '<div id ="meta1" class = "header cards">' + meta2 + '</div>';
var full2 = document.getElementById("full2").innerHTML;
full2 = '<div id ="full2" class = "header cards">' + full2 + '</div>';
var ibm = ibm0 + ibm1 +ibm2;
var meta = meta0 + meta1 + meta2;
var full = full0 + full1 + full2;

function filter(){
  var ans = "";
  text.innerHTML = "";
  var a = document.getElementById("Beginner");
  var b = document.getElementById("Intermediate");
  var c = document.getElementById("Advanced");
  var d = document.getElementById("Weeks");
  var e = document.getElementById("Months");
  var f = document.getElementById("moreMonths");
  var lev = false;
  var time = false;
  if(!a.checked && !b.checked && !c.checked){
    lev =true;
  }
  if(!d.checked && !e.checked && !f.checked){
    time =true;
  }
  if(lev && time){
    ans += ibm+meta+full;
  }
  else if(time){
    if(a.checked && b.checked && c.checked){
      ans += ibm+meta+full;
    }
    else if(a.checked && b.checked && !c.checked){
      ans += ibm+meta;
    }
    else if(a.checked && !b.checked && c.checked){
      ans += ibm+full;
    }
    else if(!a.checked && b.checked && c.checked){
      ans += meta+full;
    }
    else if(a.checked && !b.checked && !c.checked){
      ans += ibm;
    }
    else if(!a.checked && b.checked && !c.checked){
      ans += meta;
    }
    else if(!a.checked && !b.checked && c.checked){
      ans += full;
    }
  }
  else if(lev){
    if(d.checked && e.checked && f.checked){
      ans += ibm+full+meta;
    }
    else if(d.checked && e.checked && !f.checked){
      ans += ibm+full;
    }
    else if(d.checked && !e.checked && f.checked){
      ans += ibm+meta;
    }
    else if(!d.checked && e.checked && f.checked){
      ans += meta+full;
    }
    else if(d.checked && !e.checked && !f.checked){
      ans += ibm;
    }
    else if(!d.checked && e.checked && !f.checked){
      ans += full;
    }
    else if(!d.checked && !e.checked && f.checked){
      ans += meta;
    }
  }
  if(a.checked && d.checked){
    ans += ibm;
  }
  if(b.checked && f.checked){
    ans += meta;
  }
  if(c.checked && e.checked){
    ans += full;
  }
  text.innerHTML = ans;
}

function search(){
    var course = document.getElementById("input").value;
    course = course.toLowerCase();
    if(course === "meta"){
        text.innerHTML = "";
        text.innerHTML = meta0 + full1 + meta1;
    }
    else if(course === "ibm"){
        text.innerHTML = "";
        text.innerHTML = ibm0 + ibm2; 
    }
    else if(course === "johns hopkins"){
        text.innerHTML = "";
        text.innerHTML = full0;
    }
    else if(course === "google"){
      text.innerHTML = "";
      text.innerHTML = meta2;
    }
    else if(course === "University of Michigan"){
      text.innerHTML = "";
      text.innerHTML = ibm1;
    }
}