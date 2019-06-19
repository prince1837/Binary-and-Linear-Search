function binarySearch(alist, item){
	let first=0
	let last=alist.length-1
	var found="false"
	while (first<last){
		let midpoint1=(first+last)/2
		let midpoint=parseInt(midpoint1)
		if (alist[midpoint]==item){
			found="true"
			return found
		}
		else{
			if (item<alist[midpoint]){
				last=midpoint-1
			}
			else{
				first=midpoint+1
			}
		}
	}
	return found
}
testlist = [7, 8, 10, 13, 17, 19, 32, 42, 56]
console.log (testlist)
var read=require("readline-sync")
user=read.question("which num... are you want to check its a binary search of place or not?     \n")
console.log(binarySearch(testlist, user))