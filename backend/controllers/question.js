const Question = require("../models/question");

exports.createQuesion = async (req, res) => {
  try {
    const question = await new Question(req.body).save();

    if (!question)
      return res.status(400).json({
        success: false,
        message: "Error creating in question",
      });

    return res.status(201).json({
      status: true,
      message: "Question created successfully",
      question,
    });
  } catch (err) {
    console.log("Error in creating questions ", err);

    return res.status(400).json({
      success: false,
      message: "Error creating in question",
      error: err.message,
    });
  }
};

exports.getQuestions = async (req, res) => {
  try {
    const { level } = req.params;
    const questions = await Question.find({ level });

    if (questions.length == 0)
      return res.status(200).json({
        success: false,
        message: "No Questions Found!",
      });

    return res.status(200).json({
      success: true,
      questions,
      count: questions.length,
    });
  } catch (error) {
    console.log(`Error while getting Questions ${error}`);
    return res.status(403).json({ success: false, error: error.message });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find({});

    if (questions.length == 0)
      return res.status(200).json({
        success: false,
        message: "No Questions Found!",
      });

    return res.status(200).json({
      success: true,
      questions,
    });
  } catch (error) {
    console.log(`Error while getting Questions ${error}`);
    return res.status(403).json({ success: false, error: error.message });
  }
};

// exports.updateQuestionById = (req, res, next) => async (id) => {
//   try {
//     await Question.findByIdAndUpdate(id, { ...req.body }, { new: true })
//       .then((question) => {
//         return res.json({ message: "Updated Successfully!", question });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   } catch (error) {
//     console.log(`Error While updating question by id:${error}`);
//     return res.status(401).send({ message: "Unauthorized" });
//   }
// };

// exports.deleteQuestionById = (req, res, next) => (id) => {
//   try {
//     Question.findByIdAndDelete(id)
//       .then(() => {
//         return res.status(200).json({
//           message: `Deleted successfully`,
//         });
//       })
//       .catch((err) => {
//         //  console.log("Error in deleting", err);
//         return res.status(500).json({
//           error: `Internal server Error`,
//           msg: "Something went wrong",
//         });
//       });
//   } catch (e) {
//     console.log("Error", e);
//     return res.status(500).json({
//       success: false,
//     });
//   }
// };

// exports.getQuestionsByCategory = async (req, res, next) => {
//   const category = req.params.category;
//   if (!category || !mongoose.Types.ObjectId.isValid(category))
//     throw new BadRequestException();
//   let questions = [];
//   try {
//     questions = await Question.find({ question_type: category });

//     return res.status(201).json({
//       data: {
//         questionList: questions,
//       },
//     });
//   } catch (error) {
//     next(new InternalServerErrorException());
//   }
// };
