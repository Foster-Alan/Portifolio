import React from 'react'
import '../Styles/Card.css';
import Header from './Header';

export default function Cards() {
  return (
    <>
    <Header />
    <section className="section-cards">
    <div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
     <img src="https://i.pinimg.com/736x/b6/76/3b/b6763baee8b2b944b3287147c7d26c55.jpg"/>
    </div>
  </div>
</div>

<div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
      <img src="https://i.pinimg.com/736x/dc/79/08/dc790805ea23fbf33283d488b2c847ce--card-games-copycat.jpg"/>
    </div>
  </div>
</div>

<div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
      <img src="https://images-na.ssl-images-amazon.com/images/I/51U3Ky9-N4L.jpg"/>
    </div>
  </div>
</div>

<div class="container">
  <div class="card">
    <div class="front"></div>
    <div class="back">
      <img src="https://i.ytimg.com/vi/WZIGwN-5Ioo/maxresdefault.jpg"/>
    </div>
  </div>
</div>

</section>
</>
  )
}
