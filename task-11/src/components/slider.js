function Slider(){
    return (
        <>
        <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wp-bn.salesforce.com/blog/wp-content/uploads/sites/2/2024/01/ecommerce-trends.jpg" className="d-block w-100"  height="500" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://images.businessnewsdaily.com/app/uploads/2022/04/04073619/how-ecommerce-works.png" className="d-block w-100" height="500" width="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.investopedia.com/thmb/HTsQttB_aZtIFO2aNUau7T82UXQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ecommerce-d7e19a12ebed400eb1b2344b2cbb0e7d.png" className="d-block w-100" height="500" width="500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    );
}
export default Slider;