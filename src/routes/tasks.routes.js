const { Router } = require("express");

const router = Router();

router.get("/tasks", (req, resp) => {
  resp.send("Hello World");
});

module.exports = router;
