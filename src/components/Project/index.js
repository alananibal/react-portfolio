import React from "react";
import PopcornImg from "../../assets/images/PopcornFetcher.gif";
import TechImg from "../../assets/images/TheTechBlog.gif";
import PassImg from "../../assets/images/PasswordGenerator.gif";
import gitHubCat from "../../assets/images/GitHub-Mark.png"

function Project () {

    return (
      <main>
        <h1 class="p-5 text-center">Projects</h1>

        <div class="card-deck">
          <div class="card">
            <img src={PopcornImg} class="card-img-top" alt="pop" />
            <div class="card-body">
              <a href="https://alananibal.github.io/Popcorn-Fetcher-Part-II/"><h5 class="card-title">Popcorn Fetcher</h5></a>
              <p class="card-text">
                Phasellus mattis nunc sed orci consequat laoreet. Praesent id
                nisl nibh. Curabitur imperdiet ultricies mollis. In hac
                habitasse platea dictumst.
              </p>

              
            </div>
            <div class="card-footer">
              <small class="text-muted"><a href="https://github.com/alananibal/Popcorn-Fetcher-Part-II">GitHub</a></small>
            </div>
          </div>
          <div class="card">
            <img src={PassImg} class="card-img-top h-50 " alt="tech" />
            <div class="card-body">
            <a href="https://alananibal.github.io/Password-Generator/"><h5 class="card-title">Password Generator</h5></a>
              <p class="card-text">
                Proin aliquam justo nec diam vulputate vestibulum. Aenean
                sollicitudin nulla at nisi ornare, nec suscipit massa eleifend.
                Morbi tristique justo vel turpis sollicitudin, et tristique
                velit convallis. In hac habitasse platea dictumst.
              </p>
              
            </div>
            <div class="card-footer">
              <small class="text-muted"><a href="https://github.com/alananibal/Password-Generator">GitHub</a></small>
            </div>
          </div>
          <div class="card">
            <img src={TechImg} class="card-img-top h-50" alt="..." />
            <div class="card-body">
             <a href="https://nameless-gorge-64099.herokuapp.com/post/1"> <h5 class="card-title">The Tech Blog</h5></a>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                bibendum turpis sed ex condimentum molestie. Mauris condimentum
                lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat
                metus aliquam maximus.
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><a href="https://github.com/alananibal/CMS-Blog">GitHub</a></small>
            </div>
          </div>
        </div>
      </main>
    );
    
}

export default Project;