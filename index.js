document.querySelector("#push").addEventListener("click", function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += `
    <div class="task"> 
        <span>
            ${document.querySelector("#newtask input").value}
        </span>
            <button class="delete">&#128465;</button>
    </div>
      `;
    document.querySelector("#newtask input").value = "";
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].addEventListener("click", function () {
        this.parentElement.remove();
      });
    }

    var tasks = document.querySelectorAll(".task span");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].addEventListener("click", function () {
        this.style.textDecoration = "line-through";
      });
    }
  }
});
