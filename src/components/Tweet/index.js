import React, { useContext } from "react";
import styled from "styled-components";

import Header from "./Header";
import ActionBar from "./ActionBar";
import { TweetContext } from "../TweetContext";
import moment from "moment";


const Tweet = () => {

  const date = moment().format('h:mm a - MMM Do, YYYY');


  const {
    displayName,
    username,
    avatarSrc,
    tweetContents,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    numOfLikes,
    numOfRetweets
  } = useContext(TweetContext);
  



  // tweetDate.toLocaleDateString([], {year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'}
  return (
    <Wrapper>
      <Header
        displayName={displayName}
        username={username}
        avatarSrc={avatarSrc}
      />
      <TweetContents>{tweetContents}</TweetContents>
  <Timestamp>{date}</Timestamp>

  <Divider />
      <Stats>
        <StatValue> {numOfRetweets}</StatValue><StatType> Retweets </StatType>
        <StatValue> {numOfLikes}</StatValue><StatType> Likes </StatType>
        
      </Stats>
      <Divider />
      <Divider />
      <ActionBar
        isRetweetedByCurrentUser={isRetweetedByCurrentUser}
        isLikedByCurrentUser={isLikedByCurrentUser}
      />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Stats = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const StatValue = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const StatType = styled.span`
  color: rgb(101,119,134);
  margin-right: 20px;
`;

export default Tweet;
