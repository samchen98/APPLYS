const router = require('express').Router();
let User = require('../models/user.model.js');

// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
router.route('/auth').post((req, res) => {
  const { body } = req;
  let {
    email,
    password,
  } = body;
  
  
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  User.find({
    email: email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error'
      });
    }
    const user = users[0];
    console.log(user)
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }
    else{
      return res.send({
        success: true,
        message: user,
        
      });
    }
    


});
});

router.route('/add').post((req, res) => {
  const { body } = req;
  let {
    fname,
    lname,
    email,
    password,
    userType,
    physemail
  } = body;
  
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be blank.'
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be blank.'
    });
  }

  email = email.toLowerCase();
  email = email.trim();

  // Steps:
  // 1. Verify email doesn't exist
  // 2. Save
  User.find({
    email: email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }

    // Save the new user
    const newUser = new User();
    newUser.fname = fname;
    newUser.lname = lname;
    newUser.userType = userType;
    newUser.email = email;
    newUser.physemail = physemail;
    newUser.password = newUser.generateHash(password);
    newUser.incorrectAns = [],
    newUser.surveyScore = null
    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      return res.send({
        success: true,
        message: 'Signed up'
      });
    });
  });

});

router.route('/getAllPatients').get((req, res) => {
  const { body } = req;
    User.find({
      physemail: req.query.physemail,
    }, (err, users) => {
      return res.send({
          message: users
        });
    
  });
});

router.route('/updateScore').post((req, res) => {
  const { body } = req;
  // let {
  //   email,
  //   incorrect,
  //   score
  // } = body;
  console.log(req.body.email)
  User.findOneAndUpdate({email: req.body.email}, 
    { incorrectAns : req.body.incorrect, "surveyScore" : req.body.score}, {new: true}, (err, doc) => {
      if (err) {
          console.log("Something wrong when updating data!");
      }
      console.log(doc);
    });
})


module.exports = router;