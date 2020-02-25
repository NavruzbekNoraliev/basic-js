module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let maxdepth = 1;
        arr.forEach(element => {
            if(Array.isArray(element)){
                let depth = this.calculateDepth(element) +1
                depth > maxdepth ? maxdepth = depth : ''
            }  
        });
        return maxdepth
    }
};