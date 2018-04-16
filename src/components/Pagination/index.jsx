import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Label} from './style';

class Pagination extends Component {

  state = {
    pageNumbers: [],
  }
  
  componentDidMount(){
    const {totalItems, itemsCountPerPage} = this.props;
    this.calculatePageNumbers(totalItems, itemsCountPerPage);
  }
  
  componentWillReceiveProps(nextProps) {
    if(this.props.totalItems !== nextProps.totalItems) {
      const {totalItems, itemsCountPerPage} = nextProps;
      this.calculatePageNumbers(totalItems, itemsCountPerPage);
    }
  }
  
  calculatePageNumbers = (totalItems, itemsCountPerPage) => {
    let pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalItems/itemsCountPerPage); i++)
      pageNumbers.push(i);
    return this.setState({
      pageNumbers: pageNumbers
    });
  }
  
  showPageNumbers = (pageNumbers) => {
    return (
      <p>
        {pageNumbers.map(number =>
            <Label
              key={number}
              id={number}
            >
              {number}
            </Label>
          )
        }
      </p>
    )
  }
  
  render() {
    const { pageNumbers } = this.state;
    return (
      this.showPageNumbers(pageNumbers)
    );
  }
}
export default Pagination;
Pagination.propTypes = {
  totalItems: PropTypes.string,
  itemsCountPerPage: PropTypes.number,
};
Pagination.defaultProps = {
  totalItems: 10,
  itemsCountPerPage: 10,
}
