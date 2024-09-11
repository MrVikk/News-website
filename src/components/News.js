import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = props => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  // const newsApiKey = process.env.REACT_APP_NEWS_API;

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=ea9e473f17db4d7b89032544b6e5e129&page=${page}`

    //`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}=${page}&pageSize=${props.pageSize}`;

    setLoading(true)
    let data = await fetch(url)
    props.setProgress(30)
    let parsedData = await data.json()
    props.setProgress(70)
    setArticles(parsedData.articles)
    console.log(parsedData)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - News@Arena`
    updateNews()
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=ea9e473f17db4d7b89032544b6e5e129&page=${page + 1}`
    //`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }

  return (
    <>
      <h1
        className='text-center mb-5'
        style={{ margin: '50px 0px', marginTop: '50px'}}
      >
        News@Arena - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map(element => {
              return (
                <div className='col-md-4' key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ''}
                    description={element.description ? element.description : ''}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}
News.defaultProps = {
  country: 'in',
  pageSize: 12,
  category: 'general'
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}
export default News
