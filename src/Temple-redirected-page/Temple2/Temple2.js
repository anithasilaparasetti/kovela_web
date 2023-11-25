import React from "react";
import "./Temple2.css";
import Header from "../../Screens/Admin-redirecting-page/Header/Header";
import Newsfeed from "../../Screens/Admin-redirecting-page/Newfeeds/Newsfeed";
import Morepages from "../../Screens/Admin-redirecting-page/Morepages/Morepages";
import Account from "../../Screens/Admin-redirecting-page/Account-details/Account";

function Temple2() {
  return (
    <div>
      <div className="p-3">
        <Header />
      </div>
      <div className="admin-container p-1 d-flex">
        <div className="leftmenu">
          <Newsfeed />
          <Morepages />
          <Account />
        </div>
        <div className="p-5 temple-container">
          <div className="p-5">
            <div className="temple-image"></div>
            <div className="d-flex posts-temple-addname">
              <div className="posts-followers-follow mt-5">Posts</div>
              <div className="temple-logo mt-5">Logo</div>
              <div className="addname-container mt-5">Add friend</div>
            </div>
            <div className="options-container d-flex">
              <div className="options">About</div>
              <div>Memberships</div>
              <div>Group</div>
              <div>About</div>
            </div>
            <div className="About-container p-3">
              <h4>About</h4>
              The Ram Mandir is a Hindu temple that is under construction in
              Ayodhya, Uttar Pradesh, India. It is located at the site of Ram
              Janmabhoomi, the hypothesized birthplace of Rama, a principal
              deity of Hinduism.[5][6] The site is the former location of the
              Babri Masjid. The temple construction is being supervised by the
              Shri Ram Janmabhoomi Teerth Kshetra trust. The ground-breaking
              ceremony was performed on the 5th of August 2020, by Indian Prime
              Minister Narendra Modi.[7]
            </div>

            <div className="About-container p-3">
              <div className=" photos-container-heading">
              <h4>Photos</h4>
              <p>see all</p>
              </div>
              <div>
                <img className="photos-image" src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"/> 
                <img className="photos-image" src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"/> 
                <img className="photos-image" src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"/> 
                <img className="photos-image" src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"/> 
                <img className="photos-image" src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"/> 
                <img className="photos-image" src="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"/> 
              </div>
            </div>

            <div className="Event-container p-3">
             <div className=" event-container-heading">
              <h4>Event</h4>
              <p>see all</p>
              </div>
              The Ram Mandir is a Hindu temple that is under construction in
              Ayodhya, Uttar Pradesh, India. It is located at the site of Ram
              Janmabhoomi, the hypothesized birthplace of Rama, a principal
              deity of Hinduism.[5][6] The site is the former location of the
              Babri Masjid. The temple construction is being supervised by the
              Shri Ram Janmabhoomi Teerth Kshetra trust. The ground-breaking
              ceremony was performed on the 5th of August 2020, by Indian Prime
              Minister Narendra Modi.[7]
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Temple2;

