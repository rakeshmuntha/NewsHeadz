import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    // document.title = `NewsDonkey - ${this.finalizefirstchar(props.category)}`

    const finalizefirstchar = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updatenews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        setloading(true)
        props.setProgress(40)
        let data = await fetch(url);
        let parseddata = await data.json();
        // console.log("this is update");
        console.log(page);
        // console.log(url);
        // console.log(parseddata.articles);
        props.setProgress(70)
        setarticles(parseddata.articles);
        settotalResults(parseddata.totalResults);
        setloading(false);
        setpage(2);
        props.setProgress(100)
    }
    useEffect(() => {
        updatenews();
    }, [])


    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setpage(page + 1)

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pagesize}`;
        setloading(true)
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log("this is fetch more data");
        console.log(page);
        console.log(parseddata.articles);
        setarticles(articles.concat(parseddata.articles));
        settotalResults(parseddata.totalResults);
        setloading(false);
    };



    return (
        <div className='container my-3'>
            <h1 className='text-center' style={{ margin: '30px' }}>NewsDonkey - Top Headlines from {finalizefirstchar(props.category)}</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={loading && <Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element, index) => {
                            return <div className="col-md-4" key={index}>
                                {/* <NewsItem title={element.title.length <= 73 ? element.title : (element.title.slice(0, 73) + "...")} description={element.description.length < 100 ? element.description : element.description.slice(0, 100)} imgurl={element.urlToImage} newsurl={element.url} /> */}
                                <NewsItem title={element.title} description={element.description} imgurl={element.urlToImage} newsurl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>

            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} onClick={this.handleprevbutton} type="button" className="btn btn-dark">&#8249; Prev</button>
                        <button disabled={this.state.page > Math.ceil(this.state.totalResults) / props.pagesize} onClick={this.handlenextbutton} type="button" className="btn btn-dark">Next &#8250;</button>
                    </div> */}

        </div>
    )
}

News.defaultProps = {
    country: 'us', pagesize: 6, category: 'general',
}
News.propTypes = {
    country: PropTypes.string, pagesize: PropTypes.number, category: PropTypes.string,
}

export default News