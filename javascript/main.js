//  

function sum (n1, n2) {
    document.write(n1 + n2);
}

// sum(30, 40);


var animal = [3,2,4,5,1,7,8,9];

// document.write(sum);

// var name ="abijith " ;
// var name2 = "chandrasenan"
// document.write(name.concat(name2))


// var button =document.getElementById("click");

// function green () {
//     button.style.backgroundColor= "green";
// }


// var text ="ABHIJITH";
//  document.write(text.toLowerCase());

// var num = [ 33, 44, 55, 66, 77, 88];

var a =Math.random();

var rounnded = math.floor(a*100);

document.write(rounnded);


                    // dom-document object model

    //   var num = document.getElementById("helloss");
    //     num.style.color ="red"




var heading = document.getElementById("head");
var button = document.getElementById("btn")

button.addEventListener("click", changecolor);
// heading.addEventListener("mouseover" , changecolor2);
// heading.addEventListener("mouseleave", changecolor3 )

function changecolor(){
  heading.style.color ="red";
}

// function changecolor2() {
//   heading.style.color ="blue"
// }

// function changecolor3() {
//   heading.style.color="white";
// }

// var employee = {
//   name : "abijith",
//   position:"accountant",
//   salary:10000,
//   getsalary: function() {
//     document.write("the salary of " +this.name+ " is " +this.salary);
//   }
// }
// employee.getsalary();

// class employee {
//   constructor(name, position, salary){
//     this.name=name;
//     this.position=position;
//     this.salary=salary;
//   }

//   getsalary(){
//     document.write("the salary of" + this.name+ "is" + this.salary);
//   }

// }

// let e1 = new employee("john", "engineer", 10001);
// e1.getsalary();


// class employee {
//   constructor(name, position, salary){
//     this.name =name;
//     this.position=position;
//     this.salary=salary;
//   }

//   getsalary(){
//     document.write("the salary of " + this.name+ " is "+ this.salary);
//   }
// }

// class cleaner extends employee {

// }

// let m1 =new employee("john", "software engineer", 100000);

// console.log(m1.name);
// var heading = document.getElementById("head");
// var button=document.getElementById("btn");


// button.addEventListener("click", changecolor);

// function changecolor(){
//   heading.style.color ="red";
// }

// var heading = document.getElementById("head");
// var button = document.getElementById("btn")

// button.addEventListener("click", changecolor);


// function changecolor(){
//   heading.style.color ="red";
// }

var heading = document.createElement("h1");

function create(){
  heading.innerHTML = "hello gaysss";
  document.body.appendChild(heading);
}

function remove(){
  heading.remove
}