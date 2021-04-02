/**
 * Created by Jacky.Gao on 2017-02-07.
 */
import {alert} from '../MsgBox.js';
import {setDirty} from '../Utils.js';

export default class RemoteDialog{
    constructor(datasources){
        this.datasources=datasources;
        this.dialog=$(`<div class="modal fade" role="dialog" aria-hidden="true" style="z-index: 10000">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                            &times;
                        </button>
                        <h4 class="modal-title">
                            ${window.i18n.dialog.remoteDS.title}
                        </h4>
                    </div>
                    <div class="modal-body"></div>
                    <div class="modal-footer">
                    </div>
                </div>
            </div>
        </div>`);
        const body=this.dialog.find('.modal-body'),footer=this.dialog.find(".modal-footer");
        this.initBody(body,footer);
    }
    initBody(body,footer){
        const table=$(`<table class="table table-bordered">
            <thead><tr style="background: #f4f4f4;height: 30px;"><td style="vertical-align: middle">${window.i18n.dialog.remoteDS.datasourceName}</td><td style="vertical-align: middle">${window.i18n.dialog.buildin.select}</td></tr></thead>
        </table>`);
        this.tbody=$(`<tbody></tbody>`);
        table.append(this.tbody);
        body.append(table);
    }
    show(onSelect){
        this.dialog.modal('show');
        this.tbody.empty();
        const _this=this;
        $.ajax({
            url:window._server+"/datasource/loadRemoteDataSource",
            success: function (result) {
                debugger
                result = JSON.parse(result);
                for (let item of result.items) {
                    const name =  item.name;
                    const tr=$(`<tr style="height: 35px;"><td style="vertical-align: middle">${item.name}</td></tr>`);
                    const selectTD=$(`<td style="vertical-align: middle"></td>`);
                    tr.append(selectTD);
                    const selector=$(`<a href="###"><i class="glyphicon glyphicon-hand-up" style="font-size: 13pt"></i></a>`);
                    selector.click(function(){
                        for(let ds of _this.datasources){
                            if(ds.name===name){
                                alert(`${window.i18n.dialog.remoteDS.datasourceName}[`+name+`]${window.i18n.dialog.remoteDS.datasourceExist}`);
                                return;
                            }
                        }
                        onSelect.call(this,name);
                        setDirty();
                        _this.dialog.modal('hide');
                    });
                    selectTD.append(selector);
                    _this.tbody.append(tr);
                }
            },
            error:function(response){
                if(response && response.responseText){
                    alert("服务端错误："+response.responseText+"");
                }else{
                    alert(`${window.i18n.dialog.buildin.loadFail}`);
                }
            }
        });
    }
}