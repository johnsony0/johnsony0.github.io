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
          Alex: 1,
          Haley: 1,
        },
        next_day: 0,
      },
      'Plant crops': {
        traits: {
          Harvey: 1,
          Maru: 1,
          Penny: 1,
        },
        next_day : 0,
      },
      'Explore the forest': {
        traits: {
          Abigail: 1,
          Sebastian: 1,
        },
        next_day : 0,
      },
      'IM OVERWHELMED': {
        traits: {
          Penny: 1,
          Shane: 1,
        },
        next_day : 0,
      },
    },
  },
]

/*export const Story = [
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