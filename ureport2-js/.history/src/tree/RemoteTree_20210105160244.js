import uuid from 'node-uuid';
import {alert,confirm,dialog} from '../MsgBox.js';
import SqlDatasetDialog from '../dialog/SqlDatasetDialog.js';
import BaseTree from './BaseTree.js';
export default class DatabaseTree extends BaseTree {
    constructor(container, datasources, ds, springDialog, context) {
        super();
        this.type = 'remote';
        this.datasources = datasources;
        this.datasets = ds.datasets || [];
        this.springDialog = springDialog;
        this.context = context;
        this.id = uuid.v1();
        this.name = ds.name;
        this.beanId = ds.beanId;
        this.init(container);
    }
    init() { 
        $.ajax({
            url: window._server + "/datasource/loadRemoteDataSource",
            type: 'POST',
            data: {},
            success: function (resp) {
                console.log("加载数据源"+resp)
                resp = JSON.parse(resp);
                const items = resp.items;
                for (var i = 0; i < items.length; i++) {
                    const item = items[i];
                    this.treeContainer = $(`<div class="tree" style="margin-left: 10px"></div>`);
                    container.append(this.treeContainer);
                    this.ul = $(`<ul style="padding-left: 20px;"></ul>`);
                    this.treeContainer.append(this.ul);
                    const bTree = new BuildinTree();
                    bTree._buildDatasource(item.id,item.name);
                    for (let dataset of this.datasets) {
                        const fieldsUL = this.addDataset(dataset);
                        this.buildFileds(dataset, fieldsUL);
                    }
                }
            },
            error: function (response) {
            }
        });
    }
}