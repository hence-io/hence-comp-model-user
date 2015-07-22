'use strict';
/**
 * @module hence-comp-model-user
 */
import console from 'consoler';
import HenceComp from 'hence-comp';
import _each from 'lodash/collection/each';

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
    state: {
      type: Array,
      value: null
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
  listeners: {},


  /*********************************************************************************************************************
   * Element DOM Hooks
   ********************************************************************************************************************/


  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   * Manipulate the state loaded in from the schema to be suited for the expecting UI element
   */
    transformState() {
    let results = [];

    if (!this.state) {
      this.state = [];
    }

    this.state.forEach((entry)=> {
      let user = {
        title: `${entry.firstName} ${entry.lastName}'s Title`,
        callToAction: {
          label: 'Email user',
          action: (e, model)=> {
            alert('Email user' + entry.email);
          }
        }
      };

      if(entry.mySites) {
        user.options = [];

        _each(entry.mySites,(url, label)=> {
          let site = {
            label: label,
            action: ()=> { window.location = url; }
          };

          user.options.push(site);
        });
      }

      results.push(user);
    });

    if (results.length === 1) {
      results = results[0];
    }

    return results;
  }
});

export {is};
export default HenceCompModelUser;
