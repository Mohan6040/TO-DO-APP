// document.querySelector("#push").onclick = function () {
//     var taskInput = document.querySelector("#newtask input");
//     if (taskInput.value.trim().length === 0) {
//       alert("Please enter a task");
//     } else {
//       document.querySelector("#tasks").innerHTML += `
//         <div class="task">
//           <span class="taskname">
//             ${taskInput.value}
//           </span>
//           <button class="delete">
//             <i class="fas fa-trash-alt"></i>
//           </button>
//         </div>
//       `;
//       taskInput.value = "";
  
//       var currentTasks = document.querySelectorAll(".delete");
//       for (var i = 0; i < currentTasks.length; i++) {
//         currentTasks[i].onclick = function () {
//           this.parentNode.remove();
//         };
//       }
  
//       var tasks = document.querySelectorAll(".task");
//       for (var i = 0; i < tasks.length; i++) {
//         tasks[i].onclick = function () {
//           this.classList.toggle('completed');
//         };
//       }
//       document.querySelector("#newtask input").valu="";
//     }
//   };
  