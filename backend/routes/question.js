const router = require("express").Router();
const {
  createQuesion,
  getQuestions,
  getAllQuestions,
} = require("../controllers/question");

router.post("/question", createQuesion);
router.get("/questions/:level", getQuestions);
router.get("/questions", getAllQuestions);

module.exports = router;
