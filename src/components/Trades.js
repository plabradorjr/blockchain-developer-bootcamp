import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    filledOrdersLoadedSelector,
    filledOrdersSelector
  } from '../store/selectors'

class Trades extends Component {
  render() {
    return (
        <div className="card bg-dark text-white">
            <div className="card-header">
                Card Title x
            </div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/#" className="card-link">Card link</a>
            </div>
        </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        filledOrdersLoaded: filledOrdersLoadedSelector(state),
        filledOrders: filledOrdersSelector(state),
    }
}

export default connect(mapStateToProps)(Trades)
