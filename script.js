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
var locked9 = $('#unlocked9');

// click function 
$('#9amButton').click(function() {
    if ($(button9).attr('disabled')) $(button9).removeAttr('disabled');
    else $(button9).attr('disabled', 'disabled');
    var input9 = document.getElementById("9amInput") 
    localStorage.setItem("9amInput",input9.value)
    console.log(input9.value)
});
$('#10amButton').click(function() {
    if ($(button10).attr('disabled')) $(button10).removeAttr('disabled');
    else $(button10).attr('disabled', 'disabled');
    var input10 = document.getElementById("10amInput") 
    localStorage.setItem("10amInput",input10.value)
    console.log(input10.value)
});
$('#11amButton').click(function() {
    if ($(button11).attr('disabled')) $(button11).removeAttr('disabled');
    else $(button11).attr('disabled', 'disabled');
    var input11 = document.getElementById("11amInput") 
    localStorage.setItem("11amInput",input11.value)
    console.log(input11.value)
});
$('#12amButton').click(function() {
    if ($(button12).attr('disabled')) $(button12).removeAttr('disabled');
    else $(button12).attr('disabled', 'disabled');
    var input12 = document.getElementById("12amInput") 
    localStorage.setItem("12amInput",input12.value)
    console.log(input12.value)
});
$('#13amButton').click(function() {
    if ($(button13).attr('disabled')) $(button13).removeAttr('disabled');
    else $(button13).attr('disabled', 'disabled');
    var input13 = document.getElementById("13amInput") 
    localStorage.setItem("13amInput",input13.value)
    console.log(input13.value)
});
$('#14amButton').click(function() {
    if ($(button14).attr('disabled')) $(button14).removeAttr('disabled');
    else $(button14).attr('disabled', 'disabled');
    var input14 = document.getElementById("14amInput") 
    localStorage.setItem("14amInput",input14.value)
    console.log(input14.value)
});
$('#15amButton').click(function() {
    if ($(button15).attr('disabled')) $(button15).removeAttr('disabled');
    else $(button15).attr('disabled', 'disabled');
    var input15 = document.getElementById("15amInput") 
    localStorage.setItem("15amInput",input15.value)
    console.log(input15.value)
});
$('#16amButton').click(function() {
    if ($(button16).attr('disabled')) $(button16).removeAttr('disabled');
    else $(button16).attr('disabled', 'disabled');
    var input16 = document.getElementById("16amInput") 
    localStorage.setItem("16amInput",input16.value)
    console.log(input16.value)
});
$('#17amButton').click(function() {
    if ($(button17).attr('disabled')) $(button17).removeAttr('disabled');
    else $(button17).attr('disabled', 'disabled');
    var input17 = document.getElementById("17amInput") 
    localStorage.setItem("17amInput",input17.value)
    console.log(input17.value)
});


  // Local Storage to continue to keep My current schedule 
  var input9Text = localStorage.getItem("9amInput")
  var input9 = document.getElementById("9amInput")
  input9.value = input9Text
  var input10Text = localStorage.getItem("10amInput")
  var input10 = document.getElementById("10amInput")
  input10.value = input10Text
  var input11Text = localStorage.getItem("11amInput")
  var input11 = document.getElementById("11amInput")
  input11.value = input11Text
  var input12Text = localStorage.getItem("12amInput")
  var input12 = document.getElementById("12amInput")
  input12.value = input12Text
  var input13Text = localStorage.getItem("13amInput")
  var input13 = document.getElementById("13amInput")
  input13.value = input13Text
  var input14Text = localStorage.getItem("14amInput")
  var input14 = document.getElementById("14amInput")
  input14.value = input14Text
  var input15Text = localStorage.getItem("15amInput")
  var input15 = document.getElementById("15amInput")
  input15.value = input15Text
  var input16Text = localStorage.getItem("16amInput")
  var input16 = document.getElementById("16amInput")
  input16.value = input16Text
  var input17Text = localStorage.getItem("17amInput")
  var input17 = document.getElementById("17amInput")
  input17.value = input17Text 



  
})



