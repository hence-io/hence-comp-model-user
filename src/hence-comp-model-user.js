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
    query: {
      type: Object,
      value: ()=> { return {}; }
    },
    state: Array
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


  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   *
   */
  transformState() {
    let results = [];

    this.state.forEach((entry)=>{
      results.push({
        title:entry.title,
        image: entry.image
      })
    });

    if(results.length === 1) {
      results = results[0];
    }

    return results;
  }
});

export {is};
export default HenceCompModelUser;
