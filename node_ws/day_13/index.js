const express = require("express");

const api = express();
const cors = require("cors");
api.use(express.json());
api.use(
    cors({
        origin: "http://localhost:5173", // Frontend origin
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);

//////////////////////////////
// toDo item : { id: number, text: string, isComplete: bool }
const todo_list = [
    {
        id: "19021996",
        text: "shenanigans",
        isComplete: false
    }
];
api.get("/todo-list", (req, res) => {
    res.send(todo_list);
});

api.post("/todo-list", (req, res) => {
    const task = req.body.task;

    todo_list.push(task);
    res.send(`New task "${task.text}" added to todo-list`);
});

api.delete("/todo-list/:id", (req, res) => {
    const id = req.params.id;
    const index = todo_list.findIndex(object => object.id === id);
    if (index < 0 || index > todo_list.length - 1) {
        res.send("Index of element is invalid");
    }
    todo_list.splice(index, 1);
    res.send(`item at ${id} has been deleted`);
});

api.listen(3000, () => {
    console.log("Todo-list API running on port 3000");
});
