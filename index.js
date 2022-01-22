//find value of inputs
const valueForCreate = document.querySelector("#valueForCreate");
const valueForUpdate = document.querySelector("#valueForUpdate");
const idForDelete = document.querySelector("#idForDelete");
const numberPageOfTask = document.querySelector("#numberPageOfTask");
const numberPageOfImg = document.querySelector("#numberPageOfImg");
const idForUpdateTask = document.querySelector("#idForUpdate");


//find buttons
const createTaskBt = document.querySelector("#createTaskBt");
const updateTaskBt = document.querySelector("#updateTaskBt");
const deleteTaskBt = document.querySelector("#deleteTaskBt");
const getTaskBt = document.querySelector("#getTaskBt");
const getImgBt = document.querySelector("#getImgBt");

//find inputs with results
const resultGetTask = document.querySelector("#resultGetTask");
const resultGetImg = document.querySelector("#resultGetImg");

//-------------------------add handlers---------------------------------


//----------------------------------------------------------------
//create main function for render tasks
const renderToTasks = ()=>{
    const promise = getTasks();
    promise
        .then(onTasksReceiveToCreateHtml);
}

//----------------------------------------------------------------


//create task
createTaskBt.addEventListener("click", () => {
    const promise = createTask(valueForCreate.value);
    promise
        .then(renderToTasks);
});



//------------------------------------------------------------------




//update task
updateTaskBt.addEventListener("click", () => {
    const promise = updateTask(valueForUpdate.value,idForUpdateTask.value);
    promise
        .then(renderToTasks);
});



//-------------------------------------------------------------------



//delete to task
deleteTaskBt.addEventListener("click", () => {
    const promise = deleteTask(idForDelete.value);
    promise
        .then(renderToTasks);
});



//----------------------------------------------------------------




//get tasks
getTaskBt.addEventListener("click", () => {
    const promise = getTasks(numberPageOfTask.value);
    promise
        .then(onTasksReceiveToCreateHtml);
});

//когда tasks получены,отрисуй разметку
const onTasksReceiveToCreateHtml = (data) => {
    resultGetTask.innerHTML = "";
    data.forEach(value => {
        const li = document.createElement("li");
        li.innerHTML = value.title;
        resultGetTask.appendChild(li);
    })
}



//------------------------------------------------------------------





//get images

getImgBt.addEventListener("click", () => {
    const promise = getImg(numberPageOfImg.value);
    promise
        .then(onImagesReceiveToCreateHtml);
});


//когда images получены,отрисуй разметку
const onImagesReceiveToCreateHtml = (data) => {
    data.forEach(value => {
        const img = document.createElement("img");
        img.src = value.thumbnail;
        resultGetImg.appendChild(img);
    })
}




//-------------------------------------------------------------------

