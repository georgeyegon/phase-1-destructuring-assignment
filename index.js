const farmAnimals = 'cow horse sheep pig chicken';

// 1. Animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// 2. Four traditional animal names
const [bessie, , dolly, babe, little] = farmAnimals.split(' ');

// 3. Three traditional animal colors
const [blackAndWhite, black, pink] = ['cow', 'sheep', 'pig'];

// 4. Rainbow colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Rainbow initials, excluding indigo
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo as indg
const [, , , , , indg] = colors;

// 7. Destructure `muppet` object
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure `nestedMuppet` object
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const { 
  album: { 
    theMuppetMovie: { song2, song4 } 
  },
  nestedJob,
  nestedPartner 
} = nestedMuppet;
