const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json())

app.get("/todos", (req, res) => {

    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err)
        }
        else {

            res.send(JSON.parse(data))
        }
    })

})

app.get("/todos/:id", (req, res) => {
    const id = req.params.id;
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err)
        }
        else {
            let todos = JSON.parse(data);

            if (!todos.some((todo) => todo.id == id)) {
                res.status(404).json({ msg: "Not Found" })
            }
            else {
                res.status(200).json(todos.find((todo) => todo.id == id));
            }
        }
    })

})


app.post("/todos", (req, res) => {
    let newTodo = {
        id: Math.floor(new Date().getTime() / 1000),
        title: req.body.title,
        description: req.body.description
    };
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err)
        }
        else {
            let todos = JSON.parse(data)
            todos.push(newTodo);
            
            fs.writeFile("./todos.json", JSON.stringify(todos), (err) => {
                if (err) {
                    console.error("Error writing JSON file:", err)
                }
                else {
                    res.status(201).json({ id: newTodo.id })
                }
            })
        }
    })

})


app.put("/todos/:id", (req, res) => {
    let id = req.params.id;
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err)
        }
        else {

            let todos = JSON.parse(data);
            let index = todos.findIndex((todo) => todo.id == id);
            if (index == -1) {
                res.status(404).json({ msg: "not found" })
            }
            else {
                todos[index] = {
                    ...todos[index],
                    description: req.body.description,
                    title: req.body.title
                }
                fs.writeFile('./todos.json', JSON.stringify(todos), (err)=>{
                    if (err) throw err;
                    else res.status(200).json(todos[index]);
                })
                
            }
        }
    })
    

})


app.delete("/todos/:id", (req, res) => {
    let id = req.params.id;
    fs.readFile("./todos.json", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading JSON file:", err)
        }
        else {
            let todos = JSON.parse(data)
            let index = todos.findIndex((todo) => todo.id == id);
            if (index == -1) {
                res.status(404).json({ msg: "not found" })
            }
            else {
                todos.splice(index, 1)
                fs.writeFile("./todos.json", JSON.stringify(todos), (err) => {
                    if (err) {
                        console.error("Error writing JSON file:", err)
                    }
                    else {
                        res.status(200).send("deleted")
                    }
                })
                
            }
            
        }
    })
    

})
app.use((req, res) => {
    res.status(404).send();
});

app.listen(3000)