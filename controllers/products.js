const getAllProductsStatic = (req, res) => {
  res.status(200).json({ Message: "Products Testing Route" });
};

const getAllProducts = (req, res) => {
  res.status(200).json({ Message: "Products Route" });
};

module.exports = { getAllProductsStatic, getAllProducts };
