import fb_before from '../../../assets/clarity/clean_fb_before.png';
import fb_after from '../../../assets/clarity/clean_fb_after.png';
import filter_before from '../../../assets/clarity/clean_filter_before.png';
import filter_after from '../../../assets/clarity/clean_filter_after.png';
import fb_search_before from '../../../assets/clarity/clean_fb_search_before.png';
import fb_search_after from '../../../assets/clarity/clean_fb_search_after.png';

import twitch_home_before from '../../../assets/clarity/twitch_home_before.png';
import twitch_home_after from '../../../assets/clarity/twitch_home_after.png';
import twitch_video_before from '../../../assets/clarity/twitch_video_before.png';
import twitch_video_after from '../../../assets/clarity/twitch_video_after.png';
import twitch_profile_before from '../../../assets/clarity/twitch_profile_before.png';
import twitch_profile_after from '../../../assets/clarity/twitch_profile_after.png';
import twitch_search_before from '../../../assets/clarity/twitch_search_before.png';
import twitch_search_after from '../../../assets/clarity/twitch_search_after.png';

import x_before from '../../../assets/clarity/clean_x_before.png';
import x_after from '../../../assets/clarity/clean_x_after.png';
import x_profile_before from '../../../assets/clarity/clean_x_profile_before.png';
import x_profile_after from '../../../assets/clarity/clean_x_profile_after.png'; 
import x_search_before from '../../../assets/clarity/clean_x_search_before.png';
import x_search_after from '../../../assets/clarity/clean_x_search_after.png';   

import yt_before from '../../../assets/clarity/clean_yt_before.png';
import yt_after from '../../../assets/clarity/clean_yt_after.png';
import video_before from '../../../assets/clarity/clean_video_before.png';
import video_after from '../../../assets/clarity/clean_video_after.png';  
import yt_profile_before from '../../../assets/clarity/clean_yt_profile_before.png';
import yt_profile_after from '../../../assets/clarity/clean_yt_profile_after.png';
import yt_search_before from '../../../assets/clarity/clean_yt_search_before.png';
import yt_search_after from '../../../assets/clarity/clean_yt_search_after.png';

import grayscale_before from '../../../assets/clarity/clean_grayscale_before.png';
import grayscale_after from '../../../assets/clarity/clean_grayscale_after.png';
import timer from '../../../assets/clarity/clean_timer.png';
import limit from '../../../assets/clarity/clean_limit.png';
import bias_before from '../../../assets/clarity/extra_bias_filter_before.png';
import bias_after from '../../../assets/clarity/extra_bias_filter_after.png';
import channel_before from '../../../assets/clarity/extra_channel_filter_before.png';
import channel_after from '../../../assets/clarity/extra_channel_filter_after.png';
import content_before from '../../../assets/clarity/extra_content_filter_before.png';
import content_after from '../../../assets/clarity/extra_content_filter_after.png';

export const fb_data = [
  {
    firstImage: fb_before,
    secondImage: fb_after,
    header: 'Home',
    theme: 'dark' 
  },
  {
    firstImage: filter_before,
    secondImage: filter_after,
    header: 'Profile + Posts',
    theme: 'dark'
  },
  {
    firstImage: fb_search_before,
    secondImage: fb_search_after,
    header: 'Search',
    theme: 'dark'
  },
]

export const twitch_data = [
  {
    firstImage: twitch_home_before,
    secondImage: twitch_home_after,
    header: 'Home',
    theme: 'light'
  },
  {
    firstImage: twitch_video_before,
    secondImage: twitch_video_after,
    header: 'Video',
    theme: 'light'
  },
  {
    firstImage: twitch_profile_before,
    secondImage: twitch_profile_after,
    header: 'Profile',
    theme: 'light'
  },
  {
    firstImage: twitch_search_before,
    secondImage: twitch_search_after,
    header: 'Search',
    theme: 'light'
  },
]

export const x_data = [
  {
    firstImage: x_before,
    secondImage: x_after,
    header: 'Home',
    theme: 'light' 
  },
  {
    firstImage: x_profile_before,
    secondImage: x_profile_after,
    header: 'Profile + Tweets',
    theme: 'light'
  },
  {
    firstImage: x_search_before,
    secondImage: x_search_after,
    header: 'Search',
    theme: 'light'
  },
]

export const yt_data = [
  {
    firstImage: video_before,
    secondImage: video_after,
    header: 'Video',
    theme: 'dark'
  },
  {
    firstImage: yt_before,
    secondImage: yt_after,
    header: 'Home',
    theme: 'dark' 
  },
  {
    firstImage: yt_profile_before,
    secondImage: yt_profile_after,
    header: 'Profile',
    theme: 'dark'
  },
  {
    firstImage: yt_search_before,
    secondImage: yt_search_after,
    header: 'Search',
    theme: 'dark'
  }
]

export const shared_data = [
  {
    firstImage: grayscale_before,
    secondImage: grayscale_after,
    header: 'Grayscale',
    theme: 'light' 
  },
  {
    firstImage: timer,
    secondImage: limit,
    header: 'Timer vs Limit',
    theme: 'light'
  },
  {
    firstImage: bias_before,
    secondImage: bias_after,
    header: 'Bias Filter',
    theme: 'light'
  },
  {
    firstImage: channel_before,
    secondImage: channel_after,
    header: 'Channel Filter',
    theme: 'light'
  },
  {
    firstImage: content_before,
    secondImage: content_after,
    header: 'Content Filter',
    theme: 'light'
  }
]
