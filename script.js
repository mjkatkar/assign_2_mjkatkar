    function addHtmlTableRow()
    {
        var table = document.getElementById("table"),
        	newRow = table.insertRow(table.lenght),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            cell5 = newRow.insertCell(4),
            cell6 = newRow.insertCell(5),
            cell7 = newRow.insertCell(6),
            cell8 = newRow.insertCell(7),
			fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            mono = document.getElementById("mono").value,
            email = document.getElementById("email").value,
            seat = document.getElementById("seat").value,
            tick = document.getElementById("tick").value,
            pay = document.getElementById("pay").value,
            day = document.getElementById("day").value;
         
		var regArray = [];
		var regObj = {fname:fname,lname:lname,mono:mono,email:email,seat:seat,tick:tick,pay:pay,day:day};
		
		regArray.push(regObj);
		
        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = mono;
        cell4.innerHTML = email;
        cell5.innerHTML = seat;
        cell6.innerHTML = tick;
        cell7.innerHTML = pay;
        cell8.innerHTML = day;
    }
function resetForm() {
  document.getElementById("myform").reset();
}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}