const returnFirstTwoDrivers = function(drivers) {
  const firstTwoDrivers = drivers.slice(0,2);
  return firstTwoDrivers;
  }

const returnLastTwoDrivers = function(drivers) {
  const lastTwoDrivers = drivers.slice(-2);
  return lastTwoDrivers;
  }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  const calculatedFare = function(fare){
  return (multiplier * fare);
  } 
  return calculatedFare;
}

const fareDoubler = function(fare) {
  const doubleFare = createFareMultiplier(2)(fare);
  return doubleFare;
}

const fareTripler = function(fare) {
  const tripleFare = createFareMultiplier(3)(fare);
  return tripleFare;
}

function selectDifferentDrivers(arrayOfDrivers, firstTwoDrivers, lastTwoDrivers) {
  if (firstTwoDrivers) {
    return firstTwoDrivers(arrayOfDrivers) 
  } else if (lastTwoDrivers) {
    return lastTwoDrivers(arrayOfDrivers)
  } else {
    console.log("Invalid function")
  }
}

