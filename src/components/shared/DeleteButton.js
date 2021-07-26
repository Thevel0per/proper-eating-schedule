import React from 'react'

const DeleteButton = props => {
  let axios = require('axios')

  let sendDeleteRequest = () => {
    axios.default.delete(props.url).then(
      window.location.pathname = props.redirectPath
    )
  }

  return (
    <button className="button button--cancel button-delete--js" onClick={sendDeleteRequest}>Delete</button>
  )
}

export default DeleteButton