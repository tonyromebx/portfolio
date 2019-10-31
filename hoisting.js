const bills = {
	billValues : [124,48,268,180],
	marksBills: [77,375,110,45],
	tips:[],
	paid:[],
	markTips:[],
	markPaid:[],
	markCalcuTip : function(){
			for(let i = 0; i < this.marksBills.length; i++){
				const tip = this.marksBills[i];
				if(tip <= 100){
					this.markTips.push((tip/100) * 20)
					this.markPaid.push((tip/100) * 20 + tip)
				}else if(tip > 100 && tip <= 300){
					this.markTips.push((tip/100) * 10)
					this.markPaid.push((tip/100) * 10 + tip)
				}else{
					this.markTips.push((tip/100) * 25)
					this.markPaid.push((tip/100) * 25 + tip)
				}
			}
		},
	calcuTip : function(){
			for(let i = 0; i < this.billValues.length; i++){
				const tip = this.billValues[i];
				if(tip <= 50){
					this.tips.push((tip/100) * 20)
					this.paid.push((tip/100) * 20 + tip)
				}else if(tip > 50 && tip <= 200){
					this.tips.push((tip/100) * 15)
					this.paid.push((tip/100) * 15 + tip)
				}else{
					this.tips.push((tip/100) * 10)
					this.paid.push((tip/100) * 10 + tip)
				}
			}
		}
}


const averageTips = (arr)=>{
	let totalSum = 0;
	for(let i = 0; i < arr.length; i++){
		totalSum += arr[i];
	}
	return totalSum / arr.length
}

bills.calcuTip();
console.log(bills.tips);
console.log(bills.paid);


bills.markCalcuTip();
console.log(bills.markTips);
console.log(bills.marksBills);

console.log(`John's average tips is:`,averageTips(bills.billValues));
console.log(`Mark's average tips is:`,averageTips(bills.marksBills));

if(averageTips(bills.billValues) > averageTips(bills.marksBills)){
	console.log(`Johns Family tips more the Mark's`)
}else{
		console.log(`Mark's Family tips more the John's`)

}

