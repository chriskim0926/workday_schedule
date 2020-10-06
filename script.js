$(document).ready(function () {

    // Show Current Date 
    function getDateContext() {
    var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";
    
    var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        
        var d = new Date();
        var n = month[d.getMonth()];
        var day = weekday[d.getDay()];
        var numDay = d.getDate();
        console.log(day + ", " +  n +" "+ numDay)
        document.getElementById("currentDay").innerHTML = day + ", " +  n +" "+ numDay;
      }
    
      getDateContext()

//Variables for the color change for each row
var dateObj = new Date ();
var currentTime = dateObj.getHours();
var hourPast = hourPast < currentTime;
var hourNow = currentTime;
var hourFuture = hourFuture < currentTime;
console.log(hourNow)
console.log(currentTime)
var rows9 = document.getElementById("9row");
var rowIdString9 = rows9.id
var rowValue9 = parseInt(rowIdString9);
console.log(rowValue9)
var rows10 = document.getElementById("10row");
var rowIdString10 = rows10.id
var rowValue10 = parseInt(rowIdString10);
console.log(rowValue10)
var rows11 = document.getElementById("11row");
var rowIdString11 = rows11.id
var rowValue11 = parseInt(rowIdString11);
console.log(rowValue11)
var rows12 = document.getElementById("12row");
var rowIdString12 = rows12.id
var rowValue12 = parseInt(rowIdString12);
console.log(rowValue12)
var rows13 = document.getElementById("13row");
var rowIdString13 = rows13.id
var rowValue13 = parseInt(rowIdString13);
console.log(rowValue13)
var rows14 = document.getElementById("14row");
var rowIdString14 = rows14.id
var rowValue14 = parseInt(rowIdString14);
console.log(rowValue14)
var rows15 = document.getElementById("15row");
var rowIdString15 = rows15.id
var rowValue15 = parseInt(rowIdString15);
console.log(rowValue15)
var rows16 = document.getElementById("16row");
var rowIdString16 = rows16.id
var rowValue16 = parseInt(rowIdString16);
console.log(rowValue16)
var rows17 = document.getElementById("17row");
var rowIdString17 = rows17.id
var rowValue17 = parseInt(rowIdString17);
console.log(rowValue17)


// Conditional Statement to change color accourding to current hours compare to schedule hours

if(currentTime == rowValue9){
    $("#9amInput").attr("style", "background-color: red")
  
}else if(currentTime > rowValue9){
    $("#9amInput").attr("style", "background-color: grey")

}else if(currentTime < rowValue9){
    $("#9amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue10){
    $("#10amInput").attr("style", "background-color: red")
    
}else if(currentTime > rowValue10){
    $("#10amInput").attr("style", "background-color: grey")
  
}else if(currentTime < rowValue10){
    $("#10amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue11){
    $("#11amInput").attr("style", "background-color: red")
   
}else if(currentTime > rowValue11){
    $("#11amInput").attr("style", "background-color: grey")

}else if(currentTime < rowValue11){
    $("#11amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue12){
    $("#12amInput").attr("style", "background-color: red")
   
}else if(currentTime > rowValue12){
    $("#12amInput").attr("style", "background-color: grey")
  
}else if(currentTime < rowValue12){
    $("#12amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue13){
    $("#13amInput").attr("style", "background-color: red")

}else if(currentTime > rowValue13){
    $("#13amInput").attr("style", "background-color: grey")
   
}else if(currentTime < rowValue13){
    $("#13amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue14){
    $("#14amInput").attr("style", "background-color: red")
   
}else if(currentTime > rowValue14){
    $("#14amInput").attr("style", "background-color: grey")
    
}else if(currentTime < rowValue14){
    $("#14amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue15){
    $("#15amInput").attr("style", "background-color: red")
 
}else if(currentTime > rowValue15){
    $("#15amInput").attr("style", "background-color: grey")
   
}else if(currentTime < rowValue15){
    $("#15amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue16){
    $("#16amInput").attr("style", "background-color: red")
  
}else if(currentTime > rowValue16){
    $("#16amInput").attr("style", "background-color: grey")
  
}else if(currentTime < rowValue16){
    $("#16amInput").attr("style", "background-color: lightgreen")
}

if(currentTime == rowValue17){
    $("#17amInput").attr("style", "background-color: red")
    
}else if(currentTime > rowValue17){
    $("#17amInput").attr("style", "background-color: grey")

}else if(currentTime < rowValue17){
    $("#17amInput").attr("style", "background-color: lightgreen")
}

//Button to disable or enable Text input Field

var input9 = document.getElementById("9amInput")
var input10 = document.getElementById("10amInput") 
var input11 = document.getElementById("11amInput") 
var input12 = document.getElementById("12amInput") 
var input13 = document.getElementById("13amInput") 
var input14 = document.getElementById("14amInput") 
var input15 = document.getElementById("15amInput") 
var input16 = document.getElementById("16amInput") 
var input17 = document.getElementById("17amInput") 
var button9 = $('#9amInput');
var button10 = $('#10amInput');
var button11 = $('#11amInput');
var button12 = $('#12amInput');
var button13 = $('#13amInput');
var button14 = $('#14amInput');
var button15 = $('#15amInput');
var button16 = $('#16amInput');
var button17 = $('#17amInput');

// click function 
$('#9amButton').click(function() {
    if ($(button9).attr('disabled')) $(button9).removeAttr('disabled');
    else $(button9).attr('disabled', 'disabled');
    var input9 = document.getElementById("9amInput") 
    localStorage.setItem("9amInput",input9.value)
    console.log(input9.value)
});

})