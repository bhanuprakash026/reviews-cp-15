// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {currentCarouselIndex: 0}

  onClickLeftArrow = () => {
    const {currentCarouselIndex} = this.state
    if (currentCarouselIndex > 0) {
      this.setState(prevState => ({
        currentCarouselIndex: prevState.currentCarouselIndex - 1,
      }))
    }
  }

  onClickRightArrow = () => {
    const {currentCarouselIndex} = this.state
    const {reviewsList} = this.props

    if (currentCarouselIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentCarouselIndex: prevState.currentCarouselIndex + 1,
      }))
    }
  }

  renderCurrentDetails = currentReviewDetails => {
    const {imgUrl, username, companyName, description} = currentReviewDetails

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} className="profile-img" />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    const {currentCarouselIndex} = this.state
    const {reviewsList} = this.props
    const currentReviewDetails = reviewsList[currentCarouselIndex]

    return (
      <div className="bg-container">
        <h1 className="header">Reviews</h1>
        <div className="carousal-container">
          <button
            className="btn-arrow"
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderCurrentDetails(currentReviewDetails)}
          <button
            className="btn-arrow"
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
