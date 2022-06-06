/**
 * Given an array of integers nums and integer target, return indices of the 2 numbers such that they add up to target
 * Assume 1, each input has exactly one solution, and you may not use the same element twice
 * Return the answer in any order
 * 
 * Example: nums = [2,7,11,15]
 * target = 9
 * Output: [0,1]
 * Because: nums[0] + nums[1] = target (9)
 */


/**
 * 
 * @param {array} nums - Array of intergers
 * @param {integer} target - Target amount of sum of 2 indices
 * @returns {array} array of indices adding up to target
 */
const targetIndices = (nums, target) => {
    let ind = [];

    //filter to create a new array of integers lesser or equal to target.
    if(Array.isArray(nums)) {
        
        target = parseInt(target);

        let sharded_nums = nums;
        
        //Solution 1: This has a time complexity of 0(N*N) since it loops through the array to get the remainder, it then loops through the array to get the index Of the remainder.
        // for(let i = 0; i < sharded_nums.length; i++) {
        //     let remainder = target - sharded_nums[i];

        //     let remainder_index =  sharded_nums.indexOf(remainder);

        //     if(remainder_index > -1) {
        //         ind.push(i, remainder_index);
        //     }

        //     sharded_nums++

        // }

        //Solution 2: This has a time complexity of 0(N) since it loops through once and uses a hashMap to check if the remainder is already present in the hashmap using it's key,value pairing;
        // More optimal
        let arr_set = new Map();

        for(let i = 0; i < sharded_nums.length; i++) {
            let remainder = target - sharded_nums[i];

            if(arr_set.has(remainder)) {
                return [arr_set.get(remainder), i]
            } else {
                arr_set.set(sharded_nums[i], i);
            }

        }
    }
    
    return ind;
}

const arr = [1,7,11,15,8,2];
const test_target = 9;

console.log(targetIndices(arr, test_target));