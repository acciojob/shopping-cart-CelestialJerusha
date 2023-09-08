//your code here
var add = document.getElementById("add");
add.addEventListener("click",add1);
var total = document.getElementById("total");
var sum = 0;

function add1(){
	var item = document.getElementById("item-name-input").value;
	var price = document.getElementById("item-price-input").value;
	var p = document.getElementById("para");
	var tBody = document.getElementById("tb");
	tb.innerHTML+=`
			 <tr>
				<td>${item}</td>
				<td>${price}</td>
			</tr>
 `
	sum+=parseInt(price);
	total.innerHTML = "Total: "+sum;
}
total.innerHTML = "Total: "+sum;






