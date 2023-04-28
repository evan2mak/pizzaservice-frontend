import styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <h2>About:</h2>
            <br></br>
            <h4>Welcome to Pizza Parlor! We are Group 12 consisting of Evan Tomak, Kelly Streight, and Enoch Wang.</h4>
            <br></br>
            <h4>This is a simple pizza service application that allows a customer to submit an online order. </h4>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h4> We have been able to utilize Postman to grab customer data, and you can find a customer's order history based on their customer ID number. </h4>
            <h4>We also created a home page with a welcome message, a customer section, and ordering functionality, as well as a tracking search.</h4>
            <h4>As for our architecture style, we evidently chose a service-based architecture.</h4>
            <h4>As for our design patterns, we implemented the decorator, factory, and adapter design patterns.</h4>
        </div>
    )
}

export default About;