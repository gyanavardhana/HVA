/*
Define an array called tasks containing several objects, each representing a task in the to-do list. 
Each task object should have properties 
such as id, description, dueDate, status, and any other relevant details.
*/


const tasks = [
    {id: 1, description: 'Get groceries', duedate: '2021-09-30', status: false},
    {id: 2, description: 'Clean room', duedate: '2021-10-01', status: false},
    {id: 3, description: 'Do laundry', duedate: '2021-10-02', status: false},
    {id: 4, description: 'Study for exam', duedate: '2021-10-03', status: false},
]

/*
Create a class called Task to represent a task,
 and use this class to create objects for each task in the tasks array.
*/

class Task{
    constructor(id, description, duedate, status){
        this.id = id;
        this.description = description;
        this.duedate = duedate;
        this.status = status;
    }
}

/*
Define functions addTask() to add a new task, 
updateTask() to update an existing task, 
removeTask() to remove a task, and 
displayTasks() to display all tasks in the following format: TaskDescription - DueDate (Status).
*/


Task.prototype.addTask = function(id, description, duedate, status, tasks){
    let newTask = new Task(id, description, duedate, status);
    tasks.push(newTask);
}

Task.prototype.updateTask = function(id, description, duedate, status, tasks){
    let task = tasks.find(task => task.id === id);
    task.description = description;
    task.duedate = duedate;
    task.status = status;
}

Task.prototype.deleteTask = function(id, tasks){
    let index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
}

Task.prototype.displayTasks = function(tasks){
    tasks.forEach(task => {
        console.log(`${task.description} - ${task.duedate} - (${task.status})`);
    });
}


const newTask = new Task();

newTask.addTask(5, 'Go to the gym', '2021-10-04', false, tasks);
newTask.displayTasks(tasks);
newTask.updateTask(5, 'Go to the gym', '2021-10-04', true, tasks);
newTask.displayTasks(tasks);
newTask.deleteTask(5, tasks);
newTask.displayTasks(tasks);
