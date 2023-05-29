const Question = require("../../../models/questions");
const Options = require("../../../models/options");

// ----------for creating question------>
module.exports.Create = async function (req, res) {
  try {
    const question = await Question.findOne({ title: req.body.title });
    if (!question) {
      const newQuestion = await Question.create(req.body);

      return res.status(200).json({
        message: "successfully added a question",
        question: newQuestion,
      });
    } else {
      return res.status(400).json({
        message: "dulicate question is not allowed",
      });
    }
  } catch (error) {
    console.log("error while making a question -->> ", error);
    return res.status(500).json({
      message: "intenal server problem",
    });
  }
};

//-----------  for geting question----->
module.exports.Fetch = async function (req, res) {
  try {
    const question = await Question.findById(req.params.id).populate({
      path: "options",
    });
    return res.status(200).json({
      question: question,
    });
  } catch (error) {
    console.log("error while fetching the question ", error);
    return res.status(500).json({
      message: "internal server problem",
    });
  }
};

// --------for deleting question---->
module.exports.Delete = async function (req, res) {
  try {
    const question = await Question.findByIdAndDelete(req.params.id);
    return res.status(200).json({
      message: "deleted the question sucessfully",
    });
  } catch (error) {
    console.log("error while deleting the question ", error);
    return res.status(500).json({
      message: "internal server problem",
    });
  }
};

// ----------for creating option---------->
module.exports.CreateOption = async function (req, res) {
  try {
    let question = await Question.findById(req.params.id);
    if (question) {
      let option = await Options.create({
        text: req.body.text,
        votes: req.body.votes,
        question: req.params.id,
      });
      option.link_to_vote =
        "http://localhost:8000/api/v1/options/" + option.id + "/add_vote"; //uncomment this for localhost

      option.save();
      question.options.push(option);
      question.save();
      return res.status(200).json({
        message: "added the options to the question sucessfully !!!",
      });
    }
  } catch (err) {
    console.log("error while creating a option ", err);
    return res.status(500).json({
      message: "internal server problem",
    });
  }
};
