import styles from "../../styles/orders.add.module.css";
import { useForm } from 'react-hook-form';
import data from '../../data/data'

const Orders = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    let save = async (values) => {
        console.log(values);
        const response = await data.saveOrder(values.customerId, values);
        console.log(response);
        if(response != null){
            reset();
        }
    }

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.form_title}>Create a New Order</h1>
                <form action="#" onSubmit={handleSubmit(save)}>
                    <div className={styles.main_user_info}>
                        <div className={styles.user_input_box}>
                            <label htmlFor="customerId">Customer ID</label>
                            <input type="text"
                                   id="customerId"
                                   name="customerId"
                                   {...register('customerId',
                                       {required: true,
                                           message: 'please enter a customer ID' })}
                                   placeholder="Enter Customer ID"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="total">Total</label>
                            <input type="text"
                                   id="total"
                                   name="total"
                                   {...register('total',
                                       {required: true,
                                           message: 'please enter a total amount' })}
                                   placeholder="Enter Total"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="shippingAddress">Shipping Address</label>
                            <input type="text"
                                   id="state"
                                   name="shippingAddress.state"
                                   {...register('shippingAddress.state',
                                       {required: true,
                                           message: 'please enter a shipping address state' })}
                                   placeholder="State"/>

                            <input type="text"
                                   id="city"
                                   name="shippingAddress.city"
                                   {...register('shippingAddress.city',
                                       {required: true,
                                           message: 'please enter a shipping address city' })}
                                   placeholder="City"/>

                            <input type="text"
                                   id="postalCode"
                                   name="shippingAddress.postalCode"
                                   {...register('shippingAddress.postalCode',
                                       {required: true,
                                           message: 'please enter a shipping address postal code' })}
                                   placeholder="Postal Code"/>
                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="items">Items</label>
                            <input type="text"
                                   id="name"
                                   name="items.name"
                                   {...register('items.name',
                                       {required: true,
                                           message: 'please enter an item name' })}
                                   placeholder="Name"/>

                            <input type="text"
                                   id="quantity"
                                   name="items.quantity"
                                   {...register('items.quantity',
                                       {required: true,
                                           message: 'please enter a quantity' })}
                                   placeholder="Quantity"/>

                            <input type="text"
                                   id="price"
                                   name="items.price"
                                   {...register('items.price',
                                       {required: true,
                                           message: 'please enter a price' })}
                                   placeholder="Price"/>

                        </div>

                        <div className={styles.user_input_box}>
                            <label htmlFor="payment">Payment</label>

                            <input type="text"
                                   id="method"
                                   name="payment.method"
                                   {...register('payment.method',
                                       {required: true,
                                           message: 'please enter a form of payment' })}
                                   placeholder="method"/>

                            <input type="text"
                                   id="number"
                                   name="payment.number"
                                   {...register('payment.number',
                                       {required: true,
                                           message: 'please enter a credit card number' })}
                                   placeholder="Number"/>

                            <div className={styles.user_input_box}>
                                <label htmlFor="billingAddress">Billing Address</label>

                                <input type="text"
                                       id="billingAddressState"
                                       name="payment.billingAddress.state"
                                       {...register('payment.billingAddress.state',
                                           {required: true,
                                               message: 'please enter a state' })}
                                       placeholder="State"/>

                                <input type="text"
                                       id="billingAddressCity"
                                       name="payment.billingAddress.city"
                                       {...register('payment.billingAddress.city',
                                           {required: true,
                                               message: 'please enter a city' })}
                                       placeholder="City"/>

                                <input type="text"
                                       id="billingAddressPostalCode"
                                       name="payment.billingAddress.postalCode"
                                       {...register('payment.billingAddress.postalCode',
                                           {required: true,
                                               message: 'please enter a postal code' })}
                                       placeholder="Postal Code"/>
                            </div>
                        </div>

                    </div>

                    <div className={styles.form_submit_btn}>
                        <input type="submit" value="save" ></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Orders;