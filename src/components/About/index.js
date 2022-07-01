import React from 'react';
import profileImage from '../../assets/images/profileimage.jpg';


function About() {
  return (
    <section className="my-5">
      <div class="card mb-3 ">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src={profileImage} class="card-img mh-100px" alt="cover" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">About Me</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                bibendum turpis sed ex condimentum molestie. Mauris condimentum
                lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
                metus aliquam maximus. Proin aliquam justo nec diam vulputate
                vestibulum. Aenean sollicitudin nulla at nisi ornare, nec
                suscipit massa eleifend. Morbi tristique justo vel turpis
                sollicitudin, et tristique velit convallis. In hac habitasse
                platea dictumst. Phasellus mattis nunc sed orci consequat
                laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies
                mollis. In hac habitasse platea dictumst.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
              <h4>
                <a href="https://github.com/alananibal">GitHub</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
