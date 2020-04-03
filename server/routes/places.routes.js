const placeControl = require('../controllers/places.controller')

module.exports = app => {
    app.get("/api/places", placeControl.getAll),
    app.post("/api/places/add", placeControl.addPlace),
    app.delete("/api/places/:id", placeControl.delete)
}