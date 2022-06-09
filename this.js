var b = {
  name: "jay",
  say() {
    console.log("this is ", this);
  },
};
b.say();
// this is  {name: "jay", say: ƒ}
