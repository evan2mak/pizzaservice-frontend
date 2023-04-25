import styles from "../../styles/orders.module.css";
import data from '../../data/data'
import { useState, useEffect } from "react";
import Spinner from "../../components/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.orders(1) // Here's where you can toggle customers
      .then((data) => {
        setOrders(data);
        setLoading(false);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, []);

  if (loading) {
    return <Spinner />;
  } else
    return (
      <>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Shipping Address</th>
                <th>Items</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
            {orders && orders.length > 0 && orders.map((c, i) => (
                <tr key={i}>
                  <td data-label="Customer ID"><strong>{c.customerId}</strong></td>
                  <td data-label="Shipping Address">
                    <strong>
                    {c.shippingAddress.state}, {c.shippingAddress.city}, {c.shippingAddress.postalCode}
                    </strong>
                  </td>
                  <td data-label="Items">
                    {c.items.map((item, i) => (
                        // eslint-disable-next-line react/jsx-key
                        <strong>
                        <div key={i}>
                          Pepperoni: {item.pepperoni.add ? "Yes" : "No"}, Sausage: {item.sausage.add ? "Yes" : "No"}, Extra Cheese: {item.extraCheese.add ? "Yes" : "No"}, Quantity: {item.quantity}, Total Cost: {item.totalCost}
                        </div>
                        </strong>
                    ))}
                  </td>
                  <td data-label="Payment">
                  <strong>
                    {c.payment.method} - {c.payment.number} - {c.payment.billingAddress.state}, {c.payment.billingAddress.city}, {c.payment.billingAddress.postalCode}
                  </strong>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </>
    );
};

export default Orders;
