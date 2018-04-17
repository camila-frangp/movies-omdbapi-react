import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Label, Container} from './style';

class Pagination extends Component {

  state = {
    pageNumbers: [],
    clicked: false,
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
  
  handleClick = (event, page) => {
    this.props.onPageChange(page);
  }
  
  showPageNumbers = (pageNumbers) => {
    return (
      <Container>
        {pageNumbers.map(number =>
            <Label
              key={number}
              id={number}
              onClick={e => this.handleClick(e, number)}
            >
              {number}
            </Label>
          )
        }
      </Container>
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
  onPageChange: PropTypes.func.isRequired
};
Pagination.defaultProps = {
  totalItems: '0',
  itemsCountPerPage: '0',
}
