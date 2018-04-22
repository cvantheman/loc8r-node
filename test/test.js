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
        res.text.should.equal('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Location info</title><link rel="stylesheet" href="/bootstrap/css/amelia.bootstrap.css"><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Loc8r</a><button type="button" data-toggle="collapse" data-targer="#navbar-main" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div id="navbar-main" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/about/">About</a></li></ul></div></div></div><div class="container"><div class="row page-header"><div class="col-lg-12"><h1>Starcups</h1></div></div><div class="row"><div class="col-xs-12 col-md-9"><div class="row"><div class="col-xs-12 col-sm-6"><p class="rating"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span></p><p>125 High Street. Reading, RG6 1PS</p><div class="panel panel-primary"><div class="panel-heading"><h2 class="panel-title">Facilities</h2></div><div class="panel-body"><span class="label label-warning"><span class="glyphicon glyphicon-ok"></span>&nbsp;Hot drinks</span>&nbsp;<span class="label label-warning"><span class="glyphicon glyphicon-ok"></span>&nbsp;Food</span>&nbsp;<span class="label label-warning"><span class="glyphicon glyphicon-ok"></span>&nbsp;Premium wifi</span>&nbsp;</div></div></div><div class="col-xs-12 col-sm-6 location-map"><div class="panel panel-primary"><div class="panel-heading"><h2 class="panel-title">Location map</h2></div><div class="panel-body"><img src="http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&amp;zoom=17&amp;size=400x350&amp;sensor=false&amp;markers=51.455041,-0.9690884&amp;scale=2" class="img-responsive img-rounded"></div></div></div></div></div></div><div class="row"><div class="col-xs-12"><div class="panel panel-primary review-panel"><div class="panel-heading"><a href="location/review/new" class="btn btn-default pull-right">Add review</a><h2 class="panel-title">Customer reviews</h2></div><div class="panel-body review-container"><div class="row"><div class="review"><div class="well well-sm review-header"><span-rating><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span></span-rating><span class="reviewAuthor">Simon Holmes</span><small class="reviewTimestamp">16 July 2013</small></div><div class="col-xs-12"><p>What a great place. I can\'t say enough good things about it.</p></div></div></div><div class="row"><div class="review"><div class="well well-sm review-header"><span class="rating"><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star-empty"></span><span class="glyphicon glyphicon-star-empty"></span></span><span class="reviewAuthor">Charlie Chaplin</span><small class="reviewTimestamp">16 June 2013</small></div><div class="col-xs-12"><p>It was okay. Coffee wasn\'t great, but the wifi was fast.</p></div></div></div></div></div></div><div class="col-xs-12 col-md-3"><p class="lead">Simon\'s cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.</p><p>If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you</p></div></div><footer><div class="row"><div class="col-xs-12"><small>&copy; Simon Holmes 2014</small></div></div></footer></div><script src="/javascripts/jquery-1.11.1.min.js"></script><script src="/bootstrap/js/bootstrap.min.js"></script></body></html>')
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
        res.text.should.equal('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Add review</title><link rel="stylesheet" href="/bootstrap/css/amelia.bootstrap.css"><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Loc8r</a><button type="button" data-toggle="collapse" data-targer="#navbar-main" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div id="navbar-main" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/about/">About</a></li></ul></div></div></div><div class="container"><div class="row page-header"><div class="col-lg-12"><h1>Review Starcups</h1></div></div><div class="row"><div class="col-xs-12 col-md-6"><form action="/location" method="get" role="form" class="form-horizontal"><div class="form-group"><label for="name" class="col-xs-10 col-sm-2 control-label">Name</label><div class="col-xs-12 col-sm-10"><input id="name" name="name" class="form-control"></div></div><div class="form-group"><label for="rating" class="col-xs-10 col-sm-2 control-label">Rating</label><div class="col-xs-12 col-sm-2"><select id="rating" name="rating" class="form-control input-sm"><option>5</option><option>4</option><option>3</option><option>2</option><option>1</option></select></div></div><div class="form-group"><label for="review" class="col-xs-10 col-sm-2 control-label">Review</label><div class="col-sm-10"><textarea id="review" name="review" rows="5" class="form-control"></textarea></div></div><button class="btn btn-default pull-right">Add my review</button></form></div><div class="col-xs-12 col-md-4"></div></div><footer><div class="row"><div class="col-xs-12"><small>&copy; Simon Holmes 2014</small></div></div></footer></div><script src="/javascripts/jquery-1.11.1.min.js"></script><script src="/bootstrap/js/bootstrap.min.js"></script></body></html>')
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
        res.text.should.equal('<!DOCTYPE html><html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>About</title><link rel="stylesheet" href="/bootstrap/css/amelia.bootstrap.css"><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><a href="/" class="navbar-brand">Loc8r</a><button type="button" data-toggle="collapse" data-targer="#navbar-main" class="navbar-toggle"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><div id="navbar-main" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li><a href="/about/">About</a></li></ul></div></div></div><div class="container"><div id="banner" class="page-header"><div class="row"><div class="col-md-6 col-sm-12"><h1>About</h1></div></div></div><div class="row"><div class="col-md-6 col-sm-12"><p>Loc8r was created to help people find places to sit down and get a bit of work done.\n<br /><br />\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n<br /><br />\nSed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p></div></div><footer><div class="row"><div class="col-xs-12"><small>&copy; Simon Holmes 2014</small></div></div></footer></div><script src="/javascripts/jquery-1.11.1.min.js"></script><script src="/bootstrap/js/bootstrap.min.js"></script></body></html>')
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