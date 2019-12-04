const router = require('express').Router();
let Question = require('../models/questions.model.js');


router.route('/postquestion').post((req, res) => {
  console.log("is this hit?");

  const { body } = req;
  let {
    id,
    question
  } = body;

  const newQuestion = new Question();
  newQuestion.id = id;
    newQuestion.question = "What did the fox say?";
   

    newQuestion.save((err, question) => {
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

router.route('/getquestion').get((req, res) => {
    console.log("getQ");
  
    const { body } = req;
    let {
      id,
    } = body;
  
    Question.find({
      id: 1
    }, (err, questions) => {
      
      const question = questions[0];
      return res.send({
          
          message: questions[0]
        });
    
  });

});



router.route('/add').post((req, res) => {
  console.log("is this hit?");

  const { body } = req;
  let {
    fname,
    lname,
    email,
    password,
    userType
  } = body;
  
  console.log(email);
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
    newUser.password = newUser.generateHash(password);
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




module.exports = router;