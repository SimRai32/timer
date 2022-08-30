const args = process.argv.slice(2);
args.sort((a,b) => {
  return a - b;
});
for (let i = 0; i < args.length; i++){
  if (args[i] < 0) {
    continue;
  }
  if (!isNaN(args[i])) {
    setTimeout(() => {
      process.stdout.write('\x07')}, 1000 * args[i]);
  }
}




