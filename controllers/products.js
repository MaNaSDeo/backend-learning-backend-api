const getAllProductsStatic = (req, res) => {
  throw new Error("Testing asyn errors");
  res.status(200).json({ Message: "Products Testing Route" });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ Message: "Products Route" });
};

module.exports = { getAllProductsStatic, getAllProducts };
