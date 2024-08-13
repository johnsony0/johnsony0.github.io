import { useState, useEffect } from 'react';
import { getStoryById } from "./StardewData"; 
import StardewQuizGame from "./StardewQuizGame";
import StardewQuizResult from "./StardewQuizResult"

function StardewQuiz() {
  const defaultUserData = {
    Alex: 0,
    Elliott: 0,
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
  const [currentStory, setCurrentStory] = useState(getStoryById(-1))
  const [currentImage, setCurrentImage] = useState(currentStory.img)
  const [result,setResult] = useState(null)

  useEffect(() => {
    const renderStory = (currentStoryId) => {
      const img = new Image()
      const storyData = getStoryById(currentStoryId);
      img.src = storyData.img
  
      img.onload = () => {
        setCurrentStory(storyData);
        setCurrentImage(img.src);
      }
    }
    renderStory(currentStoryId)
  },[currentStoryId])

 

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
      setResult(maxKeys[Math.floor(Math.random() * maxKeys.length)])
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

  const onRestart = () => {
    setUserData({
      Alex: 0,
      Elliott: 0,
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
    })
    setCurrentStoryId(-1)
    setCurrentStory(getStoryById(-1))
    setCurrentImage(currentStory.img)
    setResult(null)
    console.log(userData)
  }

  return (
    result ? (
      <StardewQuizResult
        result={result}
        onRestart={onRestart}
      />
    ) :
    (
      <StardewQuizGame 
        currentStory={currentStory}
        currentImage={currentImage}
        handleOptionClick={handleOptionClick}
      />
    )
  );
}

export default StardewQuiz;