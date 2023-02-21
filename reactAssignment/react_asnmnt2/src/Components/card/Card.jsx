import React from 'react'

export default function Card(props) {
    const saveNews = () => {
        const newCard = {
            description: props.description,
            url: props.url,
            urlToImage:props.urlToImage,
            title: props.title,
            author:props.author
        }
        props.readLater(newCard);
    };

    return (
        <div className="container py-4 mt-4">
            <div data-testid='card' className="card m-4" style={{ width: "max" }}>
                <img className="myimg" src={props.urlToImage} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.author}</p>
                    <button type="submit" className="btn btn-primary" onClick={() => {
                        saveNews();
                    }} data-testid='id'>Read Later</button>
                    {/* this is card */}
                </div>
            </div>
         </div>
    )
}


