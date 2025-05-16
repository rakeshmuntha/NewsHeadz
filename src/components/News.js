import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'us', pagesize: 6, category: 'general',
    }
    static propTypes = {
        country: PropTypes.string, pagesize: PropTypes.number, category: PropTypes.string,
    }
    finalizefirstchar = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state =
        {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `NewsDonkey - ${this.finalizefirstchar(this.props.category)}`
    }

    async updatenews() {

        this.props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        this.props.setProgress(40)
        let data = await fetch(url);
        let parseddata = await data.json();
        // console.log("this is update");
        console.log(this.state.page);
        // console.log(url);
        // console.log(parseddata.articles);
        this.props.setProgress(70)

        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false, page: 2 })
        this.props.setProgress(100)
    }


    async componentDidMount() {
        this.updatenews();
    }
    // handleprevbutton = () => {
    //     this.setState(
    //         (prevState) => ({ page: prevState.page - 1 }),
    //         this.updatenews
    //     );
    // }
    // handlenextbutton = () => {
    //     this.setState(
    //         (prevState) => ({ page: prevState.page + 1 }),
    //         this.updatenews
    //     );
    // }

    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        this.setState({ page: this.state.page + 1 });

        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log("this is fetch more data");
        console.log(this.state.page);
        console.log(parseddata.articles);
        this.setState({ articles: this.state.articles.concat(parseddata.articles), totalResults: parseddata.totalResults, loading: false })

    };


    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '30px' }}>NewsDonkey - Top Headlines from {this.finalizefirstchar(this.props.category)}</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading && <Spinner />} 
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element, index) => {
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
                        <button disabled={this.state.page > Math.ceil(this.state.totalResults) / this.props.pagesize} onClick={this.handlenextbutton} type="button" className="btn btn-dark">Next &#8250;</button>
                    </div> */}

            </div>
        )
    }
}

export default News