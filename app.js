setTimeout(() => {
  window.location.reload();
}
, 30000);


const audio2 = document.getElementById("audio2");
const audio = document.getElementById("audio");









const section1 = document.querySelector(".first-section");
const button = document.querySelector(".add");
const input = document.querySelector(".form-control");
const deleteBtn = document.querySelector(".delete");
// const icon1 = document.querySelector(".fa-trash");
const task = document.querySelector(".task");

const ul = document.createElement("ul");
section1.appendChild(ul);

input.focus();

function ekle() {
  
  if (input.value == "") {
    alert("Please add a task ...");
  } else if (ul.childElementCount > 10) {
    alert("You can add only 10 tasks");
  } else {
    const li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${input.value} <i class="fa-solid x fa-trash"></i>`;
    input.value = "";
    input.focus();
    if (ul.childElementCount > 1) {
      task.innerHTML = `You have ${ul.childElementCount} tasks`;
    } else if (ul.childElementCount == 0) {
      task.innerHTML = `You have no tasks`;
    } else if (ul.childElementCount == 1) {
      task.innerHTML = `You have only a task`;
    }
  }
}



button.addEventListener("click", ekle);

input.addEventListener("keydown", (e) => {
  if (e.code == "Enter") {
    ekle();
  }
});






function deleteAll() {
  
  if (ul.childElementCount > 0) {
   
    ul.removeChild(ul.lastElementChild);
 
    
    if (ul.childElementCount > 1) {
      task.innerHTML = `You have ${ul.childElementCount} tasks`;
    }
    else if (ul.childElementCount == 0) {
      task.innerHTML = `You have no tasks`;
    }
    else if (ul.childElementCount == 1) {
      task.innerHTML = `You have only a task`;
    }



  
  } else {
    alert("There is no task to delete");
  }
  


}




deleteBtn.addEventListener("click", deleteAll);

ul.addEventListener("click", event => {



  if (event.target.classList.contains("x")) {


    if (ul.childElementCount > 1) {
      task.innerHTML = `You have ${ul.childElementCount} tasks`;
    }
    else if (ul.childElementCount == 0) {
      task.innerHTML = `You have no tasks`;
    }
    else if (ul.childElementCount == 1) {
      task.innerHTML = `You have only a task`;
    }



   
   

    event.target.parentElement.classList.add("animation")

    setTimeout(() => {
      event.target.parentElement.remove()

    }, 2000)
  }



})




ul.addEventListener("click", event => {

  if (event.target.classList.contains("fa-circle-check")) {

    event.target.parentElement.innerHTML = "TASK COMPLETED !  DO YOU WANT TO DELETE IT PERMANENTLY ? <i class='fa-solid x fa-trash'></i>"
    event.target.parentElement.classList.add("liste")


  }

})

const clock = document.querySelector(".clock");

clock.innerHTML = `${new Date().toLocaleTimeString()}`;


const date = document.querySelector(".date");
date.innerHTML = `${new Date().toLocaleDateString()}`;






deleteBtn.addEventListener("click" , () => {
  audio2.play();
})


button.addEventListener("click", () => {
  audio.play();
 
});