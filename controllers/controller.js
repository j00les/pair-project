class Controller {
  static loginPage(req, res) {
    res.render("loginPage");
  }

  static registerPage(req, res) {
    res.render("registerPage");
  }
}

module.exports = Controller;
