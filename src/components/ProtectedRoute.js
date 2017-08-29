import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class ProtectedRoute extends Component {
  static get propTypes() {
    return {
      neededPermission: PropTypes.string.isRequired,
      userPermissions: PropTypes.arrayOf(PropTypes.string).isRequired,
      onNoPermission: PropTypes.func.isRequired
    }
  }

  componentWillMount() {
    const userPermissions = this.props.userPermissions
    const neededPermissions = this.props.neededPermissions

    if (!userPermissions.includes('*') && !userPermissions.includes(neededPermissions)) {
      this.props.onNoPermission();
    }
  }

  render() {
    return (
      this.props.children
    )
  }
}
