function getValueInputField(inputId) {
  const inputFieldText = document.getElementById(inputId);
  const inputFieldValue = parseFloat(inputFieldText.value);
  if (isNaN(inputFieldValue)) {
    alert("Invalid Input");
    return -5;
  }
  return inputFieldValue;
}

function showResult(showId, result) {
  const showField = document.getElementById(showId);
  showField.innerText = result;
}

function triangle() {
  const baseValue = getValueInputField("triangle-base");
  if (baseValue <= 0) {
    return;
  }
  const heightValue = getValueInputField("triangle-height");
  if (heightValue <= 0) {
    return;
  }
  const triangleResult = baseValue * heightValue;
  showResult("triangle-result-show", triangleResult);
}
function rectangle() {
  const baseValue = getValueInputField("rectangle-base");
  if (baseValue <= 0) {
    return;
  }
  const heightValue = getValueInputField("rectangle-height");
  if (heightValue <= 0) {
    return;
  }
  const rectangleResult = baseValue * heightValue;
  showResult("rectangle-result-show", rectangleResult);
}
function parallelogram() {
  const baseValue = getValueInputField("parallelogram-base");
  if (baseValue <= 0) {
    return;
  }
  const heightValue = getValueInputField("parallelogram-height");
  if (heightValue <= 0) {
    return;
  }
  const parallelogramResult = baseValue * heightValue;
  showResult("parallelogram-result-show", parallelogramResult);
}
