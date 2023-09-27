function concateObejct(arr1,arr2){
    for (let i=0;i<arr1.length;i++){
        for (let j=0;j<arr2.length;j++){
            //console.log(arr1[i].name);
            //console.log(arr2[j].name);
            if(arr1[i].name===arr2[j].name)
            {
                console.log(arr1[i].name);
                console.log(arr2[j].name);
                
            }
        }

    }
}

const arr1 = [
    { name: "Joe Brown", goals: 0, assists: 0, points: 0 },
    { name: "Jim Bob", goals: 2, assists: 1, points: 3 },
    { name: "Harry Styles", goals: 1, assists: 1, points: 2 },
    { name: "Craig Mack", goals: 5, assists: 7, points: 12 },
    { name: "Dog", bones: 100 }
  ];
  const arr2 = [
    {
      name: "Craig Mack",
      goals: 3,
      assists: 3,
      points: 6,
      ppg: 0,
      ppa: 0,
      pims: 0
    },
    { name: "Jim Bob", goals: 1, assists: 4, points: 5, ppg: 0, ppa: 1, pims: 0 },
    {
      name: "Joe Brown",
      goals: 0,
      assists: 0,
      points: 0,
      ppg: 0,
      ppa: 0,
      pims: 0
    },
    {
      name: "Harry Styles",
      goals: 0,
      assists: 0,
      points: 0,
      ppg: 0,
      ppa: 0,
      pims: 0
    }
  ];
  concateObejct(arr1,arr2);