const review1 = {
  author: 'Simon Holmes',
  timestamp: '16 July 2013',
  rating: 5,
  comment: 'What a great place. I can\'t say enough good things about it.'
};

const review2 = {
  author: 'Charlie Chaplin',
  timestamp: '16 June 2013',
  rating: 3,
  comment: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
};

const location1 = {
  name: 'Starcups',
  address: '125 High Street, Reading, RG6 1PS',
  rating: 3,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  distance: '100m',
  mapUrl: 'http://maps.googleapis.com/maps/api/staticmap?center=51.455041,-0.9690884&zoom=17&size=400x350&sensor=false&markers=51.455041,-0.9690884&scale=2',
  reviews: [
    review1,
    review2
  ]
};

const location2 = {
  name: 'Cafe Hero',
  address: '125 High Street, Reading, RG6 1PS',
  rating: 4,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  distance: '200m'
};

const location3 = {
  name: 'Burger Queen',
  address: '125 High Street, Reading, RG6 1PS',
  rating: 2,
  facilities: ['Food', 'Premium wifi'],
  distance: '250m'
}

/* GET 'home' page */
module.exports.homelist = function(req, res) {  
  res.render('locations-list', { 
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake, or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [
      location1,
      location2,
      location3
    ]
  });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', {
    title: 'Location info',
    customerReviewsHeading: 'Customer reviews',
    facilitiesHeading: 'Facilities',
    locationMapHeading: 'Location map',
    newReviewButton: 'Add review',
    location: location1,
    leadFooter: 'Simon\'s cafe is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
    footer: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you'
  });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', {
    title: 'Add review',
    header: 'Review Starcups',
    ratings: [5,4,3,2,1],
    nameLabel: 'Name',
    ratingLabel: 'Rating',
    reviewLabel: 'Review',
    addReviewButton: 'Add my review'
  });
};