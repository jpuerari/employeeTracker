// import consola package for console.log() styling
const consola = require('consola');
// import connection to make queries
const connection = require('../config/connection');

// create a function that returns a promise to handle sql query to get all items
const getAllItems = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM items', (err, itemData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(itemData);
    });
    console.log(getQuery.sql);
  });
};

// create a function that accepts a new item's information and returns a promise to create a new auction item with input data
const createItem = itemDataObj => {
  return new Promise((resolve, reject) => {
    const postQuery = connection.query('INSERT INTO items SET ?', itemDataObj, (err, createItemRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Item successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};

// create a function that accepts the item's id and new high bid price and returns a promise to update it
const updateBid = (itemId, bidPrice) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE items SET highest_bid = <new high bid> WHERE id = <item's id>"
    const updateQuery = connection.query(
      'UPDATE items SET ? WHERE ?',
      [{ highest_bid: bidPrice }, { id: itemId }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Bid successfully updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};

// export functions
module.exports = {
  getAllItems,
  createItem,
  updateBid
};
