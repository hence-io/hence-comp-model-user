'use strict';
/**
 * @module hence-comp-model-user
 */
import console from 'consoler';
import {HenceModel} from 'hence-comp';
import _each from 'lodash/collection/each';

let is = 'hence-comp-model-user';

/**
 * HenceCompModelUser Component
 * @constructor
 */
let HenceCompModelUser = HenceModel({
  is, // auto set as is : is, es6 laziness joy!
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  properties: {},

  /*********************************************************************************************************************
   * Event Listeners
   ********************************************************************************************************************/

  /*********************************************************************************************************************
   * Element DOM Hooks
   ********************************************************************************************************************/

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   * Manipulate the state loaded in from the schema to be suited for the expecting UI element. Executed by the
   * ```renderState()``` function
   *
   * @private
   */
  _transformState(entry) {
    let user = {
      title: `${entry.firstName} ${entry.lastName}'s Title`,
      callToAction: {
        label: `Email user`,
        action: (e, model)=> {
          alert(`Email user: ${entry.email}`);
        }
      }
    };

    if (entry.mySites) {
      user.options = [];

      _each(entry.mySites, (url, label)=> {
        let site = {
          label: label,
          action: ()=> { window.location = url; }
        };

        user.options.push(site);
      });
    }

    return user;
  },

  behaviors: []
});

export {is};
export default HenceCompModelUser;
