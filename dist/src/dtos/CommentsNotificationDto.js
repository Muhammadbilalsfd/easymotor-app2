"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HighlightItemType = exports.CommentsObjectType = exports.CommentsNotificationType = void 0;
var CommentsNotificationType;
(function (CommentsNotificationType) {
    CommentsNotificationType["THREAD"] = "Thread";
    CommentsNotificationType["REPLY"] = "Reply";
    CommentsNotificationType["MENTION"] = "Mention";
})(CommentsNotificationType || (exports.CommentsNotificationType = CommentsNotificationType = {}));
var CommentsObjectType;
(function (CommentsObjectType) {
    CommentsObjectType["THREAD"] = "Thread";
    CommentsObjectType["REPLY"] = "Reply";
})(CommentsObjectType || (exports.CommentsObjectType = CommentsObjectType = {}));
var HighlightItemType;
(function (HighlightItemType) {
    HighlightItemType["PARENT"] = "parent";
    HighlightItemType["CHILD"] = "child";
    HighlightItemType["BOTH"] = "both";
})(HighlightItemType || (exports.HighlightItemType = HighlightItemType = {}));
//# sourceMappingURL=CommentsNotificationDto.js.map