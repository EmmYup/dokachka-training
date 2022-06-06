'use stric';

// warrior = 'Ninja';

const warrior = {
  name: 'Jujin Take',
  type: 'Ninja',
  weapon: 'Shuriken',
  agility: 79,
}; //globally scoped

//globally scoped
const screamWarrior = () => {
  let warrior2 = 'Samurai';
  //   wrapped in a function now is a closure
  warrior3 = 'Viking'; //DO NOT USE example
  return {
    shootWarrior: () => {
      return console.log(warrior, warrior2);
    },
  };
};

const newWarrior = screamWarrior();

newWarrior.shootWarrior();

console.log(warrior, warrior3);

// var warrior; // Example of Hoisting

// var warrior3 = 'Viking'; // Should show undefined
