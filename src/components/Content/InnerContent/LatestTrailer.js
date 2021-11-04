import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function FreeToWatch(props) {

  const handleCheckBox = () => {
    var checked = document.getElementById('type-free').checked
    if (checked === false) {
      console.log('Movies')
    } else {
      console.log('TV Shows')
    }
  }

  const showOverlay = (param) => {
    document.getElementById('overlay').style.display = 'block'

    // setTimeout(() => {
    //   document.getElementById('overlay').style.display = 'none'
    // }, 3000)
  }

  const closeOverlay = () => {
    document.getElementsByClassName('iframe-ytb')[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')

    document.getElementById('overlay').style.display = 'none'
  }
  return (
    <Container fluid='xxl'>
      <Row className="justify-content-md-center">
        <Col xs >
          <div id="overlay" onClick={() => closeOverlay()}>
            <div id="text">
              <iframe
                className="iframe-ytb"
                width="1150"
                height="570"
                src="https://www.youtube.com/embed/X-GCJwz4PnY?enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
          <div className="inner-content inner-content-trailer">
            <div className="inner-content-wrapper inner-content-wrapper-trailer">
              <div className="content-wrapper">
                <div className="inner-content-column">
                  <div className="column-header">
                    <h3 className="trailer-title">Latest Trailers</h3>
                    <div className="switch-button">
                      <input className="switch-button-checkbox"
                        id='type-free'
                        type="checkbox"
                        onChange={handleCheckBox}
                      />
                      <label className="switch-button-label" htmlFor="type-free"><span className="switch-button-label-span">Movies</span></label>
                    </div>
                  </div>
                  <div className="freetw-scroller ">
                    <div className="scroller scroller-trailer">
                      {array.map((index) =>
                        <div className="card-film card-film-trailer" key={index} onClick={() => showOverlay(index)}>
                          <div className="card-img trailer-img">
                            <img
                              className="poster-img"
                              src="https://image.tmdb.org/t/p/original/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg" />
                            <div className='play'>
                              <i className="fas fa-play"></i>
                            </div>
                          </div>
                          <div className="card-content trailer-content">
                            <h2>Pokémon – Phim Điện Ảnh: Bí Mật Rừng Rậm</h2>
                            <p>10/20/2021</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default FreeToWatch