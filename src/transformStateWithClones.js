'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
    for (const key in actions) {
    switch (actions[key].type) {
      case 'addProperties':
        for (const extraKey in actions[key].extraData) {
          state[extraKey] = actions[key].extraData[extraKey];
        }
        break;
      case 'removeProperties':
        for (const extraKey in actions[key].keysToRemove) {
          delete state[actions[key].keysToRemove[extraKey]];
        }
        break;
      case 'clear':
        Object.keys(state).forEach(currentKey => delete state[currentKey]);
        break;
    }
  }
}

module.exports = transformStateWithClones;
