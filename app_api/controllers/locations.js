var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.locationsListByDistance = function (req, res) {
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsCreate = function (req, res) {
  Loc.create({
    name: req.body.name,
    address: req.body.address,
    facilities: (!req.body.facilities ? null : req.body.facilities.split(",")),
    coords: [parseFloat(req.body.lng),parseFloat(req.body.lat)],
    openingTimes: [{
      days: req.body.days1,
      opening: req.body.opening1,
      closing: req.body.closing1,
      closed: req.body.closed1,
    },{
      days: req.body.days2,
      opening: req.body.opening2,
      closing: req.body.closing2,
      closed: req.body.closed2,
    }]
  }, function(err, location) {
    if (err) {
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, location);
    }
  });
};

module.exports.locationsReadOne = function (req, res) {
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if (!location) {
          sendJsonResponse(res, 404, {
            'message' : 'locationid not found'
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        sendJsonResponse(res, 200, location);
      });
  } else {
    sendJsonResponse(res, 404, {
      'message': 'No locationid in request'
    })
  }
};

module.exports.locationsUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, {'status' : 'success'});
};

module.exports.locationsDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, {'status' : 'success'});
};