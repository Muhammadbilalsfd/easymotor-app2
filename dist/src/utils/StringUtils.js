"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invitationCode = exports.nullOrEmpty = void 0;
function nullOrEmpty(value) {
    if (value == null || value.trim() == '') {
        return true;
    }
    return false;
}
exports.nullOrEmpty = nullOrEmpty;
function invitationCode() {
    return '_' + Math.random().toString(36).substr(2, 9);
}
exports.invitationCode = invitationCode;
//# sourceMappingURL=StringUtils.js.map