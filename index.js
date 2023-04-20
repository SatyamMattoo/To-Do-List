const title = document.getElementById("task");
const description = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

showAlltask();

function showAlltask(){
    tasks.forEach((value,index)=>{
        const div= document.createElement("div");
        div.setAttribute("class","task");

        const innerDiv =document.createElement("div")
        div.append(innerDiv);

        const p= document.createElement("p");
        p.innerText= value.title;

        const spam= document.createElement("span");
        spam.innerText= value.description;

        innerDiv.append(p);
        innerDiv.append(spam);
        
        const button=document.createElement("button");
        button.setAttribute("id", "delete")

        button.innerText= "-"
        button.addEventListener("click",()=>{
            removeTask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            showAlltask();
        });

        div.append(button);
        container.append(div);
    })
}


function  removeTask()
{
    tasks.forEach((value)=>{
        const div =document.querySelector(".task");
        div.remove();
    })
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    removeTask();
    tasks.push({
        title: title.value,
        description: description.value,
    });
    localStorage.setItem("tasks",JSON.stringify(tasks));
    showAlltask();
})



