var changeMoney=(function(){
    
    //initializing the coinTypes object with the format weight: "name" of the coin
    var coinsTypes = {
        "200": "£2",
        "100": "£1",
        "50": "50p",
        "20": "20p",
        "10": "10p",
        "5": "5p",
        "2": "2p",
        "1": "1p"
    };
    
    //creating a coinsValues array with the keys of the coinTypes object
    var coinsValues = Object.keys(coinsTypes)
        .map(function (a) { return parseInt(a, 10); })
        .sort(function (a, b) { return a < b; });

    function parseAmount(amount) {
        
        //purging out undefined or invalid characters inputs as 0s
        if (amount.match(/^(£?)\d+(\.\d+)*(p?)$/)===null)
            return 0;

        //removing the pleonastic trailing "p"
        amount=amount.replace(/p$/,"");
        
        //dealing with amount with the pound or decimal symbol included
        if (amount.match(/£/) || amount.match(/\./)) {
            amount=amount.replace(/£/, "");
            return Math.round(+amount*100);
        }

        //residual case, for values expressed in pennies only
        return Math.round(+amount);
    }
    
    //core function, returning the minimum amount of coins needed
    return function MoneyChanger(amount) {
        //prefiltering of potentially invalid inputs
        if (typeof amount === "string") amount = parseAmount(amount);
        else if (typeof amount !== "number") amount = 0;
        
        //dealing with null or invalid inputs
        if (amount===0) return null;
        
        //initialising the result object and then filling it with the required
        //values; its format is {coinName: necessaryCoins}
        var result={};
        for (var i=0;i<coinsValues.length;i++){
            var coinValue = coinsValues[i];
            if (amount>=coinValue){
                result[coinsTypes[coinValue]]=Math.floor(amount/coinValue);
                amount%=coinValue;
            }
        }
        return result;
    };
})();
