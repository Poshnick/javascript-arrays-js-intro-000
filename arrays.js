var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return ["wispa", ...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  chocolateBars = ["wispa", ...chocolateBars];
}
