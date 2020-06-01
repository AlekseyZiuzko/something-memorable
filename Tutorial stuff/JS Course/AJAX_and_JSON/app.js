document.querySelector("#button1").addEventListener("click", loadCustomer);
document.querySelector("#button2").addEventListener("click", loadCustomers);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customer.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Phone: ${customer.phone}</li>
                    <li>Works at: ${customer.company}</li>
                </ul>
            `;
            document.querySelector("#customer").innerHTML = output;
        }
    };

    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "customers.json", true);

    xhr.onload = function () {
        if (xhr.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = "";

            customers.forEach((customer) => {
                output += `
                    <ul>
                        <li>ID: ${customer.id}</li>
                        <li>Name: ${customer.name}</li>
                        <li>Phone: ${customer.phone}</li>
                        <li>Works at: ${customer.company}</li>
                    </ul>
                `;
            });

            document.querySelector("#customers").innerHTML = output;
        }
    };

    xhr.send();
}
