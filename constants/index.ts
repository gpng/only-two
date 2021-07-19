import { Place } from 'models/place';

export const BOT_TOKEN = process.env.NEXT_PUBLIC_BOT_TOKEN;
export const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;

export const LAST_UPDATED = new Date(2021, 6, 19, 17, 20);

export const LIST: Array<Place> = [
  {
    name: "McDonald's",
    fb: 'https://www.facebook.com/mcdsg/photos/a.161567683889813/4275980365781837/',
    insta: 'https://www.instagram.com/p/CRc-DEXISRa/',
  },
  {
    name: "Arnold's Fried Chicken",
    fb: 'https://www.facebook.com/ArnoldsFriedChicken/posts/4396561780383373',
  },
  { name: "Nando's Singapore", insta: 'https://www.instagram.com/p/CRfsQfNMEwv/' },

  {
    name: "Carl's Jr. Singapore",
    insta: 'https://www.instagram.com/p/CRfVL6els_b/',
  },
  {
    name: 'Toast Box',
    insta: 'https://www.instagram.com/p/CRdZFb0LkIo/',
  },
  {
    name: 'Long John Silver’s',
    insta: 'https://www.instagram.com/p/CRdi76ShQXu/',
  },
  {
    name: 'Subway',
    fb: 'https://www.facebook.com/SubwaySingapore/posts/10159098108025935',
  },
  {
    name: 'KFC',
    insta: 'https://www.instagram.com/p/CRdfWu2lu-j/',
  },
  {
    name: 'Burger King',
    insta: 'https://www.instagram.com/p/CRfP-L9HI0c/',
  },
  {
    name: 'Charlie Tea',
    insta: 'https://www.instagram.com/p/CRftC61HMGq/',
  },
  { name: 'Cafe&Meal MUJI', fb: 'https://www.facebook.com/muji.sg/posts/4170556196359678' },
];
