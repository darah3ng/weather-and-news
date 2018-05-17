import React, { Component }  from 'react';
import './Article.css';
import GetArticles from 'hacker-news-top-list';
import Loading from './Loading';
import Failure from './Failure';

function Article(props){
    return (
        <div className="article">
            <h3 className="title">
                {props.title}
            </h3>
            <p className="by">
                by {props.by}
            </p>
            <div>
                <a className="url" href={props.url}>
                    {props.url}
                </a>
            </div>
        </div>
    );
}

function Articles({ articles }) {
    return (
        <div>
            {articles.map(article =>
                <Article
                    by={article.by}
                    key={article.id}
                    title={article.title}
                    url={article.url}
                />
            )}
        </div>
    );
}

class ArticleFeed extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            request: 'LOADING'
        };
    }

    componentWillMount(){
        GetArticles().then((article) => {
            this.setState({articles: article, request: 'SUCCESS'});
        }).catch(() => {
           this.setState({ request: 'FAILURE' });
        });
    }

    render() {
        switch (this.state.request){
            case 'SUCCESS':
                return (
                    <Articles articles={this.state.articles} />
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