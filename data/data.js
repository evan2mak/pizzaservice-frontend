//let host = process.env.NEXT_PUBLIC_BACKEND_HOST;

let host = "http://localhost:8080";

let findAllOrders = (customerId) => {
    return fetch(host + '/orders/' + customerId)
        .then(x => x.json());
};

let saveOrder = (customerId, orders) => {
    return fetch(host + "/orders/" + customerId, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            customerId: orders.customerId,
            shippingAddress: {
                state: orders.shippingAddress.state,
                city: orders.shippingAddress.city,
                postalCode: orders.shippingAddress.postalCode,
            },
            items: {
                pepperoni: {
                    add: orders.items.pepperoni.add,
                },
                sausage: {
                    add: orders.items.sausage.add,
                },
                extraCheese: {
                    add: orders.items.extraCheese.add,
                },
                quantity: orders.items.quantity,
                totalCost: orders.items.totalCost,
            },
            payment: {
                method: orders.payment.method,
                number: orders.payment.number,
                billingAddress: {
                    state: orders.payment.billingAddress.state,
                    city: orders.payment.billingAddress.city,
                    postalCode: orders.payment.billingAddress.postalCode,
                }
            },
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders: findAllOrders,
    saveOrder: saveOrder
};

export default data;