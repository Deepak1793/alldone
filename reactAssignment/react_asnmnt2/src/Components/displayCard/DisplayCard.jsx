import React from 'react'

export default function DisplayCard(props) {
    return (
        <div className="container py-4 mt-4">
            <div data-testid='card' className="card m-4" style={{ width: "max" }}>
                <div className="card-body">
                    <img src={props.urlToImage} className="card-img-top" alt="..." />
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">{props.url}</p>
                </div>
            </div>
        </div>
    )
}
