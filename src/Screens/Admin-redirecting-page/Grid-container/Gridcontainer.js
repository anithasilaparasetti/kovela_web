import React from "react";
import "./Gridcontainer.css";
import { Link } from "react-router-dom";

function Gridcontainer() {
  return (
    <div className="gridcontainer">
      <div className="d-flex four-image-container">
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <Link to="/Temple1">
              <img
                className="imagee"
                src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
              />
            </Link>
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <Link to="/Temple2">
              <img
                className="imagee"
                src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
              />
            </Link>
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <Link to="/Temple3">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
            </Link>
            
           
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>

        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <Link to="/Temple4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            /></Link>
            
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
      </div>

      <div className="d-flex four-image-container">
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>

        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
      </div>

      <div className=" d-flex">
        <div className=" grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>

        <div className="grid p-5 m-1">
          <div className="imagecontainer p-4">
            <img
              className="imagee"
              src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            />
          </div>
          <h5>Hanuman</h5>
          <p>price</p>
        </div>
      </div>
    </div>
  );
}

export default Gridcontainer;
