import { useState } from 'react';
import { getStoryById } from "./StardewData"; 
import StardewQuizGame from "./StardewQuizGame";

function StardewQuiz() {
  const defaultUserData = {
    Alex: 0,
    Elliot: 0,
    Harvey: 0,
    Sam: 0,
    Sebastian: 0,
    Shane: 0,
    Abigail: 0,
    Emily: 0,
    Haley: 0,
    Leah: 0,
    Maru: 0,
    Penny: 0
  };
  
  const [currentStoryId, setCurrentStoryId] = useState(-1);
  const [userData, setUserData] = useState(defaultUserData);
  const currentStory = getStoryById(currentStoryId);

  const handleOptionClick = (info) => {
    if (info.next_day === 1000){
      let maxValue = -Infinity;
      let maxKeys = [];
      for (const [key, value] of Object.entries(userData)) {
        if (value > maxValue) {
          maxValue = value;
          maxKeys = [key]; 
        } else if (value === maxValue) {
          maxKeys.push(key); 
        }
      }
      console.log(maxKeys[Math.floor(Math.random() * maxKeys.length)])
      console.log(userData)
    } else {
      setUserData((prevUserData) => {
        const updatedData = { ...prevUserData };
        if (info.traits && Object.keys(info.traits).length !== 0) {
          for (const [key, value] of Object.entries(info.traits)) {
            if (updatedData.hasOwnProperty(key)) {
              updatedData[key] += value;
            }
          }
        }
        return updatedData;
      });
      setCurrentStoryId(info.next_day);
    }
  };

  return (
    <StardewQuizGame 
      currentStory = {currentStory}
      handleOptionClick = {handleOptionClick}
    />
  );
}

export default StardewQuiz;