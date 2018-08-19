import React, { Component } from 'react'

// needed JedWatson/react-select
export default class QueryInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        queryString: ''
      }
    }
  }

  onSubmit = (event) => {
    event.preventDefault()

    console.log('submitting search', this.state)
  }

  onChange = (event) => {
    const { value } = event.target
    console.log('inputChange', value)

    this.setState((prevState) => {
      return {
        form: {
          queryString: value
        }
      }
    })
  }

  onChangeDebounced = (event) => {
    const { value } = event.target
    console.log('inputChange', value)
  }

  render() {
    return (
      <form ref={(el) => { this.form = el}} className={'form--search_tag'} name={'form--search_tag'} onSubmit={this.onSubmit}>
        <input onChange={this.onChange} type={'text'} className={'search_tag--input'} name={'search_tag--input'} id={'search_tag--input'} />
        <button type={'submit'}>Go</button>
      </form>
    )
  }
}
