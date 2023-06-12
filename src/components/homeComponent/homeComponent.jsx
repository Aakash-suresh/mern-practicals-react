import React, { Component } from 'react';

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="banner">
            <div className="content">
              <div className="homecontent">
                <h1>Explore the Wonders of the World</h1>
                <p>Embark on an unforgettable journey to discover breathtaking destinations.</p>
                <a href="/packages">Browse Our Travel Packages</a>
                <p>Choose from a wide range of curated packages tailored to your preferences.</p>
              </div>
              <div className="footer">
                <p>&copy; 2023 AllAround World. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
