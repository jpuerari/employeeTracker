// set up questions for start prompt
const startQuestions = [
  {
    name: 'auctionAction',
    message: 'What would you like to do?',
    type: 'list',
    choices: ['See Jobs', 'See Salary', 'Exit']
  }
];

// set up questions for creating an item prompt
const createItemQuestions = [
  {
    name: 'item_name',
    message: 'What is the name of the item?',
    type: 'input',
    // validate that user entered something
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'item_category',
    message: 'What is the category of the item?',
    type: 'input',
    // validate that user entered something
    validate: inputVal => (inputVal ? true : false)
  },
  {
    name: 'starting_bid',
    message: 'What is the starting bid?',
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

// questions to bid on an item
const bidQuestions = [
  {
    name: 'item_id',
    message: "Which item do you want to bid on (enter item's id)?",
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  },
  {
    name: 'bid_amount',
    message: 'How much do you want to bid?',
    type: 'input',
    // validate that user entered a number greater than 0 and it is in fact a number
    validate: inputVal => {
      return inputVal > 0 && !isNaN(inputVal) ? true : false;
    }
  }
];

module.exports = { startQuestions, createItemQuestions, bidQuestions };