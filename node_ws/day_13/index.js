const express = require("express");

const api = express();
api.use(express.json());
//root handler
api.get("/", (req, res) => {
    res.send("Hello World!");
});
api.post(`/`, (req, res) => {
    const body = req.body;
    res.send("Post Request Success!");
    console.log(`body here: ${body.message})}`);
});

//////////////////////////////
const tasks = [
    "Learn Rust",
    "Learn Scala",
    "Make a TTRPG adventure",
    "Drawing practice"
];
api.get("/tasks", (req, res) => {
    res.send(tasks);
});
api.get("/tasks/:id", (req, res) => {
    const id = req.params.id;
    if (id < 0 || id > tasks.length) {
        res.send(`Please enter an id between 0 and ${tasks.length}.`);
    } else {
        res.send(tasks[id]);
    }
});
api.post("/tasks", (req, res) => {
    const task = req.body.task;

    tasks.push(task);
    res.send(`New task "${task}" added to tasks`);
});

api.listen(3000, () => {
    console.log("API running on port 3000");
});
