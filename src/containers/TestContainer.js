import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Grid, Button } from 'material-ui'
import { TestComponent } from '../components'
import actions from '../actions'

class TestContainer extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <h1>TestContainer</h1>
          <TestComponent />
        </Grid>
      </Grid>
    )
  }
}

export default connect((state, props) => ({
  test: state.test
}))(TestContainer)
