import { Action } from '@ngrx/store';

// models
import { Product } from '../../models/product.interface';

// load products
export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';

export class LoadProducts implements Action {
    readonly type = LOAD_PRODUCTS;
}

export class LoadProductsFail implements Action {
    readonly type = LOAD_PRODUCTS_FAIL;
    constructor(public payload: any) { }
}

export class LoadProductsSuccess implements Action {
    readonly type = LOAD_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) { }
}

// create products
export const CREATE_PRODUCT = '[Products] Create product';
export const CREATE_PRODUCT_FAIL = '[Products] Create product Fail';
export const CREATE_PRODUCT_SUCCESS = '[Products] Create product Success';

export class CreateProduct implements Action {
    readonly type = CREATE_PRODUCT;
    constructor(public payload: Product) { }
}

export class CreateProductFail implements Action {
    readonly type = CREATE_PRODUCT_FAIL;
    constructor(public payload: any) { }
}

export class CreateProductSuccess implements Action {
    readonly type = CREATE_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

// update products
export const UPDATE_PRODUCT = '[Products] Update product';
export const UPDATE_PRODUCT_FAIL = '[Products] Update product Fail';
export const UPDATE_PRODUCT_SUCCESS = '[Products] Update product Success';

export class UpdateProduct implements Action {
    readonly type = UPDATE_PRODUCT;
    constructor(public payload: Product) { }
}

export class UpdateProductFail implements Action {
    readonly type = UPDATE_PRODUCT_FAIL;
    constructor(public payload: any) { }
}

export class UpdateProductSuccess implements Action {
    readonly type = UPDATE_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

// delete products
export const DELETE_PRODUCT = '[Products] Delete product';
export const DELETE_PRODUCT_FAIL = '[Products] Delete product Fail';
export const DELETE_PRODUCT_SUCCESS = '[Products] Delete product Success';

export class DeleteProduct implements Action {
    readonly type = DELETE_PRODUCT;
    constructor(public payload: Product) { }
}

export class DeleteProductFail implements Action {
    readonly type = DELETE_PRODUCT_FAIL;
    constructor(public payload: any) { }
}

export class DeleteProductSuccess implements Action {
    readonly type = DELETE_PRODUCT_SUCCESS;
    constructor(public payload: Product) { }
}

// action types
export type ProductsAction
    = LoadProducts
    | LoadProductsFail
    | LoadProductsSuccess
    | CreateProduct
    | CreateProductFail
    | CreateProductSuccess
    | UpdateProduct
    | UpdateProductFail
    | UpdateProductSuccess
    | DeleteProduct
    | DeleteProductFail
    | DeleteProductSuccess;
