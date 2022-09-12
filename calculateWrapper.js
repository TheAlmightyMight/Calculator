export default function calculateWrapper(cb, str) {
  const calculationResult = cb(str);
  if (!sessionStorage.getItem("Calculations")) {
    const arrayOfResults = [calculationResult];
    const arrayOfHistory = [str];
    sessionStorage.setItem("Calculations", JSON.stringify(arrayOfResults));
    sessionStorage.setItem("Calculations", JSON.stringify(arrayOfHistory));
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
