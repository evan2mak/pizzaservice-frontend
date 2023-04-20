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
                <th>Total</th>
                <th>Shipping Address</th>
                <th>Items</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
            {orders && orders.length > 0 && orders.map((c, i) => (
                <tr key={i}>
                  <td data-label="Customer ID">{c.customerId}</td>
                  <td data-label="Total">{c.total}</td>
                  <td data-label="Shipping Address">
                    {c.shippingAddress.state}, {c.shippingAddress.city}, {c.shippingAddress.postalCode}
                  </td>
                  <td data-label="Items">
                    <ul>
                      {c.items.map((item, j) => (
                          <li key={j}>
                            {item.name} ({item.quantity}) - ${item.price}
                          </li>
                      ))}
                    </ul>
                  </td>
                  <td data-label="Payment">
                    {c.payment.method} - {c.payment.number} - {c.payment.billingAddress.state}, {c.payment.billingAddress.city}, {c.payment.billingAddress.postalCode}
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
