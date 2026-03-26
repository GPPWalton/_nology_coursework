const express = require("express");
const env = require("dotenv").config({ path: "../../.env" });
const api = express();
const cors = require("cors");
const { TodoModel } = require("./models/todo.model.js");
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;

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
//GET Request
api.get("/todo-list", async (req, res) => {
    const list = await TodoModel.find({}).exec();
    res.send(list);
});

//POST Request (add button)
api.post("/todo-list", async (req, res) => {
    const task = req.body.task;
    try {
        await TodoModel.create(task);
        res.send(`New task "${task.text}" added to todo-list`);
    } catch (error) {
        res.send("Something went wrong:", error);
    }
});

//DELETE Request - singular entry (delete button)
api.delete("/todo-list/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await TodoModel.deleteOne({ id: id }).exec();
    } catch (error) {
        res.send("Id of element is invalid", error);
    }
    todo_list.splice(index, 1);
    res.send(`item at ${id} has been deleted`);
});

//DELETE Request - all entries (reset button)
api.delete("/todo-list/clear", async (req, res) => {
    try {
        await TodoModel.deleteMany().exec();
    } catch (error) {
        res.send("Todo list cleared from the server");
    }
});

mongoose.connect(uri).then(() => {
    try {
        console.log("Connected to database.");
        api.listen(3000, () => {
            console.log("Todo-list API running on port 3000");
        });
    } catch (error) {
        console.error("An error occured: ", error);
    }
});
