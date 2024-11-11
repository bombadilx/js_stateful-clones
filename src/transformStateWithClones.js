'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
    const result = [];  // Array to store the state clones
    for (const action of actions) {
    let newState = { ...state };  

    switch (action.type) {
      case 'addProperties':
        newState = { ...newState, ...action.extraData };
        break;
        
      case 'removeProperties':
        for (const key of action.keysToRemove) {
          delete newState[key];
        }
        break;
        
      case 'clear':
        // Clear the entire state
        newState = {};
        break;
    }
    result.push(newState);
    state = newState;
  }
  
  return result;
}

module.exports = transformStateWithClones;
