import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.aarp.net/content/dam/aarp/auto/2017/07/1140-hyundai-ioniq-great-cars-road-trips-esp.imgcache.revfd63981c76a67e8a4ed28622bb76883e.web.900.518.jpg"  style={{height:'280px'}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://acnews.blob.core.windows.net/imgnews/medium/NAZ_701d8a1d6dc24d948e4adbc1c959b0ac.jpg" style={{height:'280px'}}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.cnbcfm.com/api/v1/image/106871460-1619000041228MY23LYRIQ-INTERIOR-MAJOR-GALVANO-FINAL-jpg?v=1619000244&w=929&h=523&vtcrop=y" style={{height:'280px'}}
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default Banner;