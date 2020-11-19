/**
 * This file provides simple CRUD services for product model.
 * Any other specific business related to product should be implemented in another file, such as sold-products-report.js, bought-products-report.js, etc.
 */

//this instance will be exported because we want to make it singleton. View more about different way to do singleton: https://medium.com/@dmnsgn/singleton-pattern-in-es6-d2d021d150ae
class ProductCrudService {

    /**
     * Return a promise with productDescription value if success.
     * Note: this method has not execute the business logic (which would be run in a long time - WAIT_MILLISECONDS) yet.
     */
    createPromiseToFindProductDescription(productId) {
        const WAIT_MILLISECONDS = 250;
        return new Promise(function(resolve, reject) {
            setTimeout( function() {
                if (productId && productId > 0) {
                    let productDescription = "random_product_" + process.hrtime.bigint();
                    resolve(productDescription);
                } else{
                    reject(new Error("productId must be greater than 0"));
                }
            }, WAIT_MILLISECONDS);
        })
    }
}

module.exports = new ProductCrudService();