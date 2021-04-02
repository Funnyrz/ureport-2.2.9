import CodeMirror from 'codemirror';
import '../../node_modules/codemirror/addon/hint/show-hint.js';
import '../../node_modules/codemirror/addon/lint/lint.js';
import ParameterTable from './ParameterTable.js';
import {alert} from '../MsgBox.js';
import {setDirty} from '../Utils.js';
import PreviewDataDialog from './PreviewDataDialog.js'
export default class SelectDatasetDialog {
    constructor(db, data) {
        this.dialog=$(`<div class="modal fade" role="dialog" aria-hidden="true" style="z-index: 10000;overflow: auto">
            <div class="modal-dialog modal-lg" style="width: 980px">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 class="modal-title">
                            ${window.i18n.dialog.selectDataset.title}
                        </h4>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>`);
        const body=this.dialog.find('.modal-body'),footer=this.dialog.find(".modal-footer");
        const container=$(`<div></div>`);
        body.append(container);
        const leftContainer=$(`<div style="width: 250px;display: inline-block;vertical-align: top;height: 450px;overflow: auto;"></div>`);
        const rightContainer=$(`<div style="display: inline-block"></div>`);
        container.append(leftContainer);
        container.append(rightContainer);
        // this.initTables(leftContainer);

        // this.initSqlEditor(rightContainer);
        // this.initParameterEditor(rightContainer);
        // this.initButton(footer);
    }
    show(onSave, params) {
        
}