let { User, Profile, Account } = require('../models');
const toRupiah = require('../helpers/toRupiah');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');

class Controller {
  static loginPage(req, res) {
    const { error } = req.query;
    res.render('loginPage', { error });
  }

  static loginPageHandler(req, res) {
    const { username, password } = req.body;
    User.findOne({
      include: [Profile, Account],
      where: { username },
    })
      .then((user) => {
        res.redirect('/users');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static landingPage(req, res) {
    res.render('landingPage');
  }

  static registerPage(req, res) {
    res.render('registerPage');
  }

  static registerPageHandler(req, res) {
    const { username, email, password } = req.body;
    User.create({
      username,
      email,
      password,
    })
      .then((result) => {
        res.redirect('/users');
      })
      .catch((err) => {
        if (err.name === 'SequelizeValidationError') {
          let error = err.errors.map((el) => {
            return el.message;
          });
          res.send(error);
        } else {
          res.send(err);
        }
      });
  }

  static userRender(req, res) {
    User.findAll()
      .then((result) => {
        res.render('userPage', { result });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static adminDashboard(req, res) {
    let { sort, search } = req.query;
    let option = {};
    if (sort) {
      option.order = [['name', 'ASC']];
    }

    if (search) {
      option.where = {
        name: {
          [Op.iLike]: `%${search}%`,
        },
      };
    }

    Profile.findAll(option)
      .then((profile) => {
        res.render('dashboard', { profile });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static accountDetail(req, res) {
    const { id } = req.params;
    Account.findOne({
      where: { id },
    })
      .then((detail) => {
        console.log(detail);
        res.render('accountDetails', { detail, toRupiah });
      })
      .catch((err) => {
        res.render(err);
      });
  }

  // static addProfileRender(req, res) {
  //   res.render('addUserForm');
  // }

  static editProfileRender(req, res) {
    let id = +req.params.id;
    Profile.findOne({
      where: {
        id,
      },
    })
      .then((result) => {
        // res.send(result);
        res.render('editUserPage', { result });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static editProfile(req, res) {
    let id = +req.params.id;

    let { name, address } = req.body;
    let editedUser = {
      name,
      address,
    };
    Profile.update(editedUser, {
      where: {
        id,
      },
    })
      .then((result) => {
        res.redirect('/profiles');
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static deleteProfile(req, res) {
    let id = +req.params.id;
    Profile.destroy({
      where: {
        id,
      },
    })
      .then((result) => {
        res.redirect('/profiles');
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
