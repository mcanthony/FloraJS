/** 
    A module representing a Attractor object.
    @module Attractor
 */

/**
 * Creates a new Attractor object.
 *
 * @constructor
 * @extends Mover
 *
 * @param {Object} [opt_options] Options.
 * @param {number} [opt_options.G = -1] Universal Gravitational Constant.
 * @param {number} [opt_options.mass = 100] Mass. Increase for a greater gravitational effect.
 * @param {boolean} [opt_options.isStatic = true] If true, object will not move. 
 * @param {number} [opt_options.width = 10] Width.
 * @param {number} [opt_options.height = 10] Height. 
 * @param {Object} [opt_options.color = {r: 97, g: 210, b: 214}] Color.
 * @param {number} [opt_options.opacity = 0.75] The particle's opacity.  
 */
function Attractor(opt_options) {

  'use strict';

  var options = opt_options || {};

  exports.Mover.call(this, options);

  this.G = options.G || 1;
  this.mass = options.mass || 100;
  this.isStatic = options.isStatic || true;
  this.width = options.width || 50;
  this.height = options.height || 50;
  this.color = options.color || {r: 97, g: 210, b: 214};
  this.opacity = options.opacity || 0.75;
}
exports.Utils.inherit(Attractor, exports.Mover);
exports.Attractor = Attractor;