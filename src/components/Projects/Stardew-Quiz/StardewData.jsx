export const getStoryById = (id) => Story.find((entry) => entry.id === id);

export const Story = [
  {
    id: -1,
    story: `Which dateable Stardew character are you :D ?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/dateable_chars.jpg_large`,
    options: {
      'Start' : {
        traits: {
        },
        next_day: 0
      }
    }
  },
  {
    id: 0,
    day: 0,
    time: '05:00 pm',
    story:`Growing tired of a dull corporate life, you quit your job at Joja. What do you do now?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/joja.avif`,
    options: {
      'Move to Stardew Valley' : {
        traits: {
        },
        next_day : 1,
      },
    }
  },
  {
    id: 1,
    day: 1,
    time: '9:00 am',
    story: 'Welcome to Stardew Valley! It is your first day in Pelican Town, how do you spend it?',
    img: `${process.env.PUBLIC_URL}/stardew_quiz/first_day.webp`,
    options: {
      'Greet villagers': {
        traits: {
          Emily: 1,
          Penny: 1,
          Haley: 1,
        },
        next_day: 2,
      },
      'Plant crops': {
        traits: {
          Harvey: 1,
          Leah: 1,
          Maru: 1,
        },
        next_day : 3,
      },
      'Explore Cindersap forest': {
        traits: {
          Abigail: 1,
          Sebastian: 1,
          Leah: 1,
        },
        next_day : 4,
      },
      'IM OVERWHELMED': {
        traits: {
          Shane: 1,
          Sebastian: 1,
        },
        next_day : 5,
      }
    },
  },
  {
    id: 2,
    day: 1,
    time: '3:00 pm',
    story: `You enter Pelican Town, and embrace the coziness of a small 
    tight knit community. You introduce yourself to every villager you 
    see, how do you continue your day?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/pelican_town.avif`,
    options: {
      'Head back to the Farm': {
        traits: {
          Harvey: 1,
          Maru: 1,
          Leah: 1,
        },
        next_day : 6,
      },
      'Visit Pierre General Store': {
        traits: {
          Abigail: 1,
          Penny: 1,
          Emily: 1,
        },
        next_day : 7,
      },
      "I'm tired, time for bed": {
        traits: {
        },
        next_day : 8,
      },
      'Visit Jojamart': {
        traits: {
          Shane: 1,
        },
        next_day : 9,
      },
    },
  },
  {
    id: 3,
    day: 1,
    time: '3:00 pm',
    story: `You plant the parsnip seeds you were gifted, and hope for a 
    good harvest. How do you spend the rest of your day?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/plants.jpg`,
    options: {
      "Visit Pierre's General Store": {
        traits: {
          Abigail: 1,
          Penny: 1,
          Emily: 1,
        },
        next_day : 7,
      },
      "Go Foraging the Mountains": {
        traits: {
          Leah: 1,
          Abigail: 1,
          Sebastian: 1,
        },
        next_day : 10,
      },
      "I'm tired, time for bed": {
        traits: {
        },
        next_day : 8,
      },
      "Clear Space on the Farm": {
        traits: {
          Harvey:1,
        },
        next_day : 11,
      },
    },
  },
  {
    id: 4,
    day: 1,
    time: '3:00 pm',
    story: `You explore all Cindersap has to offer, until you 
    approach a massive log blocking your path, what do you do?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/log.jpg`,
    options: {
      "Chop it with your Axe": {
        traits: {
          Elliott: 1,
          Shane: 1,
        },
        next_day : 12,
      },
      "Ignore it, lets go visit the mountains next": {
        traits: {
          Sebastian: 1,
          Leah: 1,
          Abigail: 1,
        },
        next_day : 10,
      },
      "Head back to the Farm": {
        traits: {
          Harvey: 1,
          Maru: 1,
          Leah: 1,
        },
        next_day : 6,
      },
      "I'm tired, time for bed": {
        traits: {
        },
        next_day : 8,
      },
    },
  },
  {
    id: 5,
    day: 1,
    time: '3:00 pm',
    story: `After some time,
    you collect yourself and calm down. You plant some crops you were gifted. 
    How do you spend the rest of your day?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/plants.jpg`,
    options: {
      "Visit Pierre's General Store": {
        traits: {
          Abigail: 1,
          Penny: 1,
          Emily: 1,
        },
        next_day : 7,
      },
      "Go Foraging the Mountains": {
        traits: {
          Leah: 1,
          Abigail: 1,
          Sebastian: 1,
        },
        next_day : 10,
      },
      "I'm tired, time for bed": {
        traits: {
        },
        next_day : 8,
      },
      "Clear Space on the Farm": {
        traits: {
          Harvey:1,
          Leah: 1,
        },
        next_day : 11,
      },
    },
  },
  {
    id: 6,
    day: 1,
    time: '12:00 am',
    story: `You head back to the farm and plant your crops. 
    You are a bit tired but a frog jumps out of the bushes!`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/frog.webp`,
    options: {
      "CHASE IT": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 15,
      },
      "AHHHH, GET AWAY": {
        traits: {
          Haley: 1,
          Emily: 1,
        },
        next_day: 16,
      },
      "Ignore it, I'm tired I need sleep": {
        traits: {
        },
        next_day: 16,
      }
    },
  },
  {
    id: 7,
    day: 1,
    time: '12:00 am',
    story: `You visit Pierre's and buy some crops, 
    you go back ready to plant them but you are tired.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/pierre.jpg`,
    options: {
      "Waiting one more day won't hurt, lets sleep": {
        traits: {
        },
        next_day: 8,
      },
      "I want my harvest ASAPPPP": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 13,
      },
    },
  },
  {
    id: 8,
    day: 2,
    time: '12:00 pm',
    story: `You get out of bed and find that Willy has returned from 
    his fishing adventures. You meet him and he gives you a bamboo rod. 
    With a new tool in hand—what will you do next?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/willy.jpg`,
    options: {
      "Chat with Willy": {
        traits: {
          Penny: 1,
          Harvey: 1,
          Haley: 1,
        },
        next_day: 17,
      },
      "Explore the Beach": {
        traits: {
          Abigail: 1,
          Leah: 1,
        },
        next_day: 18,
      },
      "Fishing Time!": {
        traits: {
          Elliott: 1,
          Sebastian: 1,
        },
        next_day: 19,
      },
      "Fishing? What's that? Back to Chopping Trees": {
        traits: {
          Shane: 1,
          Maru: 1,
        },
        next_day: 20,
      },
    },
  },
  {
    id: 9,
    day: 1,
    time: '12:00 am',
    story: `You head to Jojamart to gather seeds but is greeted by 
    the manager, Morris, advertising a 5,000g membership.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/jojamart.jpg`,
    options: {
      "I can't afford that!": {
        traits: {
          Shane: 1,
          Sebastian: 1,
        },
        next_day: 14,
      },
      "Sorry, not today": {
        traits: {
          Penny: 1,
          Emily: 1,
        },
        next_day: 14,
      },
      "Try negotiating":{
        traits: {
          Maru: 1,
          Elliott: 1,
        },
        next_day: 14,
      }
    },
  },
  {
    id: 10,
    day: 1,
    time: '12:00 am',
    story: `In the mountains you gather some daffodils and horseradishes, you see 
    another one across the lake, but you are a bit tired.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/horseradish.jpg`,
    options: {
      "Looks for a bridge across to get it": {
        traits: {
          Abigail: 1,
          Leah: 1,
        },
        next_day: 15,
      },
      "Ill pick it up tomorrow": {
        traits: {
        },
        next_day: 8,
      }
    },
  },
  {
    id: 11,
    day: 1,
    time: '12:00 am',
    story: `Feeling drained after felling most trees in the vicinity of 
    your house, there is exactly one tree left.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/one_tree.jpg`,
    options: {
      "Chop it": {
        traits: {
          Shane: 1,
          Sebastian: 1,
        },
        next_day: 12,
      },
      "I can chop it tomorrow": {
        traits: {
        },
        next_day: 8,
      },
    },
  },
  {
    id: 12,
    day: 1,
    time: '2:00 am',
    story: `You spend some time chopping it and it won't budge. 
    Without even realizing, you have expended 
    all your energy and faint from exhaustion. Linus found you 
    and took you home.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/passout.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 8,
      }
    },
  },
  {
    id: 13,
    day: 1,
    time: '2:00 am',
    story: `In your greed for an earlier harvest, your body fails you 
    and you collapse from exhaustion. Luckily linus finds you and 
    take you home, you rest a bit and it is now morning.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/passout.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 8,
      }
    },
  },
  {
    id: 14,
    day: 1,
    time: '2:00 am',
    story: `Without the membership the seeds cost slightly more but 
    you purchase them anyways. As you head back to your farm, your 
    body is exhausted so you sleep till the next morning.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 8,
      }
    },
  },
  {
    id: 15,
    day: 1,
    time: '2:00 am',
    story: `In the pursuit, your body collapses from overexertion. 
    Luckily Linus finds you and brings you home. You snooze till morning.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/passout.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 8,
      }
    },
  },
  {
    id: 16,
    day: 5,
    time: '6:00 am',
    story: `A couple days pass. Joja has cleared the landslide 
    revealing the mines. Do you dare descend into the unknown`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/mines.jpg`,
    options: {
      "Enter the Mines": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 29,
      },
      "It is called Stardew FARM not Stardew MINES, back to the Farm >:(": {
        traits: {
          Shane: 1,
          Haley: 1,
        },
        next_day: 30,
      },
      "Prepare Supplies First": {
        traits: {
          Maru: 1,
          Harvey: 1,
        },
        next_day: 31,
      },
      "Scary, maybe another day": {
        traits: {
          Penny: 1,
          Emily: 1,
        },
        next_day: 30,
      },
    },
  },
  {
    id: 17,
    day: 2,
    time: '3:00 pm',
    story: `You chat with Willy and he tells you about the abundance 
    of flounder in the Ocean.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/willy_dialogue.jpg`,
    options: {
      "Lets go fishing for Sardines!!!": {
        traits: {
          Elliott: 1,
          Penny: 1,
        },
        next_day: 19,
      },
      "Maybe later, for now let's explore the Beach": {
        traits: {
          Sam: 1,
          Abigail: 1,
          Alex: 1,
        },
        next_day: 18,
      },
      " Eh I prefer fishing in town": {
        traits: {
          Harvey: 1,
          Maru: 1,
          Emily: 1,
          Haley: 1,
          Sebastian: 1,
        },
        next_day: 19,
      },
      "The ambience of the forest is much nicer, lets fish there instead": {
        traits: {
          Leah: 1,
          Shane: 1,
        },
        next_day: 19,
      },
    },
  },
  {
    id: 18,
    day: 2,
    time: '9:00 pm',
    story: `You explore the beach for hours, and 
    eventually stumble on a clam sticking out of the water`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/clam.jpg`,
    options: {
      "Take it": {
        traits: {
          Abigail: 1,
          Leah: 1,
          Elliott: 1,
        },
        next_day: 24,
      },
      "Leave it": {
        traits: {
          Harvey: 1,
          Penny: 1,
          Maru: 1,
        },
        next_day: 25,
      }
    },
  },
  {
    id: 19,
    day: 2,
    time: '9:00 pm',
    story: `After hours of fishing, it was all going well until 
    an incredible force tugs the other side of the rod.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/fishing.jpg`,
    options: {
      "Try with all your might to catch it": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 21,
      },
      "Give an attempt but realize its futile and let the fish go": {
        traits: {
          Leah: 1,
          Elliott: 1,
        },
        next_day: 21,
      },
      "Doesn't even bother trying": {
        traits: {
          Harvey: 1,
          Maru: 1,
        },
        next_day: 21,
      }
    },
  },
  {
    id: 20,
    day: 2,
    time: '9:00 pm',
    story: `After felling dozens of trees in Cindersap Forest, 
    Leah strolls by.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/leah.jpg`,
    options: {
      "Set the axe aside and engage in conversation": {
        traits: {
          Leah: 1,
          Haley: 1,
          Emily: 1,
        },
        next_day: 22,
      },
      "Finish your task first, conversation can wait": {
        traits: {
          Haru: 1,
          Harvey: 1,
        },
        next_day: 22,
      },
      "Ignore her": {
        traits: {
          Shane: 1,
          Sebastian: 1,
        },
        next_day: 23,
      },
      "Give her a wave": {
        traits: {
          Penny: 1,
          Abigail: 1,
        },
        next_day: 23,
      },
    },
  },
  {
    id: 21,
    day: 3,
    time: '12:00 am',
    story: `Following the encounter with the fish you are exhausted 
    and go to bed. Until a loud explosion could be heard in the night.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/explosion.png`,
    options: {
      "Probably my imagination": {
        traits: {
          Harvey: 1,
          Maru: 1,
        },
        next_day: 27,
      },
      "PANIC": {
        traits: {
          Penny: 1,
          Haley: 1,
        },
        next_day: 27,
      },
      "Could be dangerous, grab my sword just in case": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 28,
      },
      "Hmm wonder what that was let's check that out": {
        traits: {
          Elliott: 1,
          Leah: 1,
        },
        next_day: 28,
      },
    },
  },
  {
    id: 22,
    day: 2,
    time: '12:00 am',
    story: `You talk with Leah, and hours fly by. Growing eepy 
    you head to bed. You are awoken by a loud explosion during the night.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/explosion.png`,
    options: {
      "Probably my imagination": {
        traits: {
          Harvey: 1,
          Maru: 1,
        },
        next_day: 27,
      },
      "PANIC": { 
        traits: {
          Penny: 1,
          Haley: 1,
        },
        next_day: 27,
      },
      "Could be dangerous, grab my sword just in case": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 28,
      },
      "Hmm wonder what that was let's check that out": {
        traits: {
          Elliott: 1,
          Leah: 1,
        },
        next_day: 28,
      },
    },
  },
  {
    id: 23,
    day: 3,
    time: '12:00 am',
    story: `Having collected enough wood and getting more eepy 
    you head to bed. You are awoken by a loud explosion during the night.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/explosion.png`,
    options: {
      "Probably my imagination": {
        traits: {
          Harvey: 1,
          Maru: 1,
        },
        next_day: 27,
      },
      "PANIC": {
        traits: {
          Penny: 1,
          Haley: 1,
        },
        next_day: 27,
      },
      "Could be dangerous, grab my sword just in case": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 28,
      },
      "Hmm wonder what that was let's check that out": {
        traits: {
          Elliott: 1,
          Leah: 1,
        },
        next_day: 28,
      },
    },
  },
  {
    id: 24,
    day: 2,
    time: '11:00 am',
    story: `While attempting to take the coral, a mermaid bursts 
    from the depths. In anger, she scolds you for disturbing the 
    ecosystem`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/mermaid.avif`,
    options: {
      "Apologize": {
        traits: {
          Penny: 1,
          Harvey: 1,
          Emily: 1,
        },
        next_day: 25,
      },
      "Ignore her": {
        traits: {
          Shane: 1,
          Sebastian: 1,
        },
        next_day: 26,
      },
      "Make excuses": {
        traits: {
          Haley: 1,
          Abigail: 1,
        },
        next_day: 26,
      }
    },
  },
  {
    id: 25,
    day: 2,
    time: '12:00 am',
    story: `Nature thanks you for leaving the coral in its natural habitat.
    You are sent home magically :D.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/home.jpg`,
    options: {
      "Reflect on the encounter": {
        traits: {
          Leah: 1,
          Sebastian: 1,
          Elliott: 1,
        },
        next_day: 16,
      },
      "Head to the saloon to share your experience": {
        traits: {
          Abigail: 1,
          Shane: 1,
          Emily: 1,
        },
        next_day: 16,
      }
    },
  },
  {
    id: 26,
    day: 2,
    time: '12:00 am',
    story: `Growing tired of your behavior, the mermaid casts a 
    spell on you. Fatigue wash over you and you can barely stand, 
    the mermaid swims off.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/fatigue.jpg`,
    options: {
      "Reflect on the encounter": {
        traits: {
          Leah: 1,
          Sebastian: 1,
          Elliott: 1,
        },
        next_day: 16,
      },
      "Push through till you reach your bed": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 16,
      },
      "Wait for help to assist you getting home": {
        traits: {
          Penny: 1,
          Harvey: 1,
        },
        next_day: 16,
      }
    },
  },
  {
    id: 27,
    day: 2,
    time: '2:00 am',
    story: `After some pondering, you simply decide to 
    catch some sleep, after all, the sleep can't catch itself.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "zzzzzzzz": {
        traits: {
        },
        next_day: 16,
      }
    },
  },
  {
    id: 28,
    day: 2,
    time: '2:00 am',
    story: `You investigate where the sound came from and find a 
    meteorite.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/meteorite.png`,
    options: {
      "Mine it": {
        traits: {
          Sebastian: 1,
        },
        next_day: 16,
      },
      "Take some samples to study": {
        traits: {
          Maru: 1,
          Elliott: 1,
        },
        next_day: 16,
      },
      "Tell the villagers about it": {
        traits: {
          Abigail: 1,
          Shane: 1,
          Emily: 1,
        },
        next_day: 16,
      },
      "Oh its just a meteorite, back to sleep": {
        traits: {
          Shane: 1,
          Harvey: 1,
        },
        next_day: 16,
      },
    },
  },
  {
    id: 29,
    day: 5,
    time: '12:00 pm',
    story: `You enter the mines and start descending. 
    OH NO A SLIME.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/slimes.jpg`,
    options: {
      "EN GARDE": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 32,
      },
      "OH SHIT WHERE'S MY SWORD": {
        traits: {
          Sebastian: 1,
          Elliott: 1,
        },
        next_day: 32,
      },
      "eheh lightwork": {
        traits: {
          Shane: 1,
          Alex: 1,
        },
        next_day: 32,
      },
      "uh oh let's run": {
        traits: {
          Penny: 1,
          Harvey: 1,
        },
        next_day: 32,
      },
    },
  },
  {
    id: 30,
    day: 5,
    time: '12:00 pm',
    story: `You decide against the caves but see a beautiful lake 
    and Linus on your way out.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/lake.jpg`,
    options: {
      "Fish in the lake": {
        traits: {
          Elliott: 1,
        },
        next_day: 34,
      },
      "Talk to Linus": {
        traits: {
          Penny: 1,
          Leah: 1,
        },
        next_day: 37,
      },
      "Give Linus a Gift": {
        traits: {
          Emily: 1,
          Harvey: 1,
        },
        next_day: 37,
      },
      "Enjoy the scenery": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 36,
      },
    },
  },
  {
    id: 31,
    day: 5,
    time: '12:00 pm',
    story: `You prepare some food before heading into the mines, 
    as you descend you are met by some slimes.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/slimes_food.jpg`,
    options: {
      "EN GARDE": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 33,
      },
      "OH SHIT WHERE'S MY SWORD": {
        traits: {
          Sebastian: 1,
          Elliott: 1,
        },
        next_day: 33,
      },
      "eheh lightwork": {
        traits: {
          Shane: 1,
          Alex: 1,
        },
        next_day: 33,
      },
      "uh oh let's run": {
        traits: {
          Penny: 1,
          Harvey: 1,
        },
        next_day: 33,
      },
    },
  },
  {
    id: 32,
    day: 5,
    time: '3:00 pm',
    story: `Your encounter with the slime proved fatal, 
    luckily you are rescued from the mine by Linus. 
    After thanking her you are greeted with the view of a 
    beautiful mountain lake.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/lake.jpg`,
    options: {
      "Fishing !?!": {
        traits: {
          Sam: 1,
          Elliott: 1,
        },
        next_day: 34,
      },
      "Go back into the mines": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 35,
      },
      "Enjoy the scenic lake": {
        traits: {
          Leah: 1,
          Haley: 1,
        },
        next_day: 36,
      },
      "Need rest after that slime encounter": {
        traits: {
          Harvey: 1,
          Penny: 1,
        },
        next_day: 40,
      },
    },
  },
  {
    id: 33,
    day: 5,
    time: '3:00 pm',
    story: `The slime encounter was near fatal but the food you 
    brought kept you alive. As you recover you remember the beautiful 
    lake you passed on the way to the mines.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/lake.jpg`,
    options: {
      "Continue descending": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 35,
      },
      "Fishing !?!": {
        traits: {
          Sam: 1,
          Elliott: 1,
        },
        next_day: 34,
      },
      "Enjoy the scenic lake": {
        traits: {
          Leah: 1,
          Haley: 1,
        },
        next_day: 36,
      },
      "Need rest after that slime encounter": {
        traits: {
          Harvey: 1,
          Penny: 1,
        },
        next_day: 40,
      },
    },
  },
  {
    id: 34,
    day: 5,
    time: '12:00 am',
    story: `You had a successful day of fishing, catching a variety of fish 
    like carp, bass, and chub.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/fish.webp`,
    options: {
      "Sell fish": {
        traits: {
          Shane: 1,
        },
        next_day: 43,
      },
      "These fish would look great in an aquarium": {
        traits: {
          Elliott: 1,
          Leah: 1,
        },
        next_day: 43,
      },
      "Save it, maybe someone will want it later": {
        traits: {
          Penny: 1,
          Harvey: 1,
        },
        next_day: 43,
      }
    },
  },
  {
    id: 35,
    day: 5,
    time: '12:00 am',
    story: `The rest of the mining goes well, you reach floor 10 
    before leaving. Gathering enough copper for a few bars.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/copper.jpg`,
    options: {
      "Sell coppers": {
        traits: {
          Shane: 1,
        },
        next_day: 43,
      },
      "Smelt it": {
        traits: {
          Elliott: 1,
          Leah: 1,
        },
        next_day: 43,
      },
      "Save it, maybe someone will want it later": {
        traits: {
          Penny: 1,
          Harvey: 1,
        },
        next_day: 43,
      }
    },
  },
  {
    id: 36,
    day: 5,
    time: '12:00 am',
    story: `You enjoy the breathtaking views. As you sit back, 
    what do you think of?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/lake_scenery.jpg`,
    options: {
      "Your childhood": {
        traits: {
          Penny: 1,
          Sebastian: 1,
        },
        next_day: 42,
      },
      "Your farm": {
        traits: {
          Harvey: 1,
          Leah: 1,
        },
        next_day: 42,
      },
      "The scenery": {
        traits: {
          Elliott: 1,
          Haley: 1,
        },
        next_day: 42,
      },
      "Dreams of the future": {
        traits: {
          Abigail: 1,
          Emily: 1,
        },
        next_day: 42,
      },
    },
  },
  {
    id: 37,
    day: 5,
    time: '12:00 pm',
    story: `Linus enjoys your company, and invites you to 
     dumpster dive with him.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/linus.jpg`,
    options: {
      "Politely refuse": {
        traits: {
          Harvey: 1,
          Penny: 1,
        },
        next_day: 38,
      },
      "Eagerly Partake": {
        traits: {
          Abigail: 1,
          Shane: 1,
        },
        next_day: 39,
      }
    },
  },
  {
    id: 38,
    day: 5,
    time: '12:00 am',
    story: `After refusing his offer, you go foraging, collecting a 
    good harvest of spring onions, dandelions, and leeks`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/leek.jpg`,
    options: {
      "Sell the plants": {
        traits: {
          Shane: 1,
        },
        next_day: 43,
      },
      "Eat the plants": {
        traits: {
          Emily :1,
          Abigail: 1,
        },
        next_day: 43,
      },
      "Save it, maybe someone will want it later": {
        traits: {
          Penny: 1,
          Harvey: 1,
        },
        next_day: 43,
      }
    },
  },
  {
    id: 39,
    day: 5,
    time: '12:00 am',
    story: `You spend your day with Linus, it was humbling yet rewarding.
    But it is getting a bit late, time for bed.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 40,
      }
    },
  },
  {
    id: 40,
    day: 8,
    time: '6:00 am',
    story: `It has been a good couple days since the mountain lake 
    and mine adventure. Some crops have ripened and been sold. 
    With this new income let's explore town to see what we can buy.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/town.jpg`,
    options: {
      "Explore town": {
        traits: {
        },
        next_day: 41,
      }
    },
  },
  {
    id: 41,
    day: 8,
    time: '11:00 am',
    story: `While exploring the town, you stumble upon an abandoned 
    building. Mayor Lewis unlocks the building and you enter. 
    You spot mysterious apple like creatures, how do you react?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/enter_building.jpg`,
    options: {
      "AHHH GET THEM AWAY": {
        traits: {
          Shane: 1,
          Abigail: 1,
          Haley: 1,
        },
        next_day: 44,
      },
      "awww cute lil things": {
        traits: {
          Emily: 1,
          Penny: 1,
        },
        next_day: 45,
      },
      "Hm interesting, I should take a closer look": {
        traits: {
          Elliott: 1,
          Leah: 1,
          Maru: 1,
        },
        next_day: 45,
      },
      "Eh probably just a bug": {
        traits: {
          Harvey: 1,
          Sebastian: 1,
        },
        next_day: 44,
      },
    },
  },
  {
    id: 42,
    day: 5,
    time: '1:00 am',
    story: `After a moment of reflection, you realize just how 
    exhausted you are -- if you don't get home soon you will collapse. 
    You rush home to sleep.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 40,
      }
    },
  },
  {
    id: 43,
    day: 5,
    time: '1:00 am',
    story: `Following this, you find yourself weary and head to bed.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 40,
      }
    },
  },
  {
    id: 44,
    day: 8,
    time: '2:00 pm',
    story: `You leave the community center, and head back to the farm. 
    You are long overdue for a clothing change. What do you wear?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/home.jpg`,
    options: {
      "Casual farmwear": {
        traits: {
          Leah: 1,
          Shane: 1,
        },
        next_day: 46,
      },
      "Stylish outfit": {
        traits: {
          Elliott: 1,
          Haley: 1,
        },
        next_day: 46,
      },
      "Seasonal attire": {
        traits: {
          Emily: 1,
          Penny: 1,
        },
        next_day: 46,
      },
      "Relaxed pajamas": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 46,
      },
    },
  },
  {
    id: 45,
    day: 8,
    time: '1:00 pm',
    story: `You go further into the building and explore. In the 
    corner of your eye, you see a lil moving apple :o.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/junimos.jpg`,
    options: {
      "Approach carefully": {
        traits: {
          Elliott: 1,
          Leah: 1,
        },
        next_day: 47,
      },
      "Observe quietly": {
        traits: {
          Sebastian: 1,
          Penny: 1,
        },
        next_day: 47,
      },
      "Leave it be": {
        traits: {
          Harvey: 1,
          Emily: 1,
        },
        next_day: 47,
      },
    },
  },
  {
    id: 46,
    day: 8,
    time: '6:00 pm',
    story: `You spend hours trying different outfits till you 
    finally find the one. Feeling proud of your fit, you head 
    to the saloon to show off your outfit. What do you order?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/saloon.jpg`,
    options: {
      "Beer": {
        traits: {
          Shane: 1,
        },
        next_day: 48,
      },
      "Salad": {
        traits: {
          Leah: 1,
          Emily: 1,
        },
        next_day: 48,
      },
      "Coffee": {
        traits: {
          Harvey: 1,
          Sebastian: 1,
        },
        next_day: 48,
      },
      "Pizza": {
        traits: {
          Sam: 1,
          Abigail: 1,
        },
        next_day: 48,
      },
    },
  },
  {
    id: 47,
    day: 8,
    time: '6:00 pm',
    story: `Before you can make a choice, the being envelops you 
    in a dream and introduces themselves as the Junimos.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/dream.jpg`,
    options: {
      "Excitedly introduce yourself": {
        traits: {
          Emily: 1,
          Elliott: 1,
        },
        next_day: 49,
      },
      "Frozen in fear": {
        traits: {
          Harvey: 1,
          Penny: 1,
        },
        next_day: 49,
      },
      "Ask questions": {
        traits: {
          Sebastian: 1,
          Maru: 1,
        },
        next_day: 49,
      },
      "Just observe": {
        traits: {
          Leah: 1,
          Abigail: 1,
        },
        next_day: 49,
      },
    },
  },
  {
    id: 48,
    day: 8,
    time: '12:00 am',
    story: `You enjoy the food and games. Dejected after losing 
    on the last level of Journey of the Prairie King, you...`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/angry.webp`,
    options: {
      "Order more food": {
        traits: {
          Shane: 1,
          Sam: 1,
        },
        next_day: 50,
      },
      "Strike up conversation": {
        traits: {
          Elliott: 1,
          Emily: 1,
        },
        next_day: 50,
      },
      "Try again": {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day: 50,
      },
      "Head home": {
        traits: {
          Penny: 1,
          Harvey: 1,
        },
        next_day: 51,
      },
    },
  },
  {
    id: 49,
    day: 8,
    time: '12:00 am',
    story: `The Junimos dream comes to an end, and you leave the run down building
    after the encounter`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/building.jpg`,
    options: {
      "Grab a drink at the Saloon to unwind": {
        traits: {
        },
        next_day: 50,
      },
      "Head home": {
        traits: {
        },
        next_day: 51,
      }
    },
  },
  {
    id: 50,
    day: 8,
    time: '2:00 am',
    story: `Staying in the saloon a bit longer was not the wisest 
    idea. You put your head down for a second and before you know 
    it you are asleep.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/saloon_asleep.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 52,
      },
    },
  },
  {
    id: 51,
    day: 8,
    time: '2:00 am',
    story: `You head home and pass out on your bed. 
    In your dreams you see the green creatures still.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 52,
      }
    },
  },
  {
    id: 52,
    day: 13,
    time: '10:00 am',
    story: `GOOD MORNING!!! Today is the long awaited annual 
    Egg Festival! The atmosphere is electric - how do you partake 
    in the festivities?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/egg_hunt.jpg`,
    options: {
      "Join the egg hunt": {
        traits: {
          AbigaiL: 1,
          Sam: 1,
        },
        next_day: 53,
      },
      "Too many people, I'd rather stay in the farm ": {
        traits: {
          Sebastian: 1,
          Harvey: 1,
          Maru: 1,
        },
        next_day: 55,
      },
      "Socialize": {
        traits: {
          Elliott: 1,
          Emily: 1,
        },
        next_day: 54,
      }
    },
  },
  {
    id: 53,
    day: 13,
    time: '12:00 pm',
    story: `You talk to mayor Lewis, and join the egg hunt. 
    Which direction do you go towards?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/egg_hunt_start.jpg`,
    options: {
      "The River": {
        traits: {
          Elliott: 1,
          Leah: 1,
        },
        next_day: 57,
      },
      "The Mountain": {
        traits: {
          Sebastians: 1,
          Maru: 1,
        },
        next_day: 57,
      },
      "The Farm": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 56,
      },
    },
  },
  {
    id: 54,
    day: 13,
    time: '3:00 pm',
    story: `You speak with all the villagers, and find yourself 
    in front of Pierre's stall. You find some pocket change, 
    what do you buy? `,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/pierre_egg_hunt.webp`,
    options: {
      "Strawberry seeds": {
        traits: {
          Abigail: 1,
          Harvey: 1,
        },
        next_day: 59,
      },
      "Lawn flamingo": {
        traits: {
          Emily: 1,
          Shane: 1,
        },
        next_day: 59,
      },
      "Plush bunny": {
        traits: {
          Penny: 1,
          Sam: 1,
        },
        next_day: 59,
      },
      "Plants": {
        traits: {
          Leah: 1,
          Elliott: 1,
        },
        next_day: 59,
      },
    },
  },
  {
    id: 55,
    day: 13,
    time: '12:00 pm',
    story: `You feed your pet, and find some seeds in your chest. 
    Which do you plant?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/seeds.jpg`,
    options: {
      "Parsnip": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 60,
      },
      "Potato": {
        traits: {
          Harvey: 1,
          Sebastian: 1,
        },
        next_day: 60,
      },
      "Cauliflower": {
        traits: {
          Maru: 1,
          Leah: 1,
        },
        next_day: 60,
      },
      "Green Bean": {
        traits: {
          Emily: 1,
          Elliott: 1,
        },
        next_day: 60,
      },
    },
  },
  {
    id: 56,
    day: 13,
    time: '3:00 pm',
    story: `:0 you won the egg hunt, and Lewis awarded you the straw hat.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/first.jpg`,
    options: {
      "Hit a pose": {
        traits: {
          Abigail: 1,
          Emily: 1,
        },
        next_day: 58,
      },
      "Hold onto it": {
        traits: {
          Sebastian: 1,
          Harvey: 1,
        },
        next_day: 58,
      },
      "Wear it": {
        traits: {
          Sam: 1,
          Leah: 1,
        },
        next_day: 58,
      }
    },
  },
  {
    id: 57,
    day: 13,
    time: '3:00 pm',
    story: `aw dang it. You got second, good try though...`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/second.jpg`,
    options: {
      "Take your award": {
        traits: {
        },
        next_day: 58,
      },
    },
  },
  {
    id: 58,
    day: 13,
    time: '10:00 pm',
    story: `You enjoy the festival for a while, talking to the other 
    villagers present and shopping the stalls. Eventually, it is 
    time to go home.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 64,
      }
    },
  },
  {
    id: 59, 
    day: 13,
    time: '10:00 pm',
    story: `You take your purchase and continue socializing, 
    but eventually the festivities tune down and it is time to go home.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 64,
      },
    },
  },
  {
    id: 60,
    day: 13,
    time: '6:00 pm',
    story: `After watering your plants you...`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/post_seeds.jpg`,
    options: {
      "Catch up on sleep": {
        traits: {
          Haley: 1,
          Penny: 1,
        },
        next_day: 61,
      },
      "Mine": {
        traits: {
          Sebastian: 1,
          Leah: 1,
        },
        next_day: 61,
      },
      "Cook": {
        traits: {
          Emily: 1,
          Maru: 1,
        },
        next_day: 62,
      },
      "Clean up the house and organize the chests": {
        traits: {
          Elliott: 1,
          Harvey: 1,
        },
        next_day: 61,
      },
    },
  },
  {
    id: 61,
    day: 13,
    time: '12:00 am',
    story: `After a nice long day, a nap would be nice. 
    The nap turns into sleep and the sun sets on another day 
    in Stardew Valley.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 64,
      }
    },
  },
  {
    id: 62,
    day: 13,
    time: '8:00 pm',
    story: `You look through the fridge to see what ingredients you 
    have, and you make a...`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/kitchen.jpg`,
    options: {
      "Fried egg": {
        traits: {
          Shane: 1,
          Harvey: 1,
        },
        next_day: 63,
      },
      "Sashimi": {
        traits: {
          Elliott: 1,
          Sebastian: 1,
        },
        next_day: 63,
      },
      "Fish taco": {
        traits: {
          Sam: 1,
          Maru: 1,
        },
        next_day: 63,
      },
      "Strange bun": {
        traits: {
          Emily: 1,
          Abigail: 1,
        },
        next_day: 63,
      },
    },
  },
  {
    id: 63,
    day: 13,
    time: '12:00 am',
    story: `The scent of fresh food fill the air, and you munch 
    away. Soon you fall into a food coma.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 64,
      },
    },
  },
  {
    id: 64,
    day: 24,
    time: '12:00 pm',
    story: `As the flowers bloom in anticipation of summer, the 
    annual Flower Dance is taking place. The dance doesn't start
    till 6:00pm, what do you do till then?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/flower_dance.webp`,
    options: {
      "Ask someone to Dance": {
        traits: {
          Abigail: 1,
          Emily: 1,
          Haley: 1,
        },
        next_day: 65,
      },
      "Watch from the Sidelines": {
        traits: {
          Sebastian: 1,
          Leah: 1,
        },
        next_day: 66,
      },
      "Mingle with the Villagers": {
        traits: {
          Penny: 1,
          Maru: 1,
          Alex: 1,
        },
        next_day: 65,
      },
      "Admire the Scenery": {
        traits: {
          Elliott: 1,
          Harvey: 1,
        },
        next_day: 66,
      },
    },
  },
  {
    id: 65,
    day: 24,
    time: '3:00 pm',
    story: `You walk around striking up conversation with the 
    townsfolk. Eventually, in the corner of your eye, you spot 
    someone would like to ask to the dance...`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/ask_dance.jpg`,
    options: {
      "H-h-hiii": {
        traits: {
          Sebastian: 1,
          Shane: 1,
        },
        next_day: 67,
      },
      "HEY CHAT": {
        traits: {
          Sam: 1,
          Abigail: 1,
        },
        next_day: 68,
      },
      "Hello gorgeous": {
        traits: {
          Elliott: 1,
          Emily: 1,
        },
        next_day: 67,
      },
      "Wave": {
        traits: {
          Leah: 1,
          Penny: 1,
        },
        next_day: 68,
      },
    },
  },
  {
    id: 66,
    day: 24,
    time: '3:00 pm',
    story: `You prepare to watch the dance from afar, 
    just taking in the breathtaking views. You visit 
    Pierre's stall and buy...`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/pierre_dance.webp`,
    options: {
      "Rarecrow": {
        traits: {
          Elliott: 1,
          Maru: 1,
        },
        next_day: 69,
      },
      "Tub o' Flowers recipe": {
        traits: {
          Emily: 1,
          Leah: 1,
        },
        next_day: 69,
      },
      "Decor": {
        traits: {
          Penny: 1,
          Harvey: 1,
          Haley: 1,
        },
        next_day: 70,
      }
    },
  },
  {
    id: 67,
    day: 24,
    time: '6:00 pm',
    story: `Your advance is gently declined. As you step back, 
    the dance starts. Someone else steps in, takes their hand 
    and leads them in the dance.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/ask_decline.jpg`,
    options: {
      "Try someone else": {
        traits: {
          Abigail: 1,
          Sam: 1,
        },
        next_day: 71,
      },
      "Sit down and watch the dance": {
        traits: {
          Sebastian: 1,
          Leah: 1,
        },
        next_day: 72,
      }
    },
  },
  {
    id: 68,
    day: 24,
    time: '10:00 pm',
    story: `They said they would appreciate your company, and as 
    the dance began, you grab their hand and make your way to the 
    middle. The two of you dance the night away.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/dance.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 76,
      }
    },
  },
  {
    id: 69,
    day: 24,
    time: '6:00 pm',
    story: `As pierre hands you your item, you pull out your purse 
    and realize you are 500g short.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/pierre_short_dance.webp`,
    options: {
      "Buy something else": {
        traits: {
          Emily: 1,
          Maru: 1,
        },
        next_day: 73,
      },
      "Leave ASAP": {
        traits: {
          Sebastian: 1,
          Leah: 1,
        },
        next_day: 74,
      }
    },
  },
  {
    id: 70,
    day: 24,
    time: '10:00 pm',
    story: `Pierre hands you the decor and you enjoy the rest of 
    the dance painting the scenery. Once you get back, 
    where do you place your decor?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/decor.jpg`,
    options: {
      "inside - next to my bed": {
        traits: {
          Harvey: 1,
          Maru: 1,
        },
        next_day: 75,
      },
      "inside - next to the entrance": {
        traits: {
          Penny: 1,
          Emily: 1,
        },
        next_day: 75,
      },
      "outside - next to the exit": {
        traits: {
          Sebastian: 1,
          Leah: 1,
        },
        next_day: 75,
      },
      "outside - next to the farm": {
        traits: {
          Abigail: 1,
          Shane: 1,
        },
        next_day: 75,
      },
    },
  },
  {
    id: 71,
    day: 24,
    time: '10:00 pm',
    story: `You try your luck with a different partner, 
    to your surprise, they agree. You dance the night away.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/ask_accept.webp`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 76,
      }
    },
  },
  {
    id: 72,
    day: 24,
    time: '10:00 pm',
    story: `The rejection hits you hard, you sit down, watch the dance. 
    Nothing can rid the embarrassment better than alcohol :D.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/dance.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 76,
      },
    },
  },
  {
    id: 73,
    day: 24,
    time: '10:00 pm',
    story: `You instead get the decor you were looking at earlier. 
    When you get home you place it...`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/decor.jpg`,
    options: {
      "inside - next to my bed": {
        traits: {
          Harvey: 1,
          Maru: 1,
        },
        next_day: 75,
      },
      "inside - next to the entrance": {
        traits: {
          Penny: 1,
          Emily: 1,
        },
        next_day: 75,
      },
      "outside - next to the exit": {
        traits: {
          Sebastian: 1,
          Leah: 1,
        },
        next_day: 75,
      },
      "outside - next to the farm": {
        traits: {
          Abigail: 1,
          Shane: 1,
        },
        next_day: 75,
      },
    },
  },
  {
    id: 74,
    day: 24,
    time: '7:00 pm',
    story: `In embarrassment you flee the scene, back into the 
    comfort of your home. You embrace your bed and hope you 
    forget by morning.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 76,
      }
    },
  },
  {
    id: 75,
    day: 24,
    time: '12:00 am',
    story: `You place your decor down, and step back to admire your work. 
    Satisfied, you decide you have earned yourself some sleep.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/bedge.jpg`,
    options: {
      "continue": {
        traits: {
        },
        next_day: 76,
      }
    },
  },
  {
    id: 76,
    day: 28,
    time: '2:00 am',
    story: `CONGRATULATIONS!!! You have made it to the end of your 
    first month.`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/end.jpg`,
    options: {
      "Enter Summer": {
        traits: {
        },
        next_day: 1000,
      }
    },
  },
]

/*
{
    id: ,
    day: ,
    time: '12:00 pm',
    story: ``,
    img: '',
    options: {
      "": {
        traits: {
        },
        next_day: ,
      },
      "": {
        traits: {
        },
        next_day: ,
      },
      "": {
        traits: {
        },
        next_day: ,
      },
      "": {
        traits: {
        },
        next_day:,
      },
    },
  },


export const Story = [
  {
    day:0, story:`Growing tired of a dull corporate life, have just quit your job at Joja, what do you do now?`,
    options: {
      'Move to Stardew Valley' : null,
      'Move to Stardew Valley' : null,
      'Move to Stardew Valley' : null,
      'Move to Stardew Valley' : null,
    }
  },
  {
    day:1, story: 'Welcome to Stardew Valley, it is your first day in Pelican Town, how do you spend it?',
    options: {
      'Greeting villagers': {
        e_i: 1,
        s_n: 0,
        t_f: -1,
        j_p : 1,
      },
      'PLanting crops':{
        e_i: -1,
        s_n: 0,
        t_f: 1,
        j_p : 1,
      },
      'Exploring the town':{
        e_i: 0,
        s_n: 1,
        t_f: 0,
        j_p :-1,
      },
      'IDK IM LOST':{

      }
    }
  },
  {
    day:1, story: '',
    options: {
      '':'',
      '':'',
      '':'',
      '':'',
    }
  }
]


export const VillagerMBTI = {
  ISTJ: "Harvey",
  ISFJ: "Penny",
  INFJ: "Abigail",
  INTJ: "Sebastian",
  ISTP: "Shane",
  ISFP: "Leah",
  INFP: "Elliott",
  INTP: "Maru",
  ESTP: "Alex",
  ESFP: "Sam",
  ENFP: "Emily",
  ENTP: "Maru",
  ESTJ: "Alex",
  ESFJ: "Emily",
  ENFJ: "Haley",
  ENTJ: "Elliott",
};*/