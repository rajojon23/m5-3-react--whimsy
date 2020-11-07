import React, {useState, useEffect} from "react";
import Tweet from "./Tweet";

import avatar from "../assets/carmen-sandiego.png";


const date = new Date();

export const TweetContext = React.createContext(null);

export const TweetProvider = ({ children }) => {

    const [numOfLikes, setNumOfLikes] = useState(460);
    const [numOfRetweets, setNumOfRetweets] = useState(65);
    const [isLiked, setIsLiked] = useState(false);
    const [isRetweeted, setIsRetweeted] = useState(false);

    let tweetContents="Where in the world am I?";
    let displayName="Carmen Sandiego ✨";
    let username="carmen-sandiego";
    let avatarSrc=avatar;
    let isRetweetedByCurrentUser=isRetweeted;
    let isLikedByCurrentUser=isLiked; 
    let tweetDate = date;


    const handleToggleLike = () =>{
        const incOrDec = isLiked ? -1 : 1;
        setIsLiked(!isLiked);
        setNumOfLikes(numOfLikes + incOrDec);
    }
    const handleToggleRetweet = () =>{
        const incOrDec = isRetweeted ? -1 : 1;
        setIsRetweeted(!isRetweeted);
        setNumOfRetweets(numOfRetweets + incOrDec);
    }
  
    return (
      <TweetContext.Provider
        value={{
            tweetContents,
            displayName,
            username,
            avatarSrc,
            isRetweetedByCurrentUser,
            isLikedByCurrentUser,
            tweetDate,
            numOfLikes,
            numOfRetweets, 
            date,
            handleToggleLike,
            handleToggleRetweet
        }}
      >
        {children}
      </TweetContext.Provider>
    );
};