export default function calculateWrapper(cb, str) {
  const calculationResult = cb(str);
  if (!sessionStorage.getItem("Calculations")) {
    const arrayOfResults = [calculationResult];
    const arrayOfHistory = [str];
    sessionStorage.setItem("Calculations", JSON.stringify(arrayOfResults));
    sessionStorage.setItem("Operations", JSON.stringify(arrayOfHistory));
  } else {
    const previousOperations = JSON.parse(sessionStorage.getItem("Operations"));
    const previousCalculations = JSON.parse(
      sessionStorage.getItem("Calculations")
    );
    previousOperations.push(str);
    previousCalculations.push(calculationResult);
    sessionStorage.setItem("Operations", JSON.stringify(previousOperations));
    sessionStorage.setItem(
      "Calculations",
      JSON.stringify(previousCalculations)
    );
  }

  return calculationResult;
}
