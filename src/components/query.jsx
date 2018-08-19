import React, { Component } from 'react'
import Danbooru from '../api'

// needed JedWatson/react-select
export default class QueryInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      maximumTagExceed: false,
      form: {
        queryString: ''
      }
    }
  }

  onSubmit = (event) => {
    event.preventDefault()

    if (this.props.getByTag && !this.state.maximumTagExceed) this.props.getByTag(this.state.form.queryString)
  }

  onChange = (event) => {
    const { value } = event.target
    if (value.split(' ').length > 2) {
      this.setState({
        maximumTagExceed: true,
        form: {
            queryString: value
          }
        })
    } else {
      this.setState((prevState) => {
        return {
          maximumTagExceed: false,
          form: {
            queryString: value
          }
        }
      })
    }
  }

  // needs lodash
  onChangeDebounced = (event) => {
    const { value } = event.target
    console.log('inputChange', value)
  }

  render() {
    return (
      <form acceptCharset={'UTF-8'} ref={(el) => { this.form = el}} className={'form--search_tag'} name={'form--search_tag'} onSubmit={this.onSubmit}>
        <input autoComplete={'false'} onBlur={this.onChange} onChange={this.onChange} type={'text'} className={'search_tag--input'} name={'search_tag--input'} id={'search_tag--input'} />
        <button type={'submit'} disabled={this.state.maximumTagExceed}>Go</button>
        {this.state.maximumTagExceed && <span style={{display: 'block', color: '#ff102d'}}>Exceed maximum tag, two maximum!</span>}
      </form>
    )
  }
}
