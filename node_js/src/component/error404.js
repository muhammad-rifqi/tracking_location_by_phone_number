import React from 'react';

const error404 = () => {

  return (
    <p className='text-center'>
      <h1>404</h1>
      <h4>Halaman Tidak DItemukan</h4>
      <div className='container'>
        <a href="/" className="btn btn-primary">Kembali</a>
      </div>
    </p>
  )
}
export default error404;
