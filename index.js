document.addEventListener('DOMContentLoaded', onLoadContent)

function onClickYay() {
  console.log('clicked')
  }

  function onLoadContent() {
  document
  .getElementById('btn-yay')
  .addEventListener('click', onClickYay)

// This button should get value from yay input
// And then when we press the button we should add new li to
// our things list

    document
    .getElementById('yay-input')
    .addEventListener('keyup', keyInputAddItem) 
    let newItem= document.getElementById('yay-input').value;
    console.log("New list item", newItem);

  }
function keyInputAddItem (event) {
  console.log("Keyup input: ", this.value);
}

//object constructor

let arr = ["Settle the Horse", 2, 5.0, "Ride to Town", 5, 6, "Raise the Barn"]

let numbers = []

let content = []

for (var i = 0; i < arr.length; i++) {
  if(typeof arr[i] === 'string') {
    content.push(arr[i])
  } else if (typeof arr[i] === 'number') {
    numbers.push(arr[i])
  }
}

var ulList = document.getElementById('things-list')

for (var i = 0; i < content.length; i++) {
  let listItem = document.createElement('li')
  listItem.textContent = content[i]
  ulList.append(listItem)
}

// console.log means
// console is an object
// log is a method

// document.getElementById();
// constant NEVER CHANGES
// const PI = 3.14
// let is blocked scoped
// let travelTime = 30
// var is globally scoped
// var world = "world"
//termary operator
// let truth = true ? "do thing1" : "do thing2";
// let falsey = false;
// let arr = ["thing", 1, 2.0, [1, 2, 3]]
// console.log(arr)
// function name declaration
// function superAwesomeName () {
// console.log("Super Awesome Name")
//   }
//   superAwesomeName()
// let myFamilyPet = {
//   type : "bunny",
//   name : "moosie",
//   furColor : "black",
//   locomotion : function () {
//       return "hop hop hop"
//   },
// }
// console.log(myFamilyPet)
  // let arr = ["thing", 1, 2.0, [1, 2, 3]]
  // for (var i = 0; i < arr.length; i++) {
  //   arr[1]
  // }
