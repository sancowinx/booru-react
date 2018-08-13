import React from 'react'

const Thumbnail = ({ preview_file_url, id, tag_string_general, file_url }) => {
  return (
    <div className={'post-thumbnail'}>
      {/* danbooru allows only preview_file_url on non danbooru domain, otherwise: CORS */}
      <a href={file_url} rel={'noreferrer'} target={'_blank'}><img src={preview_file_url} alt={id} title={tag_string_general}/></a>
      <span>{id}</span>
    </div>
  )
}

export default Thumbnail
