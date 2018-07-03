import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Link } from 'react-router-dom'
import '../style/style.css'
import City from './City'

class Cities extends Component {


  render() {
    let towns = this.props.towns.map( (city, i) => {
      return (
        <City
          city={city}
          key={i} />
      )
    })
  
    return (
    <div>
      <h1>Cities</h1>
      <div>
      {towns}
      </div>
      </div>
    )
  }
}


export default Cities