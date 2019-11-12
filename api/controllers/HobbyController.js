/**
 * SensorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  anime: function (req, res) {
    var socket = req.socket;
    var io = sails.io;

    var data = { message: "connected" };

    return res.view(data);
  },

  anime_detail: function (req, res) {
    var socket = req.socket;
    var io = sails.io;

    var data = {
      message: "connected",
      animesearch: req.query.search
    };

    return res.view(data);
  },

  manga: function (req, res) {
    var socket = req.socket;
    var io = sails.io;

    var data = { message: "connected" };

    return res.view(data);
  },

};

