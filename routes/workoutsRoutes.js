const db = require("../models");
const router = require("express").Router();

//create workout
router.post("/api/workouts", (req, res) => {
  db.workouts.create(req.body).then(results => {
    res.json(results);
  });
});
//read for all workouts
router.get("/api/workouts", (req, res) => {
  db.workouts.findAll().then(results => {
    res.json(results);
  });
});
//read workouts based on category
router.get("/api/workouts/:category", (req, res) => {
  db.workouts
    .findAll({ where: { category: req.params.category } })
    .then(results => {
      res.json(results);
    });
});

//update personal workout
router.put("api/workouts/:id", (req, res) => {
  db.workouts
    .update(
      {
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
      },
      { where: { id: req.params.id } }
    )
    .then(results => {
      res.json(results);
    });
});

module.exports = router;