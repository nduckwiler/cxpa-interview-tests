/* 
 * Adapted from a Codecademy checkpoint test.
 * See the real thing here: https://www.codecademy.com/content-items/1302ffcc4ee6cb493a0911859492ca48/exercises/else-if
 */

const fs = require('fs');

const code = fs.readFileSync('./werewolf.js', 'utf-8');

const checks = [
  {
    msg: 'Did you write an else if statement for if the moonPhase is mostly new?',
    regex: /else *if *\( *moonPhase *=== *[\'"]mostly *new[\'"] *\)/
  },
  {
    msg: 'Did you write an else if statement for if the moonPhase is mostly full?',
    regex: /else *if *\( *moonPhase *=== *[\'"]mostly *full[\'"] *\)/
  },
  {
    msg: 'Did you write an else statement that logs \'Invalid moon phase\'?',
    regex: /else *\{((\n|.)*)[Ii]nvalid/
  }
];

for (let i = 0; i < checks.length; i++) {
  if (!code.match(checks[i].regex)) {
    console.log('Error! ' + checks[i].msg);
  }
}
