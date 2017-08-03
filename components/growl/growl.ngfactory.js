"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./growl");
var i2 = require("@angular/common");
var i3 = require("../dom/domhandler");
exports.GrowlModuleNgFactory = i0.ɵcmf(i1.GrowlModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i1.GrowlModule, i1.GrowlModule, [])]);
});
var styles_Growl = [];
exports.RenderType_Growl = i0.ɵcrt({ encapsulation: 2, styles: styles_Growl,
    data: {} });
function View_Growl_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, [['msgel', 1]], null, 22, 'div', [['aria-live',
                'polite'], ['class', 'ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.onMessageClick(_v.context.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵpod({ 'ui-growl-message-info': 0, 'ui-growl-message-warn': 1,
            'ui-growl-message-error': 2, 'ui-growl-message-success': 3 }), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 17, 'div', [['class', 'ui-growl-item']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                     '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['class', 'ui-growl-icon-close fa fa-close']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.remove(_v.context.index, i0.ɵnov(_v, 0)) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i0.ɵted(null, ['\n                     '])),
        (_l()(), i0.ɵeld(0, null, null, 2, 'span', [['class', 'ui-growl-image fa fa-2x']], null, null, null, null, null)),
        i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
        i0.ɵpod({ 'fa-info-circle': 0, 'fa-exclamation-circle': 1, 'fa-close': 2, 'fa-check': 3 }),
        (_l()(), i0.ɵted(null, ['\n                     '])), (_l()(), i0.ɵeld(0, null, null, 6, 'div', [['class', 'ui-growl-message']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 1, 'span', [['class', 'ui-growl-title']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['', ''])), (_l()(),
            i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'p', [], [[8, 'innerHTML', 1]], null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                     '])), (_l()(), i0.ɵted(null, ['\n                     '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'div', [['style', 'clear: both;']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n            ']))], function (_ck, _v) {
        var currVal_0 = 'ui-growl-item-container ui-state-highlight ui-corner-all ui-shadow';
        var currVal_1 = _ck(_v, 2, 0, (_v.context.$implicit.severity == 'info'), (_v.context.$implicit.severity == 'warn'), (_v.context.$implicit.severity == 'error'), (_v.context.$implicit.severity == 'success'));
        _ck(_v, 1, 0, currVal_0, currVal_1);
        var currVal_2 = 'ui-growl-image fa fa-2x';
        var currVal_3 = _ck(_v, 10, 0, (_v.context.$implicit.severity == 'info'), (_v.context.$implicit.severity == 'warn'), (_v.context.$implicit.severity == 'error'), (_v.context.$implicit.severity == 'success'));
        _ck(_v, 9, 0, currVal_2, currVal_3);
    }, function (_ck, _v) {
        var currVal_4 = _v.context.$implicit.summary;
        _ck(_v, 15, 0, currVal_4);
        var currVal_5 = _v.context.$implicit.detail;
        _ck(_v, 17, 0, currVal_5);
    });
}
function View_Growl_0(_l) {
    return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { containerViewChild: 0 }), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, [[1, 0], ['container', 1]], null, 6, 'div', [], [[4, 'zIndex', null]], null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers,
            i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Growl_1)), i0.ɵdid(802816, null, 0, i2.NgForOf, [i0.ViewContainerRef,
            i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(),
            i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.styleClass;
        var currVal_2 = 'ui-growl ui-widget';
        _ck(_v, 3, 0, currVal_1, currVal_2);
        var currVal_3 = _co.style;
        _ck(_v, 4, 0, currVal_3);
        var currVal_4 = _co.value;
        _ck(_v, 7, 0, currVal_4);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.zIndex;
        _ck(_v, 2, 0, currVal_0);
    });
}
exports.View_Growl_0 = View_Growl_0;
function View_Growl_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 2, 'p-growl', [], null, null, null, View_Growl_0, exports.RenderType_Growl)), i0.ɵprd(512, null, i3.DomHandler, i3.DomHandler, []), i0.ɵdid(4636672, null, 0, i1.Growl, [i0.ElementRef, i3.DomHandler, i0.IterableDiffers], null, null)], function (_ck, _v) {
        _ck(_v, 2, 0);
    }, null);
}
exports.View_Growl_Host_0 = View_Growl_Host_0;
exports.GrowlNgFactory = i0.ɵccf('p-growl', i1.Growl, View_Growl_Host_0, { sticky: 'sticky', life: 'life', style: 'style', styleClass: 'styleClass',
    immutable: 'immutable', value: 'value' }, { onClick: 'onClick', onClose: 'onClose',
    valueChange: 'valueChange' }, []);
//# sourceMappingURL=growl.ngfactory.js.map