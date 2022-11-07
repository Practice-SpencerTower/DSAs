// Array Of Products - AlgoExpert

// Initial Solution
function arrayOfProducts(array) {
    // two arrays of products
    // one array contains the products from left to right
    // one array contains the products from right to left

    // loop through input array
    // for each value, grab value to left of that index in left array, product to right of that
    // index in right array
    // multiply the two products
    // push the value to the output array at the same index

    const leftToRightProducts = [];
    const rightToLeftProducts = [];
    const result = [];

    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
        leftToRightProducts.push(product);
    }

    product = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        product *= array[i];
        rightToLeftProducts.unshift(product);
    }

    for (i = 0; i < array.length; i++) {
        if (i === 0) {
            result.push(rightToLeftProducts[i + 1]);
        } else if (i === array.length - 1) {
            result.push(leftToRightProducts[i - 1]);
        } else {
            let finalProduct =
                leftToRightProducts[i - 1] * rightToLeftProducts[i + 1];
            result.push(finalProduct);
        }
    }
    return result;
}

// Updated Solution
function arrayOfProducts(array) {
    const leftProducts = new Array(array.length).fill(1);
    const rightProducts = new Array(array.length).fill(1);
    const result = new Array(array.length).fill(1);

    let leftProduct = 1;
    for (let i = 0; i < array.length; i++) {
        leftProducts[i] = leftProduct;
        leftProduct *= array[i];
    }

    let rightProduct = 1;
    for (let i = array.length - 1; i >= 0; i--) {
        rightProducts[i] = rightProduct;
        rightProduct *= array[i];
    }

    for (i = 0; i < array.length; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }
    return result;
}
