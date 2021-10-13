// timer
$("#currentDay").text(moment().format("dddd, Do  MMMM YYYY, H:mm:ss"));

const currentTime = moment().format("H");
console.log(currentTime);

function changeColour() {
  // 9 AM
  if (currentTime > 9) {
    $("#9AM").addClass("past");
  } else if (currentTime >= 9 && currentTime < 10) {
    $("#9AM").addClass("present");
  } else if (currentTime < 9) {
    $("#9AM").addClass("future");
  }
  // 10 AM
  if (currentTime > 10) {
    $("#10AM").addClass("past");
  } else if (currentTime >= 10 && currentTime < 11) {
    $("#10AM").addClass("present");
  } else if (currentTime < 10) {
    $("#10AM").addClass("future");
  }
  // 11 AM
  if (currentTime > 11) {
    $("#11AM").addClass("past");
  } else if (currentTime >= 11 && currentTime < 12) {
    $("#11AM").addClass("present");
  } else if (currentTime < 11) {
    $("#11AM").addClass("future");
  }
  // 12 PM
  if (currentTime > 12) {
    $("#12PM").addClass("past");
  } else if (currentTime >= 12 && currentTime < 13) {
    $("#12PM").addClass("present");
  } else if (currentTime < 12) {
    $("#12PM").addClass("future");
  }
  // 13 PM
  if (currentTime > 13) {
    $("#13PM").addClass("past");
  } else if (currentTime >= 13 && currentTime < 14) {
    $("#13PM").addClass("present");
  } else if (currentTime < 13) {
    $("#13PM").addClass("future");
  }
  // 14PM
  if (currentTime > 14) {
    $("#14PM").addClass("past");
  } else if (currentTime >= 14 && currentTime < 15) {
    $("#14PM").addClass("present");
  } else if (currentTime < 14) {
    $("#14PM").addClass("future");
  }
  // 15 PM
  if (currentTime > 15) {
    $("#15PM").addClass("past");
  } else if (currentTime >= 15 && currentTime < 16) {
    $("#15PM").addClass("present");
  } else if (currentTime < 15) {
    $("#15PM").addClass("future");
  }
  // 16 PM
  if (currentTime > 16) {
    $("#16PM").addClass("past");
  } else if (currentTime >= 16 && currentTime < 17) {
    $("#16PM").addClass("present");
  } else if (currentTime < 16) {
    $("#16PM").addClass("future");
  }
  // 17 PM
  if (currentTime > 17) {
    $("#17PM").addClass("past");
  } else if (currentTime >= 17 && currentTime < 18) {
    $("#17PM").addClass("present");
  } else if (currentTime < 17) {
    $("#17PM").addClass("future");
  }
}
