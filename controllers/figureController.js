const Figure = require("../models/Figure");

exports.getFigures = async (req, res) => {
  try {
    const figures = await Figure.find();
    res.json(figures);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addFigure = async (req, res) => {
  try {
    const newFigure = new Figure(req.body);
    const savedFigure = await newFigure.save();
    res.json(savedFigure);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFigureById = async (req, res) => {
  try {
    const figure = await Figure.findById(req.params.id);
    res.json(figure);
  } catch (err) {
    res.status(404).json({ error: "Figure not found" });
  }
};

exports.updateFigure = async (req, res) => {
  try {
    const updatedFigure = await Figure.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedFigure);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFigure = async (req, res) => {
  try {
    await Figure.findByIdAndDelete(req.params.id);
    res.json({ message: "Figure deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
