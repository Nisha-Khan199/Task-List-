  // selecting tags from html
  let inputs=document.querySelector("input");
  let btn=document.querySelector("button");
  let tasks=document.querySelector(".tasks");
  //adding onclick event using eventlistners
  btn.addEventListener('click',()=>{
    if(inputs.value===""){
        alert("Please Enter a task")
    }
    else{
        let newElm=document.createElement("ul");
        newElm.innerHTML=`   ${inputs.value}  <i class="fa-solid fa-trash-can"></i> `;
        tasks.appendChild(newElm);
        inputs.value="";
        // deleting the task when clicked in trash icon
        newElm.querySelector("i").addEventListener("click",() =>{
          newElm.remove();

        })

    }
  })
  