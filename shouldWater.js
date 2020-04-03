const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

// Your if statement goes below...
if (lifeStatus === 0 && drynessLevel >10) {
  console.log('WATER');
}