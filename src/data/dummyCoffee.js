import { v4 as uuidv4 } from 'uuid';

import kopiKemasan from '../assets/kopi kemasan.png';
import kopiKemasan2 from '../assets/kopi kemasan 2.png';
import kopiCup2 from '../assets/kopi cup 2.png';
import kopiCup from '../assets/kopi cup.png';
import { FaWifi, FaBookOpen, FaMicrophoneAlt, FaShoppingBag, FaMapMarkedAlt, FaMusic, FaStore } from 'react-icons/fa';
import { GiCoffeeBeans } from 'react-icons/gi';
import { MdFastfood } from 'react-icons/md';
import baker from '../assets/baker.jpg';
import barista1 from '../assets/barista1.jpg';
import barista2 from '../assets/barista2.jpg';
import barista3 from '../assets/barista3.jpg';
import manager from '../assets/manager.jpg';
import owner from '../assets/owner.jpg';
import cafeLatte from '../assets/cafe latte.jpg';
import mocha from '../assets/mocha.jpg';
import espresso from '../assets/esspresso.jpg';
import macchiato from '../assets/macchiato.jpg';
import americano from '../assets/americano.jpg';
import cappuccino from '../assets/cappuccino.jpg';
import mochaccino from '../assets/mochaccino.jpg';
import brandLogo1 from '../assets/brand1.png';
import brandLogo2 from '../assets/brand2.png';
import brandLogo3 from '../assets/brand3.png';
import brandLogo4 from '../assets/brand4.png';
import brandLogo5 from '../assets/brand5.png';
import brandLogo6 from '../assets/brand6.png';
import brandLogo7 from '../assets/brand7.png';
import post1 from '../assets/post1.jpg';
import post2 from '../assets/post2.jpg';
import post3 from '../assets/post3.jpg';
import post4 from '../assets/post4.jpg';

const gallery1 = 'https://images.pexels.com/photos/16627279/pexels-photo-16627279/free-photo-of-coffee-grinders-at-cafe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const gallery2 = 'https://images.unsplash.com/photo-1505489304219-85ce17010209?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const gallery3 = 'https://images.pexels.com/photos/5586353/pexels-photo-5586353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const gallery4 = 'https://images.unsplash.com/photo-1500338900354-9860a96df6ab?q=80&w=1424&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const gallery5 = 'https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const gallery6 = 'https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const gallery7 = 'https://images.pexels.com/photos/1055054/pexels-photo-1055054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const gallery8 = 'https://images.pexels.com/photos/2220618/pexels-photo-2220618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const feed1 = 'https://images.unsplash.com/photo-1514371879740-2e7d2068f502?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const feed2 = 'https://images.unsplash.com/photo-1439466654360-5e8bbd819be5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const feed3 = 'https://images.unsplash.com/photo-1426260193283-c4daed7c2024?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const feed4 = 'https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const feed5 = 'https://images.unsplash.com/photo-1461963040894-7ee721035376?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const feed6 = 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const feeds = [
  {
    feed: feed1,
  },
  {
    feed: feed2,
  },
  {
    feed: feed3,
  },
  {
    feed: feed4,
  },
  {
    feed: feed5,
  },
  {
    feed: feed6,
  },
];

const shopData = [
  {
    id: uuidv4(),
    name: 'Arabica Coffee',
    like: 4,
    price: '11.00',
    image: kopiKemasan,
    date: '12 August',
    type: 'Arabica',
    tag: 'Packaging',
  },
  {
    id: uuidv4(),
    name: 'Espreso',
    like: 5,
    price: '11.00',
    image: kopiCup,
    date: '6 August',
    type: 'Arabica',
    tag: 'Cup',
  },
  {
    id: uuidv4(),
    name: 'Excelsa Coffee',
    like: 3,
    price: '21.00',
    image: kopiKemasan2,
    date: '31 July',
    type: 'Excelsa',
    tag: 'Packaging',
  },
  {
    id: uuidv4(),
    name: 'Latte',
    like: 5,
    price: '21.00',
    image: kopiCup2,
    date: '31 July',
    type: 'Robusta',
    tag: 'Cup',
  },
  {
    id: uuidv4(),
    name: 'Robusta Coffee',
    like: 4,
    price: '41.00',
    image: kopiKemasan,
    date: '6 August',
    type: 'Robusta',
    tag: 'Packaging',
  },
  {
    id: uuidv4(),
    name: 'Cappuccino',
    like: 5,
    price: '21.00',
    image: kopiCup,
    date: '12 August',
    type: 'Luwak',
    tag: 'Cup',
  },
  {
    id: uuidv4(),
    name: 'Liberica Coffee',
    like: 3,
    price: '41.00',
    image: kopiKemasan2,
    date: '12 August',
    type: 'Liberica',
    tag: 'Packaging',
  },
  {
    id: uuidv4(),
    name: 'Mochaccino',
    like: 5,
    price: '31.00',
    image: kopiCup2,
    date: '6 August',
    type: 'Arabica',
    tag: 'Cup',
  },
  {
    id: uuidv4(),
    name: 'Luwak Coffee',
    like: 4,
    price: '31.00',
    image: kopiKemasan,
    date: '31 July',
    type: 'Luwak',
    tag: 'Packaging',
  },
];

const productData = [
  {
    id: uuidv4(),
    name: 'Temperature',
    text: '43.5C',
  },
  {
    id: uuidv4(),
    name: 'Roasting Duration',
    text: '8 - 9 min',
  },
  {
    id: uuidv4(),
    name: 'Color',
    text: 'Brown',
  },
  {
    id: uuidv4(),
    name: 'Taste',
    text: 'Roaster Aroma',
  },
  {
    id: uuidv4(),
    name: 'Caffeine',
    text: 'Medium',
  },
];

const specsData = [
  {
    name: 'Stock',
    content: 100,
  },
  {
    name: 'Category',
    content: 'Cup',
  },
  {
    name: 'Coffee Type',
    content: 'Robusta Coffee',
  },
  {
    name: 'Brand',
    content: 'Naudhil Cafe',
  },
  {
    name: 'From',
    content: 'Bogor',
  },
];

const reviewsData = [
  {
    name: 'Human1',
    date: '14-03-2024',
    rating: 5,
    message: 'Lorem ipsum dolor sit a.met consectetur adipisicing elit.',
  },
];

const offeringData = [
  {
    id: uuidv4(),
    title: 'Free Wifi',
    icons: <FaWifi />,
  },
  {
    id: uuidv4(),
    title: 'Books & Newspaper',
    icons: <FaBookOpen />,
  },
  {
    id: uuidv4(),
    title: 'Events',
    icons: <FaMicrophoneAlt />,
  },
  {
    id: uuidv4(),
    title: 'Coffee Shop',
    icons: <FaShoppingBag />,
  },
  {
    id: uuidv4(),
    title: 'New Locations',
    icons: <FaMapMarkedAlt />,
  },
  {
    id: uuidv4(),
    title: 'Best Music',
    icons: <FaMusic />,
  },
  {
    id: uuidv4(),
    title: 'Cozy Place',
    icons: <FaStore />,
  },
  {
    id: uuidv4(),
    title: 'Various Menu',
    icons: <MdFastfood />,
  },
  {
    id: uuidv4(),
    title: 'Various Flavors',
    icons: <GiCoffeeBeans />,
  },
];

const teamData = [
  {
    id: uuidv4(),
    name: 'Valentino',
    job: 'Barista',
    profile: barista1,
  },
  {
    id: uuidv4(),
    name: 'Valencia',
    job: 'Barista',
    profile: barista2,
  },
  {
    id: uuidv4(),
    name: 'Florentina',
    job: 'Baker',
    profile: baker,
  },
  {
    id: uuidv4(),
    name: 'Raviel',
    job: 'Manager',
    profile: manager,
  },
  {
    id: uuidv4(),
    name: 'Uriel',
    job: 'Barista',
    profile: barista3,
  },
  {
    id: uuidv4(),
    name: 'Gustafo',
    job: 'Owner',
    profile: owner,
  },
];

const galleryData = [
  {
    id: uuidv4(),
    label: 'Perfect Cup',
    image: gallery1,
  },
  {
    id: uuidv4(),
    label: 'Interior Ideas',
    image: gallery5,
  },
  {
    id: uuidv4(),
    label: 'Coffee Drip',
    image: gallery2,
  },
  {
    id: uuidv4(),
    label: 'Everyday Beauty',
    image: gallery6,
  },
  {
    id: uuidv4(),
    label: 'Best Aroma',
    image: gallery3,
  },
  {
    id: uuidv4(),
    label: 'Coffee Decorations',
    image: gallery7,
  },
  {
    id: uuidv4(),
    label: 'Brewed',
    image: gallery4,
  },
  {
    id: uuidv4(),
    label: 'Your Favorite Place',
    image: gallery8,
  },
];

const tablePersonData = [
  { person: '1 person' },
  { person: '2 people' },
  { person: '3 people' },
  { person: '4 people' },
  { person: '5 people' },
  { person: '6 people' },
  { person: '7 people' },
  { person: '8 people' },
  { person: '9 people' },
  { person: '10 people' },
];

const tableHoursData = [
  { hours: '9:00 a.m' },
  { hours: '10:00 a.m' },
  { hours: '11:00 a.m' },
  { hours: '12:00 p.m' },
  { hours: '13:00 p.m' },
  { hours: '14:00 p.m' },
  { hours: '15:00 p.m' },
  { hours: '16:00 p.m' },
  { hours: '17:00 p.m' },
  { hours: '18:00 p.m' },
  { hours: '19:00 p.m' },
  { hours: '20:00 p.m' },
  { hours: '21:00 p.m' },
  { hours: '22:00 p.m' },
  { hours: '23:00 p.m' },
];

const menuData = [
  {
    id: uuidv4(),
    title: 'Cafe Latte',
    image: cafeLatte,
    price: 2.29,
  },
  {
    id: uuidv4(),
    title: 'Mocha',
    image: mocha,
    price: 3.75,
  },
  {
    id: uuidv4(),
    title: 'Espresso',
    image: espresso,
    price: 4.29,
  },
  {
    id: uuidv4(),
    title: 'Macchiato',
    image: macchiato,
    price: 4.75,
  },
  {
    id: uuidv4(),
    title: 'Americano',
    image: americano,
    price: 5.29,
  },
  {
    id: uuidv4(),
    title: 'Cappuccino',
    image: cappuccino,
    price: 5.75,
  },
  {
    id: uuidv4(),
    title: 'Mochaccino',
    image: mochaccino,
    price: 1.29,
  },
];

const coffeeTypes = [{ list: 'Hot Coffee' }, { list: 'Ice Coffee' }];

const coffeeBeans = [{ list: 'Arabica' }, { list: 'Robusta' }, { list: 'Excelsa' }, { list: 'Liberica' }, { list: 'Luwak' }];

const coffeePastry = [
  {
    list: 'Croissant',
  },
  {
    list: 'Muffin',
  },
  {
    list: 'Danish',
  },
  {
    list: 'Zufa Soup',
  },
];

const coffeeSizes = [{ list: 'Small' }, { list: 'Medium' }, { list: 'Large' }];

const serviceData = [
  {
    id: uuidv4(),
    link: '/pages/services',
    title: 'Beautiful Place',
    image: 'https://images.unsplash.com/photo-1447879027584-9d17c2ca0333?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: uuidv4(),
    link: '/pages/process',
    title: 'Feel the Coffee',
    image: 'https://images.unsplash.com/photo-1498653893439-4a6b2ed3b9ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: uuidv4(),
    link: '/menu/our-menu',
    title: 'Full Taste',
    image: 'https://images.unsplash.com/photo-1594402918538-96636fcb6d8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const brandLogo = [{ img: brandLogo1 }, { img: brandLogo2 }, { img: brandLogo3 }, { img: brandLogo4 }, { img: brandLogo5 }, { img: brandLogo6 }, { img: brandLogo7 }];

const blogMainData = [
  {
    id: uuidv4(),
    image: post1,
    title: 'Coffee Breaktime',
    date: '15-10-2024',
    creator: 'Naudhil',
    category: 'Meal',
  },
  {
    id: uuidv4(),
    image: post2,
    title: 'Cozy Cafe',
    date: '13-10-2024',
    creator: 'Naudhil',
    category: 'Interior',
  },
  {
    id: uuidv4(),
    image: post3,
    title: 'Diverse Menu',
    date: '14-10-2024',
    creator: 'Naudhil',
    category: 'Meal',
  },
  {
    id: uuidv4(),
    title: 'Upgrade your mind by reading book',
    creator: 'Naudhil',
    date: '16-09-2024',
    image: post1,
    category: 'Enjoyment',
  },
  {
    id: uuidv4(),
    title: 'Found a way to motivate yourself',
    creator: 'Naudhil',
    date: '15-09-2024',
    image: post2,
    category: 'Life',
  },
  {
    id: uuidv4(),
    title: 'Keep the coffee for better quality',
    creator: 'Naudhil',
    date: '14-09-2024',
    image: post3,
    category: 'Lifestyle',
  },
  {
    id: uuidv4(),
    title: 'Make the dream come true with coffee',
    creator: 'Naudhil',
    date: '13-09-2024',
    image: post4,
    category: 'Interior',
  },
];

const categoriesData = [
  {
    id: uuidv4(),
    amount: 3,
    category: 'Meal',
  },
  {
    id: uuidv4(),
    amount: 10,
    category: 'Interior',
  },
  {
    id: uuidv4(),
    amount: 13,
    category: 'Enjoyment',
  },
  {
    id: uuidv4(),
    amount: 3,
    category: 'Life',
  },
  {
    id: uuidv4(),
    amount: 10,
    category: 'Lifestyle',
  },
];

const cartData = [
  {
    id: uuidv4(),
    label: 'Arabica Coffee',
    quantity: 1,
    price: '21.00',
    image: kopiKemasan,
  },
];

const tableGroupData = [
  {
    tableHeader: [
      {
        header: 'Product',
      },
      {
        header: 'Price',
      },
      {
        header: 'Quantity',
      },
      {
        header: 'Subtotal',
      },
    ],
  },
];

const shippingData = [
  {
    id: uuidv4(),
    package: 'Economy',
    price: '1.00',
    delivery: '31 Oct - 1 Nov',
  },
  {
    id: uuidv4(),
    package: 'Regular',
    price: '3.00',
    delivery: '31 Oct - 1 Nov',
  },
  {
    id: uuidv4(),
    package: 'Next Day',
    price: '5.00',
    delivery: '31 Oct',
  },
];

export {
  shopData,
  productData,
  specsData,
  reviewsData,
  offeringData,
  teamData,
  galleryData,
  tablePersonData,
  tableHoursData,
  menuData,
  coffeeTypes,
  coffeeBeans,
  coffeePastry,
  coffeeSizes,
  serviceData,
  brandLogo,
  blogMainData,
  categoriesData,
  feeds,
  cartData,
  tableGroupData,
  shippingData,
};
