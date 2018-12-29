var user = {
  login: 'Andrew',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },
  // checkPassword: function() {
  //   var context = this;
  //   ask('Your password ?', context.password, function() { context.loginOk() }, function() { context.loginFail() });
  // }
  checkPassword: function() {
    var newLoginOk = this.loginOk.bind(this);
    var newLoginFail = this.loginFail.bind(this);
    var newAsk = ask.bind(this, "Your password?", this.password, newLoginOk, newLoginFail);
    newAsk();
  }
};

user.checkPassword();

var user2 = user;
user = null;
user2.checkPassword();

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}
