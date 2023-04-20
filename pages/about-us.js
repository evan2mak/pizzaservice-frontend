import styles from "../styles/About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <h2>About:</h2>
            <br></br>
            <p>Hello my name is Evan Tomak and this is my Order Service Webpage. </p>
            <p> This is a simple order service application that allows serves as a way for a customer to submit an order. </p>
            <p> (Note: the customer ID is needed as it corresponds to the functionality of the Postman JSON body information.)</p>
        </div>
    )
}

export default About;