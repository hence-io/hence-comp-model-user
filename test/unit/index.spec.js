import _ from 'lodash';
import Component from '../../src/hence-comp-model-user';

describe('ES6 component Tests - hence-comp-model-user', () => {
  let component;

  beforeEach(() => {
    component = _.cloneDeep(Component);
  });

  afterEach(() => {
  });

  it('should have the default greeting property set', () => {
    expect(component.properties.greeting.value).to.equal('Hello!');
  });

  it('should sayHello', () => {
    expect(component.sayHello()).to.equal('hence-comp-model-user says, Hello World!');
  });

  it('should have a polymer config', () => {
    expect(component.is).to.equal('hence-comp-model-user');
  });
});
