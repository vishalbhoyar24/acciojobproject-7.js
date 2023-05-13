let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap() {
    //Write your code here , just console.log
    arr.map(function(x){
        if(x.marks > 50){
            console.log(x);
        }
    })
  }
  
  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((y)=>{
        if(y.marks > 50){
            console.log(y);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let obj1 = {id:4,
        name:"susan",
        age:"20",
        marks:45
    }
    arr.push(obj1);
    console.log(arr);
  }
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let solution = arr.filter((x)=>{
        if(x.marks < 50){
            return x;
        }
    });
    console.log(solution);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newArr = [
        { id: 5, name: "jay", age: "16", marks: 67},
        { id: 6, name: "nikil", age: "12", marks: 72},
        { id: 7, name: "bablu", age: "55", marks: 75},
      ];
      let ans = arr.concat(newArr);
      console.log(ans);
  }