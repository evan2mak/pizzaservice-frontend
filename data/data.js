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
            total: orders.total,
            shippingAddress: {
                state: orders.shippingAddress.state,
                city: orders.shippingAddress.city,
                postalCode: orders.shippingAddress.postalCode,
            },
            items: orders.items,
            payment: {
                method: orders.payment.method,
                number: orders.payment.number,
                billingAddress: {
                    state: orders.payment.state,
                    city: orders.payment.city,
                    postalCode: orders.payment.postalCode,
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