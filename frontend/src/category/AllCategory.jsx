import React from 'react'
import {Link, Outlet} from 'react-router-dom'
function AllCategory() {
  return (
    <>
      <section className=' bg-[url(./assets/hero-bg.png)] bg-no-repeat bg-cover min-h-screen h-auto'>
        <div className='container grid xl:grid-cols-3 py-5 gap-5 md:grid-cols-2 grid-cols-1'>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://rukminim2.flixcart.com/image/1000/1000/xif0q/t-shirt/z/c/2/s-723-1-3-6-8-ftx-original-imah7fxhfdbnz4f3.jpeg?q=70&crop=false"
                alt="Fashion" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Fashion Category</h2>
              <p>Where timeless elegance meets the latest trends to define your signature look.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to='/category/fashion'>Explore all</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://m.media-amazon.com/images/I/71708U5mylL._SX679_.jpg"
                alt="Electronics" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Electronics Category</h2>
              <p>Empowering Your World with Cutting-Edge Electronics.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to="/category/electronics">Explore all</Link>
              </div>
            </div>
          </div>


          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://m.media-amazon.com/images/I/61XGBj3X18L._SX679_.jpg"
                alt="computers" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Computers Category</h2>
              <p>Unlock Your Potential with Top-Quality Computers and Accessories.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to="/category/computers-and-office">Explore all</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://images.unsplash.com/photo-1542549237432-a176cb9d5e5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Gaming Category</h2>
              <p>Level Up Your Game with Powerful Gear and Unmatched Performance.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to="/category/gaming">Explore all</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://images.unsplash.com/photo-1570676765227-b25aa08d9752?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Books Category</h2>
              <p>Explore new worlds and ideas with every turn of the page. Books are the keys to endless adventures and knowledge.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to='/category/books'>Explore all</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/kwb07m80/kit/b/3/p/dsc-economy-full-size-ideal-for-15-21-years-complete-dsc-original-imag9yrqywzkuyuf.jpeg?q=70" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Sports Category</h2>
              <p>Gear up for adventure and performance, inside and out. Embrace the great outdoors with the best in sports equipment.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to='/category/sports-and-outdoors' >Explore all</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/nut-dry-fruit/o/j/s/750-nuts-dry-fruit-combo-pack-healthy-snack-food-item-high-in-original-imah5ea5zpeywtvf.jpeg?q=70" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Grocery Category</h2>
              <p>Explore new worlds and ideas with every turn of the page. Books are the keys to endless adventures and knowledge.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to='/category/food-and-grocery'>Explore all</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/ayurvedic/h/p/n/-original-imagmdfxhzsbkseu.jpeg?q=70" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Medicines Category</h2>
              <p>Your health, our priority. Trusted medicines for a better, healthier life.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to='/category/health-and-beauty'>Explore all</Link>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full md:w-80 shadow-xl">
            <figure className='max-h-52'>
              <img
                src="https://rukminim2.flixcart.com/image/612/612/xif0q/moisturizer-cream/u/2/9/-original-imagxyfdggfqqufv.jpeg?q=70" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Health & Beauty Category</h2>
              <p>Glow from within with our health and beauty essentials. Embrace your best self with products that care for you.</p>
              <div className="card-actions w-full">
                <Link className="btn btn-primary w-full" to='/category/health-and-beauty'>Explore all</Link>
              </div>
            </div>
          </div>

        </div>
      </section>
      <Outlet/>
    </>
  )
}

export default AllCategory