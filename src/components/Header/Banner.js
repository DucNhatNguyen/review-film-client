import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Banner(props) {
  return (
    <Container fluid='xxl'>
      <Row className="justify-content-md-center">
        <Col xs >
          <div className='banner'>
            <div className='banner-media'>
              <div className='banner-wrapper'>
                <div className='banner-content-wrapper'>
                  <div className='title'>
                    <h1>Welcome.</h1>
                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                  </div>
                  <div className='search'>
                    <form id='input-search-form'>
                      <label>
                        <input type="text" className="input-search" placeholder="Search for a movie, tv show, person......." />
                      </label>
                      <input type='submit' value="Search" id="search-submit"/>
                    </form>
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

export default Banner