import React from 'react'


function Card(props) {
    return (
        <div className="card">
            <header class="card-header">
                <p class="card-header-title">
                    {props.title}
                </p>
            </header>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.image} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content">
                <div className="content">
                    {props.description}
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">Like</a>
                    <a href="#" className="card-footer-item">Edit</a>
                    <a href="#" className="card-footer-item">Delete</a>
                </footer>
            </div>
        </div>
    );
}
export default Card;

