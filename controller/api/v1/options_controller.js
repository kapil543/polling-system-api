const Options = require("../../../models/options");
const Question = require("../../../models/questions");

// ---------for deleting option---------->
module.exports.DeleteOption = async function (req, res) {
  try {
    const option = await Options.findById(req.params.id);
    option.remove();
    const post = await Question.findByIdAndUpdate(option.question, {
      $pull: { options: req.params.id },
    });
    return res.status(200).json({
      message: "option is deleted sucessfully!!!", 
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server problem" });
  }
};

//  --------------for adding vote to option---------->
module.exports.Addvote = async function (req, res) {
  try {
    const option = await Options.findById(req.params.id);
    option.votes += 1;
    option.save();
    return res.status(200).json({
      message: "voted up sucessfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "internal server problem" });
  }
};
