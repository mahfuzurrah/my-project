import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 24px;
  border: 1px solid #E6ECEF;
  width: 260px;
  border-radius: 8px;
  box-shadow: ${(props) => (props.variant === "outline" ? "none" : "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)")};
  background-color: ${(props) => (props.variant === "outline" ? "transparent" : "#fff")};
`;

const UserName = styled.h4`
  color: #1a1a1a;
  margin-bottom: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
`;

const UserDescription = styled.p`
  font-size: 14px;
  color: #7a869f;
  display; flex;
`;

const TwitterIcon = styled(BiLogoTwitter)`
  color: #00acee;
  font-size: 18px;
`;

const FollowerStatus = styled.p`
  font-size: 16px;
  color: #7a869f;
`;

const FollowerCount = styled.span`
  color: #0C0E11;
  font-weight: 400; // Change this to the appropriate font-weight class
`;

const Card = ({ userImg, pName, tUserN, Fvalu, variant }) => {
  return (
    <CardContainer variant={variant}>
      <img src={userImg} alt="" />
      <div className="name">
        <UserName>{pName}</UserName>
        <UserDescription>
          <TwitterIcon /> {tUserN}
        </UserDescription>
      </div>
      <FollowerStatus>
        <FollowerCount className="follower font-normal">{Fvalu}</FollowerCount> Followers
      </FollowerStatus>
    </CardContainer>
  );
};

export default Card;
