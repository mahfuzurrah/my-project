import React from "react";
import { BiLogoTwitter } from "react-icons/bi";
import styled from "styled-components";

const CardContainer = styled.div`
  padding: 24px;
  border: 1px solid #e6ecef;
  width: 260px;
  border-radius: 8px;
  box-shadow: ${(props) =>
    props.variant === "outline"
      ? "none"
      : "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)"};
  background-color: ${(props) =>
    props.variant === "outline" ? "transparent" : "#fff"};
`;

const Card = ({ userImg, pName, tUserN, Fvalu, variant }) => {
  return (
    <CardContainer variant={variant}>
      <img src={userImg} alt="" />
      <div className="name">
        <h4 className="text-h4 font-semibold text-title mt-4">{pName}</h4>
        <p className="flex items-center gap-2 mt-0 text-small">
          <BiLogoTwitter className="icons text-blue-400 text-normal" /> {tUserN}
        </p>
      </div>
      <p className="mt-3 text-description">
        <span className="text-title">{Fvalu}</span> Followers
      </p>
    </CardContainer>
  );
};

export default Card;
