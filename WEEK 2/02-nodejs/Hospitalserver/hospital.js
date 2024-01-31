const express = require('express');
const app = express();

app.use(express.json())
const users = [{
    name: "john",
    kidneys: [{
        healthy: true
    }, {
        healthy: false
    }]
}]

app.get('/', (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    const numberOfHealthyKidneys = johnKidneys.filter((kidney) => kidney.healthy).length;
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
});

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", (req, res) => {
    if (users[0].kidneys.filter((kidney => !kidney.healthy)).length === 0) {
        res.status(511).json({ msg: "No unhealthy kidneys" })
    }
    else {
        let kidneys = users[0].kidneys;
        users[0].kidneys = kidneys.map((kidney) => {
            if (!kidneys.healthy) {
                return {
                    healthy: true
                }
            }
        })
        res.json({
            msg: "Done!"
        })
    }

})

app.delete("/", (req, res) => {
    if (users[0].kidneys.filter((kidney => !kidney.healthy)).length === 0) {
        res.status(511).json({ msg: "No unhealthy kidneys" })
    }
    else {
        const johnKidneys = users[0].kidneys;
        users[0].kidneys = johnKidneys.filter((kidney => kidney.healthy));
        res.json({
            msg: "Done!"
        })
    }

})

app.listen(3000);