"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailNotificationTemplate = void 0;
const constants_1 = require("@/constants");
const dtos_1 = require("@/dtos");
const env_1 = require("../env");
function emailNotificationTemplate(projectId, emailBodyHeader, emailBodyContent, highlightInfo) {
    const domain = env_1.ENV === 'prod' ? constants_1.PROD_DOMAIN : env_1.ENV === 'test' ? constants_1.TEST_DOMAIN : constants_1.DEV_DOMAIN;
    const editorLink = `https://${domain}/editor/${projectId}`;
    const defaultAvatar = `https://${domain}/cdn/emails/default.png`;
    let emailBody = '';
    const emailSize = emailBodyContent.length - 1;
    emailBodyContent.forEach((comment, index) => {
        let repliesSize = comment.replies?.length ? -1 : 0;
        if (comment.commentType == dtos_1.CommentsObjectType.REPLY) {
            repliesSize = 1;
            comment.replies = [];
            comment.replies.push(comment);
        }
        let replies = '';
        comment.replies?.forEach((reply, replyIndex) => {
            const avatarUrl = reply.userAvatar ? `https://${env_1.PUBLIC_BUCKET}.s3-${env_1.AWS_REGION}.amazonaws.com/${reply.userAvatar}` : defaultAvatar;
            replies =
                replies +
                    `<table style="${replyIndex === repliesSize ? '' : 'margin-bottom: 20px'};width:100%">
                    <tr>
                        <td style="width: 42px; padding-top: 0; padding-bottom: 11px; line-height: 17px">
                            <div style="width: 35px; height: 35px; border-radius: 6px; overflow: hidden">
                                <img
                                    src="${avatarUrl}"
                                    style="width: 100%; height: 100%; object-fit: cover"
                                />
                            </div>
                        </td>
                        <td style="padding-top: 0; padding-bottom: 11px; line-height: 17px">
                            <p style="font-size: 16px; font-weight: 600; margin: 0">${reply.displayName}</p>
                            <p class="user-email" style="font-size: 14px; color: #858585 !important; margin: 0">${reply.userEmail}</p>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding-left: 0px" colspan="2">
                            <p
                                style="
                                    font-size: 16px;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    line-height: 22px;
                                    padding-top: 2px;
                                    padding-bottom: 2px;
                                    padding-left: 17px;
                                    border-left: 3px solid #00acee;
                                    margin: 0;
                                "
                            >
                                ${reply.commentData}
                            </p>
                        </td>
                    </tr>
                </table>`;
        });
        if (replies != '') {
            replies = `<tr>
                <td style="padding-left: 35px; padding-top: 18px" colspan="2">
                    <div>
                        ${replies}
                    </div>
                </td>
            </tr>`;
        }
        const avatarUrl = comment.userAvatar ? `https://${env_1.PUBLIC_BUCKET}.s3-${env_1.AWS_REGION}.amazonaws.com/${comment.userAvatar}` : defaultAvatar;
        const thread = comment.commentType == dtos_1.CommentsObjectType.REPLY ? '' : `
            <tr>
                <td style="width: 42px; padding-top: 0; padding-bottom: 11px; line-height: 17px">
                    <div style="width: 35px; height: 35px; border-radius: 6px; overflow: hidden">
                        <img
                            src="${avatarUrl}"
                            style="width: 100%; height: 100%; object-fit: cover"
                        />
                    </div>
                </td>
                <td style="padding-top: 0; padding-bottom: 11px; line-height: 17px">
                    <p style="font-size: 16px; font-weight: 600; margin: 0">${comment.displayName}</p>
                    <p class="user-email" style="font-size: 14px; color: #858585 !important; margin: 0">${comment.userEmail}</p>
                </td>
            </tr>
            <tr>
                <td style="padding-left: 0px" colspan="2">
                    <p
                        style="
                            font-size: 16px;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            line-height: 22px;
                            padding-top: 2px;
                            padding-bottom: 2px;
                            padding-left: 17px;
                            border-left: 3px solid #00acee;
                            margin: 0;
                        "
                    >
                        ${comment.commentData}
                    </p>
                </td>
            </tr>`;
        emailBody =
            emailBody +
                `<table style="${index === emailSize ? '' : 'margin-bottom: 20px'};width:100%">
                ${thread}
                ${replies}
            </table>`;
    });
    return `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,600;1,700&display=swap');
                .pixcap-email-btn:hover {
                    color: #ffffff !important;
                    background: #00acee;
                }
                .user-email > a {
                    color: #858585 !important;
                    text-decoration: none;
                }
            </style>
        </head>
        <body>
            <div style="
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background: #ffffff;
                    padding: 30px 60px;
                    font-family: 'Poppins', sans-serif !important;
                    box-sizing: border-box;
                    color: #000000;
                "
            >
                <table>
                    <tr>
                        <td style="padding-right: 20px">
                            <img src="https://${domain}/cdn/emails/symbole-logo.png" height="36" />
                        </td>
                        <td>
                            <img src="https://${domain}/cdn/emails/text-logo.png" height="36" />
                        </td>
                    </tr>
                </table>
                <table style="margin-top: 10px; margin-bottom: 40px">
                    <tr>
                        <td>
                            <p style="font-size: 18px; margin: 0; color: #000000">${emailBodyHeader}</p>
                        </td>
                    </tr>
                </table>
                <center>
                    <div style="width: 580px">
                        ${emailBody}
                    </div>
                    <table style="margin-top: 40px">
                        <tr>
                            <td>
                                <a
                                    class="pixcap-email-btn"
                                    href="${editorLink}?highlight=${Buffer.from(highlightInfo).toString("base64")}"
                                    style="
                                        width: 220px;
                                        margin: auto;
                                        box-sizing: border-box;
                                        display: block;
                                        color: #00acee;
                                        border: 2px solid #00acee;
                                        font-weight: 600;
                                        font-size: 15px;
                                        padding: 13px 40px;
                                        text-align: center;
                                        border-radius: 8px;
                                        cursor: pointer;
                                        text-decoration: none !important;
                                        transition: 0.2s ease;
                                    "
                                >
                                    View file
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding-top: 17px;text-align: center;">
                                <a href="${editorLink}?notification=off" style="font-size: 14px; margin: 0; color: #000000">
                                    Turn off notifications for this file
                                </a>
                            </td>
                        </tr>
                    </table>
                </center>
            </div>
        </body>
    </html>`;
}
exports.emailNotificationTemplate = emailNotificationTemplate;
