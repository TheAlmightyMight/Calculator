export default function calculateWrapper(cb, str) {
  const calculationResult = cb(str);
  if (!sessionStorage.getItem("Calculations")) {
    const array = [calculationResult];
    sessionStorage.setItem("Calculations", JSON.stringify(array));
  } else {
    const previousCalculations = JSON.parse(
      sessionStorage.getItem("Calculations")
    );
    previousCalculations.push(calculationResult);
    sessionStorage.setItem(
      "Calculations",
      JSON.stringify(previousCalculations)
    );
  }

  return calculationResult;
}
