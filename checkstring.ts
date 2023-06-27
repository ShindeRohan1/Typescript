function CHKstring(str:string):boolean
{

   var substr:string = "marvellous";
   return str.includes(substr);
}

var str:string = "pune kothrud marvellous infotech";
var bool:boolean = CHKstring(str)
console.log(bool);