var testObj = {
  name: 'testObj',
  getNameObj: function() {
    console.log(this.name);
  }
};

getName.call(testObj);

function getName() {
  console.log(this.name);
}