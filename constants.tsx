
import { Marker } from './types';

export const MAIN_BG_IMAGES = [
  "assets/images/4.PNG",
];

export const DEFAULT_BG_IMAGE = MAIN_BG_IMAGES[0];


export const MARKERS: Marker[] = [
  {
    id: 'corine',
    label: 'Corine',
    top: '20%',
    left: '18%',
    width: 'w-32 h-40 md:w-48 md:h-64',
    bgPos: 'top-[-20vh] left-[-18vw]',
    imageUrl: 'assets/article images/ear1.JPG',
    labelPosition: 'left'
  },
  {
    id: 'thalia',
    label: 'Thalia',
    top: '45%',
    right: '20%',
    width: 'w-24 h-24 md:w-32 md:h-32',
    bgPos: 'top-[-45vh] right-[-20vw]',
    imageUrl: 'assets/article images/pend1.JPG',
    labelPosition: 'right'
  },
  {
    id: 'alejandra',
    label: 'Infinity',
    bottom: '15%',
    left: '15%',
    width: 'w-40 h-24 md:w-56 md:h-32',
    bgPos: 'bottom-[-15vh] left-[-15vw]',
    imageUrl: 'assets/article images/ring1.JPG',
    imagePosition: '35% 65%',
    labelPosition: 'left'
  }
];
