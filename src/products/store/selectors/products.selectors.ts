import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store';
import * as fromFeature from '../reducers';
import * as fromProducts from '../reducers/products.reducer';

// models
import { Product } from '../../models/product.interface';

export const getProductState = createSelector(
    fromFeature.getProductsState,
    (state: fromFeature.ProductsState) => state.products
);

export const getProductsEntities = createSelector(
    getProductState,
    fromProducts.getProductsEntities
);

export const getSelectedProduct = createSelector(
    getProductsEntities,
    fromRoot.getRouterState,
    (entities, router): Product => {
        return router.state && entities[router.state.params.productUid];
    }
);

export const getAllProducts = createSelector(
    getProductsEntities,
    (entities) => {
        return Object.keys(entities).map(uid => entities[uid]);
    }
);

export const getProductsLoaded = createSelector(
    getProductState,
    fromProducts.getProductsLoaded
);

export const getProductsLoading = createSelector(
    getProductState,
    fromProducts.getProductsLoading
);
