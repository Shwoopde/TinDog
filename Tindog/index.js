// Remember to import the data and Dog class!

import dogsData from './data.js'
import Dog from './Dog.js'

let xButtonBoolean = false
let heartButtonBoolean = false
const xButton = document.getElementById("x-icon-link")
const heartButton = document.getElementById("heart-icon-links")
// ----------------------------------------------------------------
// function Dog(data) {
//     Object.assign(this, data)

//     this.getDogHtml = function () {
//         const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this
//         return `
//             <div class="image-and-info-container">
//                 <div class="profile-image" id="profile-image">
//                     <img src="${avatar}" alt="profile image">
//                 </div>
//                 <div class="profile-info">
//                     <h1 class="profile-name" id="profile-name">${name}</h1>,</h1>
//                     <h1 class="profile-age" id="profile-age">${age}</h1>
//                     <p class="profile-tagline" id="profile-tagline">${bio}</p>
//                 </div>
//                 <div class="yes-no-image-container">
//                     <div class="yes-image" id="yes-image">
//                         <img src="images/badge-like.png" alt="yes">
//                     </div>
//                     <div class="no-image" id="no-image">
//                         <img src="images/badge-nope.png" alt="no">
//                     </div>
//                 </div>
//             </div>
//         `
// }
// }

let dogArray = ["Rex", "Bella", "Teddy"]

function getNewDog(){
    const nextDogData = dogsData[dogArray.shift()]
    return nextDogData ? new Dog(nextDogData) : {}
}

function render(){
    document.getElementsByTagName("main").innerHTML = dogs.getDogHtml()
}

let dogs = getNewDog()
render()


// -----------------------------------------------------------------------
xButton.addEventListener("click", () => {
    if (xButtonBoolean === false) {
        console.log("x-button clicked")
        document.getElementById("x-icon").style.backgroundColor = "rgb(255, 105, 105, 0.35)"
        document.getElementById("no-image").style.display = "block"
        xButtonBoolean = true
        heartButton.disabled = true
        setTimeout(() => {
            document.getElementById("x-icon").style.backgroundColor = "transparent"
            document.getElementById("no-image").style.display = "none"
            xButtonBoolean = false
            heartButton.disabled = false
        }, 1500);
    }
    
})
heartButton.addEventListener("click", () => {
    if (heartButtonBoolean === false) {
        console.log("heart-button clicked")
        document.getElementById("heart-icon").style.backgroundColor = "rgb(127, 255, 144, .35)"
        document.getElementById("yes-image").style.display = "block"
        heartButtonBoolean = true
        xButton.disabled = true
        setTimeout(() => {
            document.getElementById("heart-icon").style.backgroundColor = "transparent"
            document.getElementById("yes-image").style.display = "none"
            heartButtonBoolean = false
            xButton.disabled = false
        }, 1500);
    }
    
})

