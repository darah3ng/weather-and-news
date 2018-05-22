import React, { Component }  from 'react';
import './Article.css';
import GetArticles from 'hacker-news-top-list';
import Loading from './Loading';
import Failure from './Failure';
import Moment from 'moment';

function convertDate( unixTime ) {
    return (Moment.unix(unixTime).format('dddd, MMMM Do, YYYY h:mm:ss A')).toString();
}

function Article(props){
    return (
        <div className="article">
            <h3 className="title">
                {props.title}
            </h3>
            <p className="by">
                By {props.by}
            </p>
            <p className="date">
                Date: {props.date}
            </p>
            <p>
                <a className="url" href={props.url}>
                    {props.url}
                </a>
            </p>
        </div>
    );
}

function Articles({ articles }) {
    return (
        <div>
            {articles.map(article =>
                <Article
                    key={article.id}
                    by={article.by}
                    date={convertDate(article.time)}
                    title={article.title}
                    url={article.url}
                />
            )}
        </div>
    );
}

function FilterNews({ onChange, value }) {
    return (
        <input id="search-input"
            onChange={onChange}
            value={value}
        />
    );
}


class ArticleFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            filterArticles: [],
            request: 'LOADING',
            articleTitle: ' '
        };
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentWillMount() {
        GetArticles().then((articles) => {
            this.setState({ articles: articles, filterArticles: articles, request: 'SUCCESS' });
        }).catch(() => {
            this.setState({ request: 'FAILURE' });
        });
    }

    onFilterChange(event) {
        this.setState({ articleTitle: event.target.value });
        if(event.target.value){
            const filterArticle = this.state.articles.filter(function (article) {
                return (article.title.toString().toLowerCase().trim().match(event.target.value.toString().toLowerCase()) || article.title.toString().trim().toLowerCase().indexOf(event.target.value.toString().toLowerCase()) >= 0)
            });
            this.setState({ filterArticles: filterArticle });
        }
    }

    render() {
        switch (this.state.request){
            case 'SUCCESS':
                return (
                    <div>
                        <span id="textSearch">> Search:</span> <FilterNews onChange={this.onFilterChange} value={this.state.articleTitle} />
                        <Articles articles={this.state.filterArticles} />
                    </div>
                );
            case 'LOADING':
                return <Loading />;
            case 'FAILURE':
            default:
                return <Failure />;
        }
    }
}

export default ArticleFeed;