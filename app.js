setTimeout(() => {
  window.location.reload();
}
  , 200000);
const audio2 = document.getElementById("audio2");
const audio = document.getElementById("audio");

const section2 = document.querySelector(".second-sec");
const section1 = document.querySelector(".first-section");
const button = document.querySelector(".add");
const input = document.querySelector(".form-control");
const deleteBtn = document.querySelector(".delete");
// const icon1 = document.querySelector(".fa-trash");
const task = document.querySelector(".task");
const alert = document.querySelector(".alert");
const alert2 = 
`<div class="alert alert-dark alert-dismissible fade show" role="alert">
You should check in on some of those fields below.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`

alert.addEventListener("click", (e) => {
  e.target.classList.contains("btn-close")
  ? e.target.parentElement.remove() : null;
})

const ul = document.createElement("ul");
section1.appendChild(ul);

input.focus();

function ekle() {
  if (input.value == "") {
    alert.innerHTML = alert2;
  } 
  
  else {
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

// ? ADD TASK

button.addEventListener("click", ekle);

input.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    ekle();
    audio.play();
    audio.currentTime = 0;
    locked.setAttribute("class", "fa-solid fa-unlock-keyhole");

  }
});

function deleteAll() {
  if (ul.childElementCount > 0) {
    ul.removeChild(ul.lastElementChild);

    if (ul.childElementCount > 1) {
      task.innerHTML = `You have ${ul.childElementCount} tasks`;
    } else if (ul.childElementCount == 0) {
      task.innerHTML = `You have no tasks`;
    } else if (ul.childElementCount == 1) {
      task.innerHTML = `You have only a task`;
    }
  } else {
    alert("There is no task to delete");
  }
}

deleteBtn.addEventListener("click", deleteAll);

ul.addEventListener("click", (event) => {
  audio2.play();
  audio.currentTime = 0;

  if (event.target.classList.contains("x")) {
    if (ul.childElementCount > 1) {
      task.innerHTML = `You have ${ul.childElementCount} tasks`;
    } else if (ul.childElementCount == 0) {
      task.innerHTML = `You have no tasks`;
    } else if (ul.childElementCount == 1) {
      task.innerHTML = `You have only a task`;
    }

    event.target.parentElement.classList.add("animation");

    setTimeout(() => {
      event.target.parentElement.remove();
    }, 2000);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-circle-check")) {
    event.target.parentElement.innerHTML =
      "TASK COMPLETED !  DO YOU WANT TO DELETE IT PERMANENTLY ? <i class='fa-solid x fa-trash'></i>";
    event.target.parentElement.classList.add("liste");
  }
});

const clock = document.querySelector(".clock");

clock.innerHTML = `${new Date().toLocaleTimeString()}`;

const date = document.querySelector(".date");
date.innerHTML = `${new Date().toLocaleDateString()}`;

// ? PART OF AUDIO

deleteBtn.addEventListener("click", () => {
  audio2.play();
  audio.currentTime = 0;
});

// input.addEventListener("keydown", (e) => {
//   if(e.keyCode == 46){
//     deleteAll();
//   }
// })

button.addEventListener("click", () => {
  audio.play();
});

// ! PART OF LOCK

const locked = document.querySelector(".fa-lock");

button.addEventListener("click", () => {
  locked.setAttribute("class", "fa-solid fa-unlock-keyhole");
});

deleteBtn.addEventListener("click", () => {
  if (ul.childElementCount == 0) {
    locked.setAttribute("class", "fa-solid fa-lock");
  }
})
