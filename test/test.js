const mocha = require('mocha');
const chai = require('chai');
const chaiHttp = require('chai-http');
// const nock = require('nock');
const app = require('../app');

const should = chai.should();
const assert = chai.assert;

chai.use(chaiHttp);

describe('app.js', function () {
  describe('GET /invalid', function() {
    it('should deny get request to invalid endpoint', function(done) {
      chai.request(app)
      .get('/invalid')
      .end((err, res) => {
        // console.log('err', err)
        // console.log('res.body', res.body)
        // console.log('res.text', res.text)
        
        should.not.exist(err); //FIXME
        res.should.have.status(404);
        res.body.should.to.deep.equal({}); // FIXME:
        done();
      });
    })
  })
})
describe('locations controller', function () {
  describe('GET /', function() {
    it('should allow get request w/ no params', function(done) {
      chai.request(app)
      .get('/')
      .end((err, res) => {              
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.to.deep.equal({});
        // FIXME:
        res.text.should.equal('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Home</title><link rel="stylesheet" href="/bootstrap/css/amelia.bootstrap.css"><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Loc8r</a><button type="button" data-toggle="collapse" data-targer="#navbar-main" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div id="navbar-main" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/about/">About</a></li></ul></div></div></div><div class="container"><div id="banner" class="page-header"><div class="row"><div class="col-lg-6"><h1>Loc8r<email>&nbsp;Find places to work with wifi near you!</email></h1></div></div></div><div class="row"><div class="col-xs-12 col-sm-8"><div class="row list-group"><div class="col-xs-12 list-group-item"><h4><a href="/location">Starcups</a><small>&nbsp<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span></small><span class="badge pull-right badge-default">100m</span></h4><p>address 125 High Street. Reading, RG6 1PS</p><p><span class="label label-warning">Hot drinks</span>&nbsp;<span class="label label-warning">Food</span>&nbsp;<span class="label label-warning">Premium wifi</span>&nbsp;</p></div></div></div><div class="col-xs-12 col-sm-4"><p class="lead">Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake, or a pint? Let Loc8r help you find the place you\'re looking for.</p></div></div><footer><div class="row"><div class="col-xs-12"><small>&copy; Simon Holmes 2014</small></div></div></footer></div><script src="/javascripts/jquery-1.11.1.min.js"></script><script src="/bootstrap/js/bootstrap.min.js"></script></body></html>')
        done();
      });
    })
  })
  
  describe('GET /location', function() {
    it('should allow get request w/ no params', function(done) {
      chai.request(app)
      .get('/location')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.to.deep.equal({});
        // FIXME:
        res.text.should.equal('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Location info</title><link rel="stylesheet" href="/bootstrap/css/amelia.bootstrap.css"><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Loc8r</a><button type="button" data-toggle="collapse" data-targer="#navbar-main" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div id="navbar-main" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/about/">About</a></li></ul></div></div></div><div class="container"><h1>Location info</h1><p>Welcome to Location info</p><footer><div class="row"><div class="col-xs-12"><small>&copy; Simon Holmes 2014</small></div></div></footer></div><script src="/javascripts/jquery-1.11.1.min.js"></script><script src="/bootstrap/js/bootstrap.min.js"></script></body></html>')
        done();
      });
    })
  })
  
  describe('GET /location/review/new', function() {
    it('should allow get request w/ no params', function(done) {
      chai.request(app)
      .get('/location/review/new')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.to.deep.equal({});
        // FIXME:
        res.text.should.equal('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Add review</title><link rel="stylesheet" href="/bootstrap/css/amelia.bootstrap.css"><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Loc8r</a><button type="button" data-toggle="collapse" data-targer="#navbar-main" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div id="navbar-main" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/about/">About</a></li></ul></div></div></div><div class="container"><h1>Add review</h1><p>Welcome to Add review</p><footer><div class="row"><div class="col-xs-12"><small>&copy; Simon Holmes 2014</small></div></div></footer></div><script src="/javascripts/jquery-1.11.1.min.js"></script><script src="/bootstrap/js/bootstrap.min.js"></script></body></html>')
        done();
      });
    })
  })
})

describe('others controller', function () {
  describe('GET /about', function() {
    it('should allow get request w/ no params', function(done) {
      chai.request(app)
      .get('/about')
      .end((err, res) => {              
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.to.deep.equal({});
        // FIXME:
        res.text.should.equal('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>About</title><link rel="stylesheet" href="/bootstrap/css/amelia.bootstrap.css"><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Loc8r</a><button type="button" data-toggle="collapse" data-targer="#navbar-main" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div id="navbar-main" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/about/">About</a></li></ul></div></div></div><div class="container"><h1>About</h1><p>Welcome to About</p><footer><div class="row"><div class="col-xs-12"><small>&copy; Simon Holmes 2014</small></div></div></footer></div><script src="/javascripts/jquery-1.11.1.min.js"></script><script src="/bootstrap/js/bootstrap.min.js"></script></body></html>')
        done();
      });
    })
  })
})

describe('users route', function () {
  describe('GET /users', function() {
    it('should allow get request w/ no params', function(done) {
      chai.request(app)
      .get('/users')
      .end((err, res) => {              
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.to.deep.equal({});
        res.text.should.equal('respond with a resource')
        done();
      });
    })
  })
})