import restaurant from "./documents/restaurant";
import dish from "./documents/dish";
import menuCategory from "./documents/menuCategory";
import homePage from "./documents/homePage";
import aboutPage from "./documents/aboutPage";
import events from "./documents/events";
import eventsPage from "./documents/eventsPage";
import recurringEvents from "./documents/recurringEvents";

import meta from "./objects/meta";
import address from "./objects/address";
import hours from "./objects/hours";
import menuFile from "./objects/menuFile";
import subCategory from "./objects/subCategory";
import typeCategory from "./objects/typeCategory";
import priceBySize from "./objects/priceBySize";
import flyerImageObject from "./objects/flyer_image_object";

export default [
  // documents
  homePage,
  restaurant,
  eventsPage,
  events,
  recurringEvents,
  aboutPage,
  dish,
  menuCategory,
  // objects
  meta,
  address,
  hours,
  menuFile,
  subCategory,
  typeCategory,
  priceBySize,
  flyerImageObject,
];
