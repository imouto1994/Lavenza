/**
 * 
 * 
 * @param {any} a 
 * @param {any} b 
 * @returns 
 */
function shallowDiffers(a, b) {
  // Check if every key in 'a' has the same value as the respective one in 'b'
  for (const key in a) {
    if (a[key] !== b[key]) {
      return true;
    }
  }

  // Check if 'b' has keys that 'a' does not have
  for (const key in b) {
    if (!(key in a)) {
      return true;
    }
  }

  return false;
}

/**
 * 
 * 
 * @param {any} props 
 * @param {any} state 
 * @returns 
 */
function shouldComponentUpdate(props, state) {
  return shallowDiffers(props, this.props) || shallowDiffers(state, this.state);
}

/**
 * 
 * 
 * @export
 * @param {any} Component 
 * @returns 
 */
export function pure(Component) {
  Component.prototype.shouldComponentUpdate = shouldComponentUpdate;
  return Component;
}
