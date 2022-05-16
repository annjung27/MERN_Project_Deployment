// import the controller
const Story = require("../controllers/story.controllers");


// add routes for each CRUD method
module.exports = (app) => {
    app.get("/api/stories", Story.findAll)
    app.post("/api/stories", Story.create)
    app.get("/api/stories/:id", Story.findOne)
    app.put("/api/stories/:id", Story.update)
    app.delete("/api/stories/:id", Story.delete)    
}