// Code your solution in this file!
const returnFirstTwoDrivers = function(newArray){
    return newArray.slice(0,2);
}

const returnLastTwoDrivers = function(anotherArray){
    return anotherArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = multiplier => function(){
	return multiplier*multiplier
}
const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(arrayOfDrivers, blank){
    return blank(arrayOfDrivers)
}