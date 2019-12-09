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
    const { body } = req;
    let {
      id,
    } = body;
    Question.find({
      id: req.query.id
    }, (err, questions) => {
      const question = questions[0];
      return res.send({
          message: questions[0]
        });
    
  });
});

router.route('/getAllQuestions').get((req, res) => {
  Question.find({}, (err, questions) => {
    return res.send({
        questions
      });
  });
});

// router.route('/getSize').get((req, res) => {
//   db.collection.count({}, function(error, numOfDocs) {
//     console.log('I have '+numOfDocs+' documents in my collection');
//     // ..
//   });
// });


module.exports = router;