function distanceFromHqInBlocks(blockNumber) {
    let hqBlock = 42;
    return Math.abs(blockNumber - hqBlock);
  }

function distanceFromHqInFeet(blockNumber) {
    let hqBlock = 42;
    return Math.abs((blockNumber - hqBlock) * 264);
}

function distanceTravelledInFeet(startPoint, endPoint) {
    return Math.abs((startPoint - endPoint) * 264);
}

function calculatesFarePrice(startPoint, endPoint) {
    if (distanceTravelledInFeet(startPoint, endPoint) < 400) {
    return 0;}
    else if (distanceTravelledInFeet(startPoint, endPoint) <= 2000) {
    return (distanceTravelledInFeet(startPoint, endPoint) - 400) * 0.02;}
    else if (distanceTravelledInFeet(startPoint, endPoint) >= 2000 && distanceTravelledInFeet(startPoint, endPoint) <= 2500) {
    return 25;}
    else if (distanceTravelledInFeet(startPoint, endPoint) > 2500) {
    return 'cannot travel that far';}
}


//(age >= 18 && age <= 21)