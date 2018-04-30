import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        <div class="row">

          <div class="col-md-2">

          </div>

          <div class="col-md-8">
            <div class="card card-nav-tabs text-center">
              <div class="card-header card-header-primary">
                About
           </div>
              <div class="card-body">
                <h4 class="card-title">Special title treatment</h4>
                <p class="card-text">This Is an about page.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              <div class="card-footer text-muted">
                2 days ago
             </div>
            </div>
          </div>

          <div class="col-md-2">

          </div>



        </div>
      </div>
    );
  }
}

export default About;
