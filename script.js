//your code here
var add = document.getElementById("add");
var total = document.getElementById("total");
var sum = 0;
add.addEventListener("click",
function add1(){
	var item = document.getElementById("item-name-input").value;
	var price = document.getElementById("item-price-input").value;
	var pr = (document.getElementById("item-price-input").value)*(document.getElementById("item-qty-input").value);
	var q = document.getElementById("item-qty-input").value;
	var p = document.getElementById("para");
	var tBody = document.getElementById("tb");
	if(item !== "" && price !== ""){
	tb.innerHTML+=`
			 <tr>
				<td>${item}</td>
				<td>${pr}</td>
				<td>${q}</td>
			</tr>
 `
	sum+=(parseInt(price)*parseInt(q));
	}
	total.innerHTML = "Total: "+sum;
	document.getElementById("item-name-input").value = "";
	document.getElementById("item-price-input").value = "";
	document.getElementById("item-qty-input").value = "";
});
total.innerHTML = "grand total: "+sum;






