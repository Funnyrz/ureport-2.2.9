import uuid from 'node-uuid';
import {alert,confirm,dialog} from '../MsgBox.js';
import SqlDatasetDialog from '../dialog/SqlDatasetDialog.js';
import BaseTree from './BaseTree.js';
export default class DatabaseTree extends BaseTree{
    constructor(container,datasources,ds,springDialog,context){
        super();
        this.type='spring';
        this.datasources=datasources;
        this.datasets=ds.datasets || [];
        this.springDialog=springDialog;
        this.context=context;
        this.id=uuid.v1();
        this.name=ds.name;
        this.beanId=ds.beanId;
        this.init(container);
    }