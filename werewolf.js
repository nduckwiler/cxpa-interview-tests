/*
Instruction:
We all know that turning into a werewolf is not an instant thing. It happens in stages. So let's expand our program from before to accommodate that fact.

If the moon is `'mostly full'`, log `'Arms and legs are getting hairier'`.
If the moon is `'mostly new'`, log `'Back on two feet'`.
If someone enters in an invalid moon phase, log `'Invalid moon phase'`.
*/

// Initial code. This should fail.
const moonPhase = 'full';

if (moonPhase === 'full') {
  console.log('Howwwlll!!');
} else {
  console.log('I swear I am not a werewolf...');
}
