"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./editor");
var i2 = require("@angular/common");
var i3 = require("../common/shared");
var i4 = require("@angular/forms");
var i5 = require("../dom/domhandler");
exports.EditorModuleNgFactory = i0.ɵcmf(i1.EditorModule, [], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, []], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i2.NgLocalization, i2.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(512, i2.CommonModule, i2.CommonModule, []), i0.ɵmpd(512, i3.SharedModule, i3.SharedModule, []), i0.ɵmpd(512, i1.EditorModule, i1.EditorModule, [])]);
});
var styles_Editor = [];
exports.RenderType_Editor = i0.ɵcrt({ encapsulation: 2, styles: styles_Editor,
    data: {} });
function View_Editor_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 3, 'div', [['class',
                'ui-editor-toolbar ui-widget-header ui-corner-top']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        i0.ɵncd(null, 0), (_l()(), i0.ɵted(null, ['\n            ']))], null, null);
}
function View_Editor_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 76, 'div', [['class',
                'ui-editor-toolbar ui-widget-header ui-corner-top']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 25, 'span', [['class', 'ql-formats']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 10, 'select', [['class', 'ql-header']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                      '])), (_l()(), i0.ɵeld(0, null, null, 1, 'option', [['value', '1']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Heading'])), (_l()(), i0.ɵted(null, ['\n                      '])), (_l()(), i0.ɵeld(0, null, null, 1, 'option', [['value', '2']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Subheading'])), (_l()(), i0.ɵted(null, ['\n                      '])), (_l()(), i0.ɵeld(0, null, null, 1, 'option', [['selected', '']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Normal'])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 10, 'select', [['class', 'ql-font']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                      '])), (_l()(), i0.ɵeld(0, null, null, 1, 'option', [['selected', '']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['Sans Serif'])), (_l()(), i0.ɵted(null, ['\n                      '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'option', [['value', 'serif']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Serif'])), (_l()(), i0.ɵted(null, ['\n                      '])),
        (_l()(), i0.ɵeld(0, null, null, 1, 'option', [['value', 'monospace']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['Monospace'])), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 7, 'span', [['class', 'ql-formats']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Bold'], ['class', 'ql-bold']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Italic'], ['class', 'ql-italic']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Underline'], ['class', 'ql-underline']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵeld(0, null, null, 5, 'span', [['class', 'ql-formats']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'select', [['class', 'ql-color']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'select', [['class', 'ql-background']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 16, 'span', [['class', 'ql-formats']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Ordered List'], ['class', 'ql-list'], ['value', 'ordered']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Unordered List'],
            ['class', 'ql-list'], ['value', 'bullet']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 9, 'select', [['class', 'ql-align']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'option', [['selected', '']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'option', [['value', 'center']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                        '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'option', [['value', 'right']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                        '])), (_l()(), i0.ɵeld(0, null, null, 0, 'option', [['value', 'justify']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵted(null, ['\n                '])),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 7, 'span', [['class', 'ql-formats']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Insert Link'], ['class', 'ql-link']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Insert Image'], ['class', 'ql-image']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])), (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Insert Code Block'], ['class', 'ql-code-block']], null, null, null, null, null)),
        (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(), i0.ɵeld(0, null, null, 3, 'span', [['class', 'ql-formats']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                    '])),
        (_l()(), i0.ɵeld(0, null, null, 0, 'button', [['aria-label', 'Remove Styles'],
            ['class', 'ql-clean']], null, null, null, null, null)), (_l()(), i0.ɵted(null, ['\n                '])), (_l()(),
            i0.ɵted(null, ['\n            ']))], null, null);
}
function View_Editor_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵeld(0, null, null, 11, 'div', [], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer], { klass: [0,
                'klass'], ngClass: [1, 'ngClass'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Editor_1)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_Editor_2)), i0.ɵdid(16384, null, 0, i2.NgIf, [i0.ViewContainerRef,
            i0.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i0.ɵted(null, ['\n            '])), (_l()(), i0.ɵeld(0, null, null, 1, 'div', [['class',
                'ui-editor-content']], null, null, null, null, null)), i0.ɵdid(278528, null, 0, i2.NgStyle, [i0.KeyValueDiffers,
            i0.ElementRef, i0.Renderer], { ngStyle: [0, 'ngStyle'] }, null), (_l()(), i0.ɵted(null, ['\n        '])), (_l()(), i0.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.styleClass;
        var currVal_1 = 'ui-widget ui-editor-container ui-corner-all';
        _ck(_v, 2, 0, currVal_0, currVal_1);
        var currVal_2 = _co.toolbar;
        _ck(_v, 5, 0, currVal_2);
        var currVal_3 = !_co.toolbar;
        _ck(_v, 8, 0, currVal_3);
        var currVal_4 = _co.style;
        _ck(_v, 11, 0, currVal_4);
    }, null);
}
exports.View_Editor_0 = View_Editor_0;
function View_Editor_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, null, null, 4, 'p-editor', [], null, null, null, View_Editor_0, exports.RenderType_Editor)),
        i0.ɵprd(5120, null, i4.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i1.Editor]), i0.ɵprd(512, null, i5.DomHandler, i5.DomHandler, []),
        i0.ɵdid(4243456, null, 1, i1.Editor, [i0.ElementRef, i5.DomHandler], null, null), i0.ɵqud(335544320, 1, { toolbar: 0 })], null, null);
}
exports.View_Editor_Host_0 = View_Editor_Host_0;
exports.EditorNgFactory = i0.ɵccf('p-editor', i1.Editor, View_Editor_Host_0, { style: 'style', styleClass: 'styleClass', placeholder: 'placeholder',
    readonly: 'readonly', formats: 'formats' }, { onTextChange: 'onTextChange', onSelectionChange: 'onSelectionChange',
    onInit: 'onInit' }, ['p-header']);
//# sourceMappingURL=editor.ngfactory.js.map