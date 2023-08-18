import React from "react";
import { BiLogoTwitter } from "react-icons/bi";

const Card = ({ userImg, pName, tUserN, Fvalu }) => {
  return (
    <div className="profile_card">
      <div className="card">
        <div className="card-body">
          <div className="user_info">
            <img src={userImg} alt="" />
            <div className="name">
              <h4>{pName}</h4>
              <p>
                <BiLogoTwitter className="icons"/> {tUserN}
              </p>
            </div>
          </div>
          <p className="follower_status"><span className="follower">{Fvalu}</span> Followers</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
