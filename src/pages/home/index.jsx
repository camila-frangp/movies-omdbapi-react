import React, {Component} from 'react';import {Container, FormContainer, SubmitButton} from './style';import {SearchInput} from '../../components'import Logo from '../../assets/logo.png';class Index extends Component {    onChangeInput = (name, value) => {    this.setState({[name]: value});  }    state = {    inputSearch: ''  }    submitForm = (e) => {    e.preventDefault();    this.props.history.push({      pathname: '/movies',      search: this.state.inputSearch,    });  }    render() {    return (      <Container>        <img  src={Logo} style={{width: '40%'}}/>        <FormContainer onSubmit={this.submitForm} >          <SearchInput hint="Film's Name" value={this.state.inputSearch} onChangeInput={this.onChangeInput}/>          <SubmitButton type="submit">Search</SubmitButton>        </FormContainer>      </Container>    );  }}export default Index;