"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpUserController = void 0;
const setUpUserController = function (app) {
    app.put(`/users`);
    app.post(`/notifications/users`);
    app.post(`/notifications/users/send`);
};
exports.setUpUserController = setUpUserController;
//# sourceMappingURL=UserController.js.map