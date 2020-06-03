import React from 'react';

class CustomPagination extends React.Component {
  constructor(props) {
    super(props);
    this.onPreviousClick = this.onPreviousClick.bind(this);
    this.onNextClick = this.onNextClick.bind(this);
    this.calculateRange = this.calculateRange.bind(this);
  }

  onPreviousClick() {
    this.props.onPreviousClick();
  }

  onNextClick() {
    this.props.onNextClick();
  }

  calculateRange() {
    const { pagination, currentPage } = this.props;
    let 
      start = 20 * ( currentPage -1 ) + 1, 
      end = (20 * currentPage > pagination.count) ? pagination.count : 20 * currentPage;

    return start + '-' + end + ' of ';
  }

  render() {
    const { pagination } = this.props;
    
    return (
      <div className="perseus-pagination">
        <div className="row">
          <div className="col-md-6 offset-md-6 text-right">
            <span className="perseus-pagination-range"> { this.calculateRange()} { pagination ? pagination.count : 0 }</span>
            <button className="btn btn-primary" disabled={!pagination.prev} onClick={this.onPreviousClick}>Previous</button>
            <button className="btn btn-primary" disabled={!pagination.next} onClick={this.onNextClick}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomPagination;