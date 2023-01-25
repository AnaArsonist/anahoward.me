"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = transformSource;
var _constants = require("../../../../shared/lib/constants");
var _warnOnce = require("../../../../shared/lib/utils/warn-once");
var _getPageStaticInfo = require("../../../analysis/get-page-static-info");
var _getModuleBuildInfo = require("../get-module-build-info");
async function transformSource(source, sourceMap) {
    var ref;
    // Avoid buffer to be consumed
    if (typeof source !== "string") {
        throw new Error("Expected source to have been transformed to a string.");
    }
    const callback = this.async();
    const buildInfo = (0, _getModuleBuildInfo).getModuleBuildInfo(this._module);
    const rscType = (0, _getPageStaticInfo).getRSCModuleType(source);
    // Assign the RSC meta information to buildInfo.
    // Exclude next internal files which are not marked as client files
    buildInfo.rsc = {
        type: rscType
    };
    if (((ref = buildInfo.rsc) == null ? void 0 : ref.type) === _constants.RSC_MODULE_TYPES.client) {
        return callback(null, source, sourceMap);
    }
    if (noopHeadPath === this.resourcePath) {
        (0, _warnOnce).warnOnce(`Warning: You're using \`next/head\` inside app directory, please migrate to \`head.js\`. Checkout https://beta.nextjs.org/docs/api-reference/file-conventions/head for details.`);
    }
    return callback(null, source, sourceMap);
}
const noopHeadPath = require.resolve("next/dist/client/components/noop-head");

//# sourceMappingURL=index.js.map