import React from "react";
import './card.css'

const Card = (props) => {
    return (
        <>
            <section className="card">
                {props.children}
            </section>
        </>
    )
}
export default Card;