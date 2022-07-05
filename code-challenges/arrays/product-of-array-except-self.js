// Product of Array Except Self

function productExceptSelf(nums) {
    const products = new Array(nums.length).fill(1);
    
    let leftProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        products[i] = leftProduct;
        leftProduct *= nums[i];
    };
    
    let rightProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        products[i] *= rightProduct;
        rightProduct *= nums[i]
    };

    return products;
};