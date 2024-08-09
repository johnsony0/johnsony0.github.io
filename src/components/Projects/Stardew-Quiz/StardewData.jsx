/*give credits to:
font: https://www.reddit.com/r/StardewValley/comments/4dtgp7/by_popular_request_a_stardew_valley_font_for_your/
background: https://www.deviantart.com/bratzoid/art/Stardew-Valley-Dynamic-Wallpaper-1021978002
*/
export const getStoryById = (id) => Story.find((entry) => entry.id === id);

export const Story = [
  {
    id: 0,
    day: 0,
    time: '05:00 pm',
    story:`Growing tired of a dull corporate life, you quit your job at Joja. What do you do now?`,
    img: `${process.env.PUBLIC_URL}/stardew_quiz/joja.jpg`,
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
    story: 'Welcome to Stardew Valley, it is your first day in Pelican Town, how do you spend it?',
    img: `${process.env.PUBLIC_URL}/stardew_quiz/first_day.jpeg`,
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
    img: '',
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
    img: '',
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
    img: '',
    options: {
      "Chop it with your Axe": {
        traits: {
          Elliot: 1,
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
    img: '',
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
    img: '',
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
    img: '',
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
    story: `You get out of bed and finds that Willy has returned from 
    his fishing adventures. You meet him and he gives you a bamboo rod. 
    With a new tool in hand—what will you do next?`,
    img: '',
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
          Elliot: 1,
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
    img: '',
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
          Elliot: 1,
        },
        next_day: 14,
      }
    },
  },
  {
    id: 10,
    day: 1,
    time: '12:00 am',
    story: `In the mountains you gather some daffodils, you see 
    another one across the lake, but you are a bit tired.`,
    img: '',
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
    img: '',
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
    img: '',
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
    img: '',
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
    img: '',
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
    img: '',
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
    img: '',
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
    story: `You chat with Willyt and he tells you about the abundance 
    of Flounder in the Ocean.`,
    img: '',
    options: {
      "Lets go fishing for Sardines!!!": {
        traits: {
          Elliot: 1,
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
    story: `You explore the beach for a while, and 
    eventually stumble on a coral sticking out of the water`,
    img: '',
    options: {
      "Take it": {
        traits: {
          Abigail: 1,
          Leah: 1,
          Elliot: 1,
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
    img: '',
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
          Elliot: 1,
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
    img: '',
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
    story: `Folllowing the encounter with the fish you are exhausted 
    and go to bed. Until a loud explosion could be heard in the night.`,
    img: '',
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
          Elliot: 1,
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
    img: '',
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
          Elliot: 1,
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
    img: '',
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
          Elliot: 1,
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
    img: '',
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
    story: `The mermaid thanks you for leaving behind the coral. 
    Then using mermaid magic, sends you home.`,
    img: '',
    options: {
      "Reflect on the encounter": {
        traits: {
          Leah: 1,
          Sebastian: 1,
          Elliot: 1,
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
    img: '',
    options: {
      "Reflect on the encounter": {
        traits: {
          Leah: 1,
          Sebastian: 1,
          Elliot: 1,
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
    img: '',
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
    img: '',
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
          Elliot: 1,
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
    OH NO A HORDE OF SLIME.`,
    img: '',
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
          Elliot: 1,
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
    time: '9:00 pm',
    story: `You decide against the caves but see a beautiful lake 
    and Linus on your way out.`,
    img: '',
    options: {
      "Fish in the lake": {
        traits: {
          Elliot: 1,
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
    as you descend you are met by a horde of slimes.`,
    img: '',
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
          Elliot: 1,
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
    id: 32,
    day: 5,
    time: '3:00 pm',
    story: `Your encounter with the slime proved fatal, 
    luckily you are rescued from the mine by Maru. 
    After thanking her you are greeted with the view of a 
    beautiful mountain lake.`,
    img: '',
    options: {
      "Fishing !?!": {
        traits: {
          Sam: 1,
          Elliot: 1,
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
    img: '',
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
          Elliot: 1,
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
    story: `A successful fishing day, catching a variety of fish 
    like carp, bass, and chub.`,
    img: '',
    options: {
      "Sell fish": {
        traits: {
          Shane: 1,
        },
        next_day: 43,
      },
      "These fish would look great in an aquarium": {
        traits: {
          Elliot: 1,
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
    story: `A successful fishing day of mining, you reach floor 10 
    before leaving. Gathering enough copper for a few bars.`,
    img: '',
    options: {
      "Sell coppers": {
        traits: {
          Shane: 1,
        },
        next_day: 43,
      },
      "Smelt it": {
        traits: {
          Elliot: 1,
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
    img: '',
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
          Elliot: 1,
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
    img: '',
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
    good harvest of spring onions and dandelions`,
    img: '',
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
    img: '',
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
    With this new income let's explore town to see what we can buy. `,
    img: '',
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
    story: `While exploring the town, you stumble upon a dilapidated 
    building. Mayor Lewis unlocks the building and you enter. 
    You spot mysterious green beings, how do you react?`,
    img: '',
    options: {
      "AHHH GET THEM AWAY": {
        traits: {
          Shane: 1,
          Abigail: 1,
          Haley: 1,
        },
        next_day: 1000,
      },
      "awww cute lil things": {
        traits: {
          Emily: 1,
          Penny: 1,
        },
        next_day: 1000,
      },
      "Hm interesting, I should take a closer look": {
        traits: {
          Elliot: 1,
          Leah: 1,
          Maru: 1,
        },
        next_day: 1000,
      },
      "Eh probably just a bug": {
        traits: {
          Harvey: 1,
          Sebastian: 1,
        },
        next_day: 1000,
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
    img: '',
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
    img: '',
    options: {
      "continue": {
        traits: {
        },
        next_day: 40,
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