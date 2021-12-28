// This function means that these functions run on the loading or opening of the window.

window.onload = function () {
  changeColour();
  saveNine();
  saveTen();
  saveEleven();
  saveTwelve();
  saveThirteen();
  saveFourteen();
  saveFifteen();
  saveSixteen();
  saveSeventeen();
};

// This uses moment.js to give the date, the brackets can be amended to whatever date format you choose.
// The below uses moment.js to record the current time in to a variable

const clockContainer = $("#clock");

const onReady = function () {
  const timerTick = function () {
    // Sunday, 17th October, 2021 13:27:25
    const dateTime = moment();
    const dateTimeFormatted = dateTime.format("dddd Do MMMM YYYY kk:mm:ss");

    clockContainer.text(dateTimeFormatted);
  };

  const timer = setInterval(timerTick, 1000);
};

$(document).ready(onReady);

const currentTime = moment().format("H");

// the function below uses the variable above, along with if and else statements to change the colour of the time block for that day.
// This is then repeated for each time of the day
// The function below will change the colours of the hours of the day depending on the current time
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
// function below will save the input in local storage and keep it there even if the page is refreshed or closed and reopened
// This function is run when the page opens to ensure that data loads as soon as the page is refreshed or opened.
function saveNine() {
  // the below takes the ID for the input field and holds them in variables
  // please note the input and output are saved as the same variable as this will hold the same information and the information will
  // be put back into the same input field.

  const input_9 = document.querySelector("#Text9");
  const output_9 = document.querySelector("#Text9");
  const save_button9 = document.querySelector("#saveBtn9");

  //   the below waits for the click and runs the function to update the input field
  save_button9.addEventListener("click", updateOutput9);

  //   The below holds the text content and values of the input field and saves this in the local storage
  output_9.textContent = localStorage.getItem("content");
  input_9.value = localStorage.getItem("content");

  // this function is used to return the value of the input field, that has been stored in the local storage, back to the input field.
  function updateOutput9() {
    localStorage.setItem("content", input_9.value);

    output_9.textContent = input_9.value;
  }
}
// Please note the above function has been run with each time block below:

function saveTen() {
  const input_10 = document.querySelector("#Text10");
  const output_10 = document.querySelector("#Text10");
  const save_button10 = document.querySelector("#saveBtn10");

  save_button10.addEventListener("click", updateOutput10);

  output_10.textContent = localStorage.getItem("content10");
  input_10.value = localStorage.getItem("content10");

  function updateOutput10() {
    localStorage.setItem("content10", input_10.value);

    output_10.textContent = input_10.value;
  }
}

function saveEleven() {
  const input_11 = document.querySelector("#Text11");
  const output_11 = document.querySelector("#Text11");
  const save_button11 = document.querySelector("#saveBtn11");

  save_button11.addEventListener("click", updateOutput11);

  output_11.textContent = localStorage.getItem("content11");
  input_11.value = localStorage.getItem("content11");

  function updateOutput11() {
    localStorage.setItem("content11", input_11.value);

    output_11.textContent = input_11.value;
  }
}

function saveTwelve() {
  const input_12 = document.querySelector("#Text12");
  const output_12 = document.querySelector("#Text12");
  const save_button12 = document.querySelector("#saveBtn12");

  save_button12.addEventListener("click", updateOutput12);

  output_12.textContent = localStorage.getItem("content12");
  input_12.value = localStorage.getItem("content12");

  function updateOutput12() {
    localStorage.setItem("content12", input_12.value);

    output_12.textContent = input_12.value;
  }
}

function saveThirteen() {
  const input_13 = document.querySelector("#Text13");
  const output_13 = document.querySelector("#Text13");
  const save_button13 = document.querySelector("#saveBtn13");

  save_button13.addEventListener("click", updateOutput13);

  output_13.textContent = localStorage.getItem("content13");
  input_13.value = localStorage.getItem("content13");

  function updateOutput13() {
    localStorage.setItem("content13", input_13.value);

    output_13.textContent = input_13.value;
  }
}

function saveFourteen() {
  const input_14 = document.querySelector("#Text14");
  const output_14 = document.querySelector("#Text14");
  const save_button14 = document.querySelector("#saveBtn14");

  save_button14.addEventListener("click", updateOutput14);

  output_14.textContent = localStorage.getItem("content14");
  input_14.value = localStorage.getItem("content14");

  function updateOutput14() {
    localStorage.setItem("content14", input_14.value);

    output_14.textContent = input_14.value;
  }
}

function saveFifteen() {
  const input_15 = document.querySelector("#Text15");
  const output_15 = document.querySelector("#Text15");
  const save_button15 = document.querySelector("#saveBtn15");

  save_button15.addEventListener("click", updateOutput15);

  output_15.textContent = localStorage.getItem("content15");
  input_15.value = localStorage.getItem("content15");

  function updateOutput15() {
    localStorage.setItem("content15", input_15.value);

    output_15.textContent = input_15.value;
  }
}

function saveSixteen() {
  const input_16 = document.querySelector("#Text16");
  const output_16 = document.querySelector("#Text16");
  const save_button16 = document.querySelector("#saveBtn16");

  save_button16.addEventListener("click", updateOutput16);

  output_16.textContent = localStorage.getItem("content16");
  input_16.value = localStorage.getItem("content16");

  function updateOutput16() {
    localStorage.setItem("content16", input_16.value);

    output_16.textContent = input_16.value;
  }
}

function saveSeventeen() {
  const input_17 = document.querySelector("#Text17");
  const output_17 = document.querySelector("#Text17");
  const save_button17 = document.querySelector("#saveBtn17");

  save_button17.addEventListener("click", updateOutput17);

  output_17.textContent = localStorage.getItem("content17");
  input_17.value = localStorage.getItem("content17");

  function updateOutput17() {
    localStorage.setItem("content17", input_17.value);

    output_17.textContent = input_17.value;
  }
}
