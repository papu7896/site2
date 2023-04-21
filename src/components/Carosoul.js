import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div class='back' id='back1'>
        <div style={{ backgroundColor: 'white', marginLeft: '30%', marginRight: '30%' }}>
          <h4 className='text-dark' >Welcome to Awesome Assam </h4>
          <h5 className='text-dark' >The place of heaven</h5>

        </div>
        <div>
          <form class="search-form ">
            <input type="text" name="search" placeholder="Search..." />


          </form>
          <button style={{ width: '200px', height: '40px', marginTop: '6px', textAlign: 'center' }} type="button" class="btn btn-primary btn-lg"> Search places</button>

        </div>
      </div>
    </div>
  );
}
