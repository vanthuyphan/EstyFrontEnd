import { IProduct } from './product';

import API from '../../API/API';
import {products, productsInSale} from '../../data/datas'
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';
export interface IProductState {
    product: IProduct;
}
export const INITIAL_STATE: IProductState = {
    product: null,
}

export function rootReduce(state: IProductState, action): IProductState {
    switch (action.type) {
        case 'add':
           
        case 'update':
            
    }
    return state;
}

export function getDatas(){
    return products;
}

export function addProduct(data, vendorId , vendorName){
    products.push(data);
    for (let i = 0; i < products.length; i ++ )
    console.log("----->" + products[i].name);
    let cloneObj = new data.constructor();
    cloneObj.inCard = false;
    cloneObj.vendor = {id:vendorId , name:vendorName};
    productsInSale.push( cloneObj );

}

