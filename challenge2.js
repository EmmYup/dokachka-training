const warriors2 = [
  {
    name: 'Jujin Take',
    type: 'Ninja',
    weapon: 'Shuriken',
    agility: 79,
  },
  {
    name: 'Kotaro',
    type: 'Knight',
    weapon: 'Sword',
    agility: 70,
  },
  {
    name: 'Izaka',
    type: 'Archer',
    weapon: 'Arch',
    agility: 88,
  },
];

const reviewWarriors = () => {
  const akatzuki = {
    name: 'Itachi',
    type: 'Ninja',
    weapon: 'Himself',
    agility: 95,
  };
  console.log(warriors, akatzuki);
  warriors2.map(({ agility, name, type }) => {
    if (agility > 85) {
      console.log(`Only ${name} the ${type} is able to fight ${akatzuki.name}`);
    }
  });
  console.log(warriors, akatzuki);
};

reviewWarriors();

console.log(warriors, akatzuki);
