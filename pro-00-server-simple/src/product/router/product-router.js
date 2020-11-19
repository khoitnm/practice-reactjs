//Wrapper function (function (exports, require, module, __filename, __dirname) {...}

const router = require('express').Router()
const productCrudService = require('@src/product/service/product-crud-service');

/**
 * This endpoint returning response by using promise-then approach
 */
router.get('/product/:productId/promise',(request,response)=>{
    const productId = request.params.productId;

    const productDescriptionPromise =
        productCrudService.createPromiseToFindProductDescription(productId)
        .then((productDescription) => {
            response.send(productDescription);
        })
        .catch((error) => {
            let errorMessage = `Unexpected problem with promise. ErrorName: '${error.name}'. ErrorMessage: '${error.message}'`;
            console.error(errorMessage);
            response.send(errorMessage);
        });
});

/**
 * This endpoint returning response by using async-await approach which makes the code much cleaner because it can avoid nested functions.
 */
router.get('/product/:productId/async',async (request,response)=>{
    const productId = request.params.productId;
    try {
        const productDescription = await productCrudService.createPromiseToFindProductDescription(productId);
        response.send(productDescription);
    } catch (error) {
        let errorMessage = `Unexpected problem with promise. ErrorName: '${error.name}'. ErrorMessage: '${error.message}'`;
        console.error(errorMessage);
        response.send(errorMessage);
    }
});

module.exports = router;