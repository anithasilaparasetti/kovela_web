import React from "react";
import "./Admin.css";
import Header from "../Admin-redirecting-page/Header/Header";
import Newsfeed from "../Admin-redirecting-page/Newfeeds/Newsfeed";
import Morepages from "../Admin-redirecting-page/Morepages/Morepages";
import Account from "../Admin-redirecting-page/Account-details/Account";
import Gridcontainer from "../Admin-redirecting-page/Grid-container/Gridcontainer";
import { Link } from "react-router-dom";

function admin() {
  return (
    <div className="Admin">
      <div className="p-3">
        <Header />
      </div>
      <div className="admin-container p-1 d-flex">
        <div className="leftmenu">
          <Newsfeed />
          <Morepages />
          <Account />
        </div>
        <div className="grid-container">
          <div className="d-flex">
         <Gridcontainer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4XQoZJgBg9WJTy4M3fqNFEO6Tsn0zojoMw&usqp=CAU"
            heading="Hanuman Temple"
            price="500"
          />

<Gridcontainer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYpBHkDkgBLQuhJ-oxQNnbPy_ZYlQRSfotg&usqp=CAU"
            heading="Nookalamma temple"
            price="500"
          />

<Gridcontainer
            img="https://upload.wikimedia.org/wikipedia/commons/d/de/Malekallu_Tirupathi-balaji%2C_Arsikere.jpg"
            heading="Venkateswara Temple"
            price="500"
          />

<Gridcontainer
            img="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            heading="Maridimamba Temple"
            price="500"
          />

<Gridcontainer
            img="https://i.pinimg.com/474x/88/b0/ca/88b0cad9241d507efef0de8241abfdeb.jpg"
            heading="Vinayaka  Temple"
            price="500"
          />
          </div>

          <div className="d-flex">
          <Gridcontainer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4XQoZJgBg9WJTy4M3fqNFEO6Tsn0zojoMw&usqp=CAU"
            heading="Hanuman Temple"
            price="500"
          />

<Gridcontainer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYpBHkDkgBLQuhJ-oxQNnbPy_ZYlQRSfotg&usqp=CAU"
            heading="Nookalamma temple"
            price="500"
          />

<Gridcontainer
            img="https://upload.wikimedia.org/wikipedia/commons/d/de/Malekallu_Tirupathi-balaji%2C_Arsikere.jpg"
            heading="Venkateswara Temple"
            price="500"
          />

<Gridcontainer
            img="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            heading="Maridimamba Temple"
            price="500"
          />

<Gridcontainer
            img="https://i.pinimg.com/474x/88/b0/ca/88b0cad9241d507efef0de8241abfdeb.jpg"
            heading="Vinayaka  Temple"
            price="500"
          />
          </div>

          <div className="d-flex">
          <Gridcontainer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm4XQoZJgBg9WJTy4M3fqNFEO6Tsn0zojoMw&usqp=CAU"
            heading="Hanuman Temple"
            price="500"
          />

<Gridcontainer
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYpBHkDkgBLQuhJ-oxQNnbPy_ZYlQRSfotg&usqp=CAU"
            heading="Nookalamma temple"
            price="500"
          />

<Gridcontainer
            img="https://upload.wikimedia.org/wikipedia/commons/d/de/Malekallu_Tirupathi-balaji%2C_Arsikere.jpg"
            heading="Venkateswara Temple"
            price="500"
          />

<Gridcontainer
            img="https://theos.in/blogs/hm/movie_HANUMAN_epic_story.jpg"
            heading="Maridimamba Temple"
            price="500"
          />

<Gridcontainer
            img="https://i.pinimg.com/474x/88/b0/ca/88b0cad9241d507efef0de8241abfdeb.jpg"
            heading="Vinayaka  Temple"
            price="500"
          />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default admin;
