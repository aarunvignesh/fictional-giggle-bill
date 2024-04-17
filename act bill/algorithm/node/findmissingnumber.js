const findConflict = () => {

}

const findParkingSlotCount = (timeLog) => {
    let parking = [];
    timeLog.forEach((car) => {
      const index = parking.findIndex(parked_car => parked_car[0] < car[0] && parked_car[1] < car[1])
      index > -1 && parking.splice(index, 1)
      parking.push(car);
    })
    return parking.length;
}

const findParkingSlotCountV2 = (timeLog) => {
  let parking = []
  timeLog.sort((a,b) => a[0] - b[0])
  let left =0, right = 1;
  timeLog.map((car, index) => {
      if(index != 0){
        if(timeLog[index - 1][1] > car[0]){
          parking.push();
        }
      }
  })
}




const getSquareSum = (n) => JSON.stringify(n).split("").map(x => Math.pow(parseInt(x), 2)).reduce((a,b) => a+b, 0)

const isHappy = (n) => {
    
    const slow = getSquareSum(n)
    const fast = getSquareSum(slow)
    
    console.log(n, slow,fast);
    return slow === fast ? fast == 1 : isHappy(slow);
}


const wordBreak = (str, dict) => {
  let temp = str;
  dict.forEach(x => temp = temp.replace(new RegExp(x),""));
  console.log(temp);
  return temp.length === 0 ? true : false;
}
console.log(wordBreak("leet",["leet","code","quote"]));
console.log(findParkingSlotCount([[7,8],[9,11],[10,20],[12,13],[16,19],[15,18]]));
//console.log(isHappy(25));
//console.log(isHappy(19));

//console.log(findParkingSlotCountV2([[10,20],[12,13],[15,18],[9,11]]));