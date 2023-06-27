function Maximum(no1:number , no2:number):number
{
   if(no1 > no2)
   {
    return no1
   }else{
    return no2;
   }
}

var Max : number = Maximum(22,33)

console.log("maximum number is "+Max)