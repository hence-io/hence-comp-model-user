var component = document.querySelector('hence-comp-model-user');

suite('<hence-comp-model-user>', function () {

  test('says hello', function () {
    assert.equal(component.greeting, 'test greeting');
  });

  test('says hello', function () {
    assert.equal(component.sayHello(), 'hence-comp-model-user says, Hello World!');

    var greetings = component.sayHello('greetings Earthlings');
    assert.equal(greetings, 'hence-comp-model-user says, greetings Earthlings');
  });
});