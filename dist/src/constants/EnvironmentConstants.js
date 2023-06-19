"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROD_DOMAIN = exports.TEST_DOMAIN = exports.DEV_DOMAIN = exports.NODE_ENVIRONMENTS = void 0;
var NODE_ENVIRONMENTS;
(function (NODE_ENVIRONMENTS) {
    NODE_ENVIRONMENTS["JEST_TEST"] = "test";
    NODE_ENVIRONMENTS["DOCKER_TEST"] = "dockertest";
    NODE_ENVIRONMENTS["PRODUCTION"] = "production";
})(NODE_ENVIRONMENTS || (exports.NODE_ENVIRONMENTS = NODE_ENVIRONMENTS = {}));
exports.DEV_DOMAIN = 'integration-mkinwt.pixcap.com';
exports.TEST_DOMAIN = 'staging-mozpck.pixcap.com';
exports.PROD_DOMAIN = 'pixcap.com';
//# sourceMappingURL=EnvironmentConstants.js.map