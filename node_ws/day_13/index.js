const express = require("express");
const env = require("dotenv").config({ path: "../../.env" });
const api = express();
const cors = require("cors");
const { TodoModel } = require("./models/todo.model.js");
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;

api.use(express.json());
api.use(
    cors({
        origin: "http://localhost:5173", // Frontend origin
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
);
/////////////////////
const testo = new TodoModel({
    id: Date.now(),
    text: "Test stuff",
    isComplete: false
});
// above works
mongoose.connect(uri).then(() => {
    try {
        console.log("Connected to database.");
    } catch (error) {
        console.error("An error occured: ", error);
    }
});
//test save data entry

//////////////////////////////
// toDo item : { id: number, text: string, isComplete: bool }
const todo_list = [];
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

api.delete("/todo-list/clear", (req, res) => {
    todo_list.splice(0, todo_list.length);
    res.send("Todo list cleared from the server");
});

api.listen(3000, () => {
    console.log("Todo-list API running on port 3000");
});
