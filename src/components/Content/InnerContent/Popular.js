import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

function Popular(props) {

  const handleCheckBox = () => {
    var checked = document.getElementById('type-popular').checked
    if (checked === false) {
      console.log('Movies')
    } else {
      console.log('TV Shows')
    }
  }

  return (
    <Container fluid='xxl'>
      <Row className="justify-content-md-center">
        <Col xs >
          <div className="inner-content">
            <div className="inner-content-wrapper">
              <div className="content-wrapper">
                <div className="inner-content-column">
                  <div className="column-header">
                    <h3>Popular Movies</h3>
                    <div className="switch-button">
                      <input className="switch-button-checkbox"
                        id='type-popular'
                        type="checkbox"
                        onChange={handleCheckBox}
                      />
                      <label className="switch-button-label" htmlFor="type-popular"><span className="switch-button-label-span">Movies</span></label>
                    </div>
                  </div>
                  <div className="popular-scroller opacity-last">
                    <div className="scroller scroller-film">
                      {array.map((index) =>
                        <div className="card-film" key={index}>
                          <div className="card-img">
                            <img
                              className="poster-img"
                              src="https://image.tmdb.org/t/p/original/kb4s0ML0iVZlG6wAKbbs9NAm6X.jpg" />
                          </div>
                          <div className="card-content">
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

export default Popular