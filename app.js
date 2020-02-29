const inquirer = require('inquirer');
require('console.table');

// import connection
const connection = require('./config/connection');

// import functions to work with database
const { getAllItems, createItem, updateBid } = require('./lib/db-items');

// import arrays of questions for inquirer prompts
const { startQuestions, createItemQuestions, bidQuestions } = require('./lib/prompts');

// function to start auction, defined to be async
const startAuction = async () => {
  // destructure response object out of first prompt, using await means no .then() needed
  const { auctionAction } = await inquirer.prompt(startQuestions);