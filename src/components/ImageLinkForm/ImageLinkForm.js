import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = () =>{
    return(
       <div className=''>
          <p className='f3'> {'This magic brain will detect faces in your pictures. Give it a try '}
              </p> 
              <div className='center'>
              <div className='form center pa4 br3 shadow-5'>
                  <input className='f4 pa2 br2 w-70 center'
                   type ='tex' />
                   <button className='w-30 grow br2 f4 link ph3 pv2 dib white bg-light-purple '>Detect</button>
              </div>
              </div>
       </div> 
    );
}

export default ImageLinkForm;