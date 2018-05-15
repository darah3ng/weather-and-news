import React, { Component }  from 'react';
import './Article.css';
import GetArticles from 'hacker-news-top-list';
import Loading from './Loading';
import Failure from './Failure';

/* NOT WORKING */
// import style from './Article.css';
// function Article(props){
//     return (
//         <div className={style.article}>
//             <h3 className={style.title}>
//                 {props.title}
//             </h3>
//             <p className={style.by}>
//                 by {props.by}
//             </p>
//             <div>
//                 <a className={style.url} href={props.url}>
//                     {props.url}
//                 </a>
//             </div>
//         </div>
//     );
// }

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

function ArticlesFeed({ articles }) {
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

class Articles extends Component {
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
                    <ArticlesFeed articles={this.state.articles} />
                );
            case 'LOADING':
                return <Loading />;
            case 'FAILURE':
            default:
                return <Failure />;
        }
    }
}

export default Articles;