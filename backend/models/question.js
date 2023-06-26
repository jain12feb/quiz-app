const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
      enum: ["easy", "moderate", "difficult"],
    },
    question: {
      type: String,
      required: true,
    },
    answers: [
      {
        _id: false,
        option: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
