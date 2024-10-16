
export function ClientsBtn() {
	const col = document.createElement("col")
	col.classList.add("col-12")
	const btn = document.createElement("button")
	btn.classList.add("btn-cust-nav", "pageLinks")
	btn.type = "button"

	btn.name = "Clients"
	btn.innerHTML = `<i class="fa-solid fa-users"></i>`
	btn.id = "/site/clients.html"

	col.appendChild(btn)
	return col
}

