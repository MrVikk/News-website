import React from 'react'

const NewsItem = props => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props
  return (
    <>
      <div className='my-3'>
        {/* <h2>This is a NewsItem component 2</h2> */}
        <div className='card'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              position: 'absolute',
              right: '0'
            }}
          >
            <span className=' badge rounded-pill bg-danger'>{source}</span>
          </div>
          <img
            src={
              !imgUrl
                ? 'https://tse3.mm.bing.net/th?id=OIP.XIv0iJcy6VtQ_4CsSVqkfwHaHa&pid=Api&P=0&h=180'
                : imgUrl
            }
            className='card-img-top'
            alt='Img'
          />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text'>
              <small className='text-muted'>
                By {!author ? 'Unknown' : author} on{' '}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target='blank' className='btn btn-sm btn-dark'>
              Read more...
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
export default NewsItem
