const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {
  let invalidLocation = false;
    if (location[0] > 2) {
        let invalidLocation = true;
    }

    if (invalidLocation === true) {
        console.log("This location is invalid");
    } else{
      console.log("this location is vaild")
    }
  }
