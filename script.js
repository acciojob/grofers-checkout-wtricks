const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
	
  let sum = 0;
  document.querySelectorAll("td.price").forEach((p) => {
	  sum += parseInt(p.textContent.trim())
  })

	const tr = document.createElement("tr");
	tr.innerHTML = `<td class="price">${sum}</td>`

	document.querySelector("table").appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

