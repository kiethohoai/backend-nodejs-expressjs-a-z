const getHomepage = (req, res) => {
  res.render("home.ejs");
};

const getUsersPage = (req, res) => {
  res.send("This is Users Page");
};

module.exports = {
  getHomepage,
  getUsersPage,
};
