function CHKstring(str) {
    var substr = "marvellous";
    return str.includes(substr);
}
var str = "pune kothrud marvellous infotech";
var bool = CHKstring(str);
console.log(bool);
