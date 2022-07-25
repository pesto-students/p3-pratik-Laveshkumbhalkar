

const threeSum = (nums) => {
    let target = 0;
    if (nums.length === 3) {
        if (nums[0]+nums[1]+nums[2] === 0) {
            return [[nums[0],nums[1],nums[2]]];
        }
    }
    
    let results = [];
    let hashMap = {};
    
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            for (let k=j+1; k<nums.length; k++) {
              if (nums[i]+nums[j]+nums[k] === target) {
                if (!hashMap[nums[i]*nums[j]*nums[k]]) {
                    results.push([nums[i],nums[j],nums[k]]);
                    results[results.length-1].sort();
                    hashMap[nums[i]*nums[j]*nums[k]] = true;
                    //console.log(hashMap);
                }
              }
              
            }
        }
    }
    return results;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));

// Time complexity : O(n^2)
// Space complexity : O(1)