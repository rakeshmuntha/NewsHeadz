import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imgurl, newsurl, author, date, source } = this.props;
        return (

            <div className="card my-3">
                <div>
                    <span className="badge rounded-pill bg-danger" style={{
                        display: "flex",
                        justifyContent: 'flex-end',
                        position: "absolute",
                        right: 0
                    }}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>

                </div>
                <img src={imgurl ? imgurl : "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} className="card-img-top" alt="..." />
                <div className="card-body">

                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsurl} rel="noreferrer" target='_blank' className="btn btn-dark">Read more</a>
                </div>
            </div >

        )
    }
}

export default NewsItem