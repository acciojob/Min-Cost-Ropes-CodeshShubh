function mincost(arr)
{ 
//write your code here
// return the min cost
	
 if (arr.length <= 1) return 0; 
    let totalCost = 0;
    arr.sort((a, b) => a - b);

    arr.forEach(() => {
        if (arr.length > 1) {
            const rope1 = arr.shift();
            const rope2 = arr.shift();
            totalCost += cost;
            arr.push(cost);
            arr.sort((a, b) => a - b);
        }
    });

    return totalCost;
}

module.exports=mincost;
