'use strict';
/**
 * @module hence-user-card
 */
import console from 'consoler';
import Hence from 'hence-component-framework';
import _each from 'lodash/collection/each';

/**
 * HenceUserCard Component
 * @constructor
 */
let HenceUserCard = Hence.Model({
  is: 'hence-user-card',
  /********************************************************************************************************************
   * Initialization
   ********************************************************************************************************************/
  properties: {},

  /*********************************************************************************************************************
   * Element Behaviour
   ********************************************************************************************************************/

  /**
   * Manipulate the state loaded in from the schema to be suited for the expecting UI element. Executed by the
   * ```renderState()``` function
   *
   * @private
   * @param raw Object
   */
    _transformState(raw) {
    let entry = {
      title: `${raw.firstName} ${raw.lastName}'s Title`,
      callToAction: {
        label: `Email user`,
        action: (e, model)=> {
          alert(`Email user: ${raw.email}`);
        }
      }
    };

    if (raw.mySites) {
      entry.options = [];

      _each(raw.mySites, (url, label)=> {
        let site = {
          label: label,
          action: ()=> { window.location = url; }
        };

        entry.options.push(site);
      });
    }

    //console.log('user processed',user);

    return entry;
  },

  behaviors: []
});

export default HenceUserCard;
