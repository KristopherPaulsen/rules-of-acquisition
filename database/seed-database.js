const { db, QueryTypes } = require('../src/sequalize.js');
const rules = require('./rules.json');

(() => {
  setTimeout(() => {
    for (rule of rules) {
      db.query(
        `INSERT INTO rules (number, content, source)
         VALUES(?, ?, ?)`,
        {
          replacements: [rule.number, rule.content, rule.source]
        },
        (error) => console.log(error)
      )
    }
  }, 1000)
})();
