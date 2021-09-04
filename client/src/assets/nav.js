//thread icons
import threadIcon from './navIcons/thread.svg';
import meetingIcon from './navIcons/meeting-room.svg';
import dmicon from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/dm.svg';
import integrate from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/integrate.svg';
import loungeicon from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/lounge.svg';
import meetIcon from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/meeting-room.svg';
import musicIcon from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/music-room.svg';
import conferenceIcon from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/conference-room.svg';
import chanIcons from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/chan-add.svg';
import announceIcons from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/announce.svg';
import designersIcons from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/designers.svg';
import stageIcons from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/stage.svg';

import directMsg2 from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/chan-add.svg';
import directMsg1 from '/home/asteven/Desktop/zc_plugin_company_shift/client/src/assets/navIcons/channel-down.svg';
const navBars = [
  {
    text: 'Threads',
    icon: threadIcon,
    subNav: false,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
  },
  {
    text: 'Mentions & Reactions ',
    icon: meetingIcon,
    subNav: false,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
  },
  {
    text: 'All DMs',
    icon: dmicon,
    subNav: false,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
  },
  {
    text: 'Integrate',
    icon: integrate,
    subNav: false,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: true,
  },
  {
    text: 'Lounge',
    icon: loungeicon,
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Integrate',
  },
  {
    text: 'Meeting-room',
    icon: meetIcon,
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Integrate',
  },
  {
    text: 'shift-management',
    icon: '',
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Integrate',
  },
  {
    text: 'Music-room',
    icon: musicIcon,
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Integrate',
  },
  {
    text: 'Conference-room',
    icon: conferenceIcon,
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Integrate',
  },

  {
    icon_2: directMsg2,
    icon_1: directMsg1,
    text: 'Channels',
    icon: chanIcons,
    subNav: false,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: true,
    multipleIcons: true,
  },
  {
    text: 'announcements',
    icon: announceIcons,
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Channels',
  },
  {
    text: 'designers',
    icon: designersIcons,
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Channels',
  },
  {
    text: 'stage 4',
    icon: stageIcons,
    subNav: true,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: false,
    parentText: 'Channels',
  },
  {
    text: 'Direct Messages',
    icon_2: directMsg2,
    icon_1: directMsg1,
    subNav: false,
    hasIcon: true,
    hasImage: false,
    img: null,
    hasSubNav: true,
    multipleIcons: true,
  },
  {
    text: 'Miles Esther',
    icon: '',
    subNav: true,
    hasIcon: false,
    hasImage: true,
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    hasSubNav: false,
    parentText: 'Direct Messages',
  },
  {
    text: 'Cooper Kristin',
    icon: '',
    subNav: true,
    hasIcon: false,
    hasImage: true,
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    hasSubNav: false,
    parentText: 'Direct Messages',
  },
  {
    text: 'Flores Juanita',
    icon: '',
    subNav: false,
    hasIcon: false,
    hasImage: true,
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    hasSubNav: false,
    parentText: 'Direct Messages',
  },
  {
    text: 'Black Marvin',
    icon: '',
    subNav: false,
    hasIcon: false,
    hasImage: true,
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    hasSubNav: false,
    parentText: 'Direct Messages',
  },
];

export default navBars;
