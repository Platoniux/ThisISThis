var testObj = {
  name: 'testObj',
  getNameObj: function() {
    console.log(this.name);
  }
};

getName();
testObj.getNameObj();
getNameObj();

function getName() {
  console.log(this.name);
}