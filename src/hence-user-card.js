'use strict';
/**
 * @module hence-user-card
 */

import Hence from 'hence-component-framework';
import _each from 'lodash/collection/each';
import _sample from 'lodash/collection/sample';

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
      // Avatar
      //avatar: raw.avatar,
      // Image
      image: raw.profilePhoto,
      // Content
      title: `${raw.firstName} ${raw.lastName}'s Title`,
      description: HenceUserBiography.createElement(raw)

      /*
      padded: Boolean,
      // Avatar
      avatar: String,
      avatarPosition: {
        type: String,
        value: 'top'
      },
      avatarShape: {
        type: String,
        value: 'circle'
      },
      displayAvatarTop: Boolean,
      displayAvatarCentered: Boolean,
      // Image
      image: String,
      imagePosition: {
        type: String,
        value: 'top'
      },
      displayImageTop: Boolean,
      displayImageCentered: Boolean,
      displayImageBackground: Boolean,
      // Content
      title: String,
      subtitle: String,
      description: String,
      displayIntroTitle: {
        type: Boolean
      },
      // Actions
      actions: Array,
      actionsCentered: Boolean,
      actionsBordered: Boolean
      */
    };

    if (raw.mySites) {
      entry.actions = [];

      _each(raw.mySites, (origSite)=> {
        let site = {
          label: origSite.label,
          icon: _sample(['apple', 'android', 'facebook', 'google', 'github', 'linux', 'rebel', 'steam', 'windows', '']),
          float: _sample(['', 'left', 'right']),
          action: (model, e)=> { window.location = origSite.url; }
        };

        entry.actions.push(site);
      });
    }

    //console.log('entry processed',entry);

    return entry;
  }
});

export default HenceUserCard;
