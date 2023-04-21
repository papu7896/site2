import React from 'react'

export default function Cart() {
  return (
    <div>
      <div>
        <h4 className='font-italic text-center'>The Places you will fall in love</h4>
      </div>
      <div class="card-group mt-3 " style={{ height: '80%' }}  >
        <div class="card">
          <img style={{ height: '40%' }} className='m-3' src={require("./r2.jpg")} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Places to visit</h5>
            <p class="card-text">Brimmed with natural beauty, the easternmost Sentinal, Assam state in India encloses lush tea plantation gardens, wild forests, and incredible archaeological sites</p>
            <a href="https://https://assamtourism.gov.in/" target="_blank" class="button" className="btn btn-primary btn-lg">Visit Places</a>

          </div>
        </div>
        <div class="card">
          <img style={{ height: '40%' }} className='m-3' src={require("./h.jpg")} class="card-img-top" alt="..." />
          <div class="card-body text-center">
            <h5 class="card-title">Hotel booking</h5>
            <p class="card-text"> To book a room at near places , you can either visit their website or call their reservation desk to check availability and make a booking.go thorugh the foloow link</p>
            <a href="https://www.google.com/aclk?sa=l&ai=DChcSEwjk6rS6ubr-AhU2mGYCHaEbBwUYABAAGgJzbQ&sig=AOD64_0KNCCqtPdhEfEIJqz4F0qBgE854A&q&adurl&ved=2ahUKEwjY1au6ubr-AhVl-DgGHbawDN4Q0Qx6BAgBEAE" target="_blank" class="button" className="btn btn-primary btn-lg">book your hotel</a>

          </div>
        </div>
        <div class="card text-center">
          <img style={{ height: '40%' }} className='m-3' src={require("./t.webp")} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Tourist Guide</h5>
            <p class="card-text">If you are planning to book a tourist guide for your next trip, you can either search for local guides on travel websites or contact a travel agency to arrange for a guide.</p>
            <a href="https://https://assamtourism.gov.in/" target="_blank" class="button" className="btn btn-primary btn-lg">Book your Guide</a>
          </div>
        </div>
      </div>
    </div>
  )
}

