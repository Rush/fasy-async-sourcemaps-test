class Foo {
constructor() {
  this.files = ['aaa', 'fff', 'ewrrewewrewr'];
}
async liveBackup() {
  let files = this.files;
  for(let file of files) {
    console.log(new Error().stack);
    await Promise.resolve();
  }
  for(let file of files) {
    await Promise.resolve();
  }
  return 'foo';
}
}

(new Foo).liveBackup().then(console.log);