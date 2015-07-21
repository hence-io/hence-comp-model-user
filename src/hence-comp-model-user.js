'use strict';
/**
 * @module hence-comp-model-user
 */
import console from 'consoler';
import HenceComp from 'hence-comp';

let is = 'hence-comp-model-user';

/**
 * HenceCompModelUser Component
  * @constructor
 */
let HenceCompModelUser = HenceComp({
  is, // auto set as is : is, es6 laziness joy!
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  properties: {
    greeting: {
      type: String,
      value: 'Hello!'
    },
    test: {
      type: Object,
      value: ()=> {
        return {
          title: 'Hax0r!'
        };
      }
    }
  },

  /*********************************************************************************************************************
   * Event Listeners
   ********************************************************************************************************************/

  /**
   * When working with listeners, if their target element doesn’t exist on the DOM you get a very basic nonspecific
   * error 'Uncaught TypeError: Invalid value used as weak map key’!  Make sure to review the listeners you set up
   * against you DOM elements. By default listeners look for IDs on elements so ‘myButton.tap’ will watch click/touches
   * on a #myButton element in the component
   */
  listeners: {
  },


  /*********************************************************************************************************************
   * Element DOM Hooks
   ********************************************************************************************************************/

  /**
   * This is called after all elements have been configured, but propagates bottom-up. This element's children are
   * ready, but parents are not. This is the point where you should make modifications to the DOM (when  necessary),
   * or kick off any processes the element wants to perform.
   */
  ready() {
    // WARNING, updating DOM elements HERE may override variable revisions in the factoryImpl function if created
    // with the createElement function,leveraging the components defaults instead. If the element is embedded, no issue.

    // Access a local DOM element by ID using this.$
    // this.$.greeting.textContent += ", has loaded!";

    // Access a local DOM element by selector using this.$$('')
    // this.$$('#greeting').textContent += ", has loaded!";
  },

  /**
   * `attached` fires once the element and its parents have been inserted  into a document. This is a good place to
   * perform any work related to your element's visual state or active behavior (measuring sizes, beginning animations,
   * loading resources, etc).
   */
  attached() {
    this.configureProperties(); // will auto fill in this components properties if passed in as an object through the DOM.

    // WARNING, updating DOM elements HERE may override variable revisions in the factoryImpl function if created
    // with the createElement function,leveraging the components defaults instead. If the element is embedded, no issue.

    // Access a local DOM element by ID using this.$
    // this.$.greeting.textContent += ", has loaded!";

    // Access a local DOM element by selector using this.$$('')
    // this.$$('#greeting').textContent += ", has loaded!";

    this.async(function() {
      // access sibling or parent elements here
    });
  },

  /**
   * The analog to `attached`, `detached` fires when the element has been removed from a document. Use this to clean
   * up anything you did in `attached`.
   */
  detached() {

  },

  /**
   * @param {String} name The name of the attribute
   * @param {String} type The variable type of the attribute
   */
  attributeChanged(name, type) {
    let attr = this.getAttribute(name);
    console.log(`${this.localName}#${this.id} attribute ${name} was changed to ${attr} of type ${type}`);
  },

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   * Does some secret magic!
   * @private
   */
  _doHiddenstuff() {

  },

  /**
   * Sometimes it's just nice to say hi.
   *
   * @param {String} greeting A positive greeting.
   * @return {String} The full greeting.
   */
  sayHello(greeting ='Hello World!') {
    return 'hence-comp-model-user says, ' + greeting;
  }
});

export {is};
export default HenceCompModelUser;
