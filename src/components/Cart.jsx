import Header from "./Header"; 
import Footer from "./Footer";

function Cart() {
    return ( 
        <>
        <Header/>
        <div className="product-sun">
      <div className="part-1">
        <img src="" alt="" />
      </div>
      <div className="part-2">
        <div className="part-text1">ADVANTURE, SCIENCE, COMEDY</div>
        <div className="part-text2">The Missadventure of David</div>
        <div className="part-text3">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </div>
        <div className="part-2-last">
          <div className="part-2-last-1">
            <div className="text-gray">Writen by</div>
            <div className="text-black">Kevin Smiley</div>
          </div>
          <div className="part-2-last-2">
            <div className="text-gray">Publisher</div>
            <div className="text-black">Printarea Studios</div>
          </div>
          <div className="part-2-last-3">
            <div className="text-gray">Year</div>
            <div className="text-black">2019</div>
          </div>
          <div className="list-start">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
          </div>
          <div className="reviews">
            <div className="reviews-number">4.0</div>
            <div className="reviews-255">255 Reviews</div>
          </div>
        </div>
      </div>
      <div className="part-3">
        <div className="part-3-list-btn">
          <div className="part-3-btn">Get 20% Discount for today</div>
          <div className="part-3-btn">50% OFF Discount</div>
          <div className="part-3-btn">See 2+ promos</div>
        </div>
        <div className="tien">$ 54.78</div>
        <div className="cha-add-to-card">
          <div className="add-to-card">
            <img src="img/cart 1.png" alt="" />
            <div className="add-to-card-text">Buy Now</div>
          </div>
          <div className="btn-heart1">
            <i className="fa-regular fa-heart" />
          </div>
        </div>
      </div>
      <div className="part-4">
      <div class="part-text1">ADVANTURE, SCIENCE, COMEDY</div>
      <div class="part-text2">The Missadventure of David</div>
      <div class="part-3-list-btn"><div class="part-3-btn">Get 20% Discount for today</div><div class="part-3-btn">50% OFF Discount</div><div class="part-3-btn">See 2+ promos</div></div>
      <div class="tien">$ 54.78</div>



      </div>
    </div>
        <Footer/>
        </>
     );
}

export default Cart;