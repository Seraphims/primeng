"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var Messages = (function () {
    function Messages() {
        this.closable = true;
        this.valueChange = new core_1.EventEmitter();
    }
    Messages.prototype.hasMessages = function () {
        return this.value && this.value.length > 0;
    };
    Messages.prototype.getSeverityClass = function () {
        return this.value[0].severity;
    };
    Messages.prototype.clear = function (event) {
        this.value = [];
        this.valueChange.emit(this.value);
        event.preventDefault();
    };
    Object.defineProperty(Messages.prototype, "icon", {
        get: function () {
            var icon = null;
            if (this.hasMessages()) {
                var msg = this.value[0];
                switch (msg.severity) {
                    case 'success':
                        icon = 'fa-check';
                        break;
                    case 'info':
                        icon = 'fa-info-circle';
                        break;
                    case 'error':
                        icon = 'fa-close';
                        break;
                    case 'warn':
                        icon = 'fa-warning';
                        break;
                    case 'success':
                        icon = 'fa-check';
                        break;
                    default:
                        icon = 'fa-info-circle';
                        break;
                }
            }
            return icon;
        },
        enumerable: true,
        configurable: true
    });
    return Messages;
}());
Messages.decorators = [
    { type: core_1.Component, args: [{
                selector: 'p-messages',
                template: "\n        <div *ngIf=\"hasMessages()\" class=\"ui-messages ui-widget ui-corner-all\" style=\"display:block\"\n                    [ngClass]=\"{'ui-messages-info':(value[0].severity === 'info'),\n                    'ui-messages-warn':(value[0].severity === 'warn'),\n                    'ui-messages-error':(value[0].severity === 'error'),\n                    'ui-messages-success':(value[0].severity === 'success')}\">\n            <a href=\"#\" class=\"ui-messages-close\" (click)=\"clear($event)\" *ngIf=\"closable\">\n                <i class=\"fa fa-close\"></i>\n            </a>\n            <span class=\"ui-messages-icon fa fa-fw fa-2x\" [ngClass]=\"icon\"></span>\n            <ul>\n                <li *ngFor=\"let msg of value\">\n                    <span class=\"ui-messages-summary\">{{msg.summary}}</span>\n                    <span class=\"ui-messages-detail\">{{msg.detail}}</span>\n                </li>\n            </ul>\n        </div>\n    "
            },] },
];
/** @nocollapse */
Messages.ctorParameters = function () { return []; };
Messages.propDecorators = {
    'value': [{ type: core_1.Input },],
    'closable': [{ type: core_1.Input },],
    'valueChange': [{ type: core_1.Output },],
};
exports.Messages = Messages;
var MessagesModule = (function () {
    function MessagesModule() {
    }
    return MessagesModule;
}());
MessagesModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                exports: [Messages],
                declarations: [Messages]
            },] },
];
/** @nocollapse */
MessagesModule.ctorParameters = function () { return []; };
exports.MessagesModule = MessagesModule;
//# sourceMappingURL=messages.js.map