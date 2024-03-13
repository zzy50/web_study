var heading = document.getElementById('myHeading');
var computedStyle = window.getComputedStyle(heading);

// var fontFamily = computedStyle.getPropertyValue('font-family');
// document.getElementById('fontOutput').textContent = "Font: " + fontFamily;
var fontFamilyList = computedStyle.getPropertyValue('font-family').split(',');
document.getElementById('fontOutput').textContent = "Possible Font: " + fontFamilyList[0].trim();