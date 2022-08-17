class Controller {
  static loginPage(req, res) {
    res.render("loginPage");
  }

  static registerPage(req, res) {
    res.render("registerPage");
  }

  static dashboard(req, res) {}
}

module.exports = Controller;
