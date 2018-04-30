import React, { Component } from 'react';
import Carosal from './Carosal';

class Home extends Component {
  render() {
    return (
      <div>

        <div>
          <div>
            <div class="row">
              <div class="col-md-2">
              </div>
              <div class="col-md-8">
                <div class="card card-nav-tabs">
                  <h4 class="card-header card-header-info">Some Special Places</h4>
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">

                      <div>
                        <Carosal />
                      </div>
                    </p>
                  </div>
                </div>

              </div>

              <div class="col-md-2">

              </div>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
