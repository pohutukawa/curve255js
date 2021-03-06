/**
 * @fileOverview
 * EC Diffie-Hellman operations on Curve25519.
 */

/*
 * Copyright (c) 2014 Mega Limited
 * under the MIT License.
 * 
 * Authors: Guy K. Kloss
 * 
 * You should have received a copy of the license along with this program.
 */

define([
    "jodid25519/core",
    "jodid25519/curve255",
], function(core, curve255) {
    "use strict";

    /**
     * @exports jodid25519/dh
     * EC Diffie-Hellman operations on Curve25519.
     *
     * @description
     * EC Diffie-Hellman operations on Curve25519.
     */
    var ns = {};

    /**
     * Computes the scalar product of a point on the curve 25519.
     *
     * This function is used for the DH key-exchange protocol.
     *
     * Before multiplication, some bit operations are applied to the
     * private key to ensure it is a valid Curve25519 secret key.
     * It is the user's responsibility to make sure that the private
     * key is a uniformly random, secret value.
     *
     * @function
     * @param f {string}
     *     Private point as byte string on the curve.
     * @param c {string}
     *     Public point as byte string on the curve. If not given, the curve's
     *     base point is used.
     * @returns {string}
     *     Key point as byte string resulting from scalar product.
     */
    ns.curve25519 = function(f, c) {
        if (c) {
            return core.toString(curve255.curve25519(core.fromString(f),
                                                     core.fromString(c)));
        } else {
            return core.toString(curve255.curve25519(core.fromString(f)));
        }
    };
    

    return ns;
});
