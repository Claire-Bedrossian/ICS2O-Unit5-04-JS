// Copyright (c) 2022 Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: Nov 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-04-JS/sw.js", {
    scope: "/ICS2O-Unit5-04-JS/",
  })
}

/**
 * This function will determine if the user is eligble for student pricing.
 */
function myButtonClicked() {
  var age = parseFloat(document.getElementById("age-number").value)
  var thursday = document.getElementById("thursday").checked
  var tuesday = document.getElementById("tuesday").checked

  if ( tuesday == true || thursday == true || (age > 12 && age < 21)) {
    document.getElementById("ticket-pricing").innerHTML =
      "<p>You are legible for student pricing.</p>"
  } else {
    document.getElementById("ticket-pricing").innerHTML =
      "<p>You are not legible for student pricing.</p>"
  }
}
