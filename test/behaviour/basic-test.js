var component = document.querySelector('hence-user-card');

suite('<hence-user-card>', function () {

  test('says hello', function () {
    assert.equal(component.greeting, 'test greeting');
  });

  test('says hello', function () {
    assert.equal(component.sayHello(), 'hence-user-card says, Hello World!');

    var greetings = component.sayHello('greetings Earthlings');
    assert.equal(greetings, 'hence-user-card says, greetings Earthlings');
  });
});
