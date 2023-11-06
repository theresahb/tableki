import nav1 from './public/assets/icon-catalog-white.svg'
import nav2 from './public/assets/icon-services-white.svg'
import nav3 from './public/assets/icon-target-white.svg'

import services1 from './public/assets/icon-services-list.svg'
import services2 from './public/assets/icon-services-point.svg'
import services3 from './public/assets/icon-services-dr.svg'
import services4 from './public/assets/icon-services-extended.svg'
import services5 from './public/assets/icon-services-defective.svg'

import icon1 from './public/assets/icon-list-white.svg'
import icon2 from './public/assets/icon-cart-white.svg'
import icon3 from './public/assets/icon-user-white.svg'

import tab1 from './public/assets/home.svg'
import tab2 from './public/assets/category-2.svg'
import tab3 from './public/assets/shopping-cart.svg'
import tab4 from './public/assets/file-description.svg'
import tab5 from './public/assets/user.svg'

import step1 from './public/assets/icon-step1.svg'
import step2 from './public/assets/icon-step2.svg'
import step3 from './public/assets/icon-step3.svg'
import step4 from './public/assets/icon-step4.svg'

import side1 from './public/assets/side1.png'
import side2 from './public/assets/side2.png'
import side3 from './public/assets/side3.png'
import side4 from './public/assets/side4.png'
import side5 from './public/assets/side5.png'
import side6 from './public/assets/side6.png'
import side7 from './public/assets/side7.png'
import side8 from './public/assets/side8.png'
import side9 from './public/assets/side9.png'
import side10 from './public/assets/icon-catalog-green.svg'

import current1 from './public/assets/cat1.jpg'
import current2 from './public/assets/cat2.jpg'
import current3 from './public/assets/cat3.png'

import vitaminc from './public/assets/vitaminc.png'
import vitamind from './public/assets/vitamind.png'
import vitaminb from './public/assets/vitaminb.png'
import vitamina from './public/assets/vitamina.png'

import derma1 from './public/assets/derma1.png'
import derma2 from './public/assets/derma2.png'
import derma3 from './public/assets/derma3.png'
import derma4 from './public/assets/derma4.png'

import child1 from './public/assets/child1.jpg'
import child2 from './public/assets/child2.jpg'
import child3 from './public/assets/child3.jpg'

import health1 from './public/assets/health1.png'
import health2 from './public/assets/health2.png'
import health3 from './public/assets/health3.png'
import health4 from './public/assets/health4.png'

import animal1 from './public/assets/animal1.png'
import animal2 from './public/assets/animal2.png'
import animal3 from './public/assets/animal3.png'

import equipment1 from './public/assets/equipment1.png'
import equipment2 from './public/assets/equipment2.png'
import equipment3 from './public/assets/equipment3.png'
import equipment4 from './public/assets/equipment4.png'

import service1 from './public/assets/home-page-icon1.svg'
import service2 from './public/assets/home-page-icon3.svg'

import app1 from './public/assets/appstore-ua.svg'
import app2 from './public/assets/googleplay.svg'
import app3 from './public/assets/btn-app-gallery-ua.svg'

import partner1 from './public/assets/logo-moz.svg'
import partner2 from './public/assets/logo-vizicom.svg'

import arrow from './public/assets/arrow-large.svg'

import profile1 from './public/assets/icon-user-reserv.svg'
import profile2 from './public/assets/icon-user-selected.svg'
import profile3 from './public/assets/icon-pharmacies.svg'

export const navTabs = [
    {
        id: 1,
        image: nav1,
        text: 'Catalogue',
        content : [
            {
                id: 1,
                image: side1,
                text: 'Medicines and prophylactics',
            },
            {
                id: 2,
                image: side2,
                text: 'Vitamins and minerals',
            },
            {
                id: 3,
                image: side3,
                text: 'Beauty and care',
            },
            {
                id: 4,
                image: side4,
                text: 'Sports and health',
            },
            {
                id: 5,
                image: side5,
                text: 'Goods for children and mothers',
            },
            {
                id: 6,
                image: side6,
                text: 'Medical products',
            },
            {
                id: 7,
                image: side7,
                text: 'Orthopedics and rehabilitation',
            },
            {
                id: 8,
                image: side8,
                text: 'Medical equipment',
            },
            {
                id: 9,
                image: side9,
                text: 'Products for animals',
            },
            {
                id: 10,
                image: side10,
                text: 'The entire product catalogue',
            },

        ]
    },
    {
        id: 2,
        image: nav2,
        text: 'Services',
        content : [
            {
                id: 1,
                image: services1,
                text: 'Search for several products at once',
            },
            {
                id: 2,
                image: services2,
                text: 'Pharmacies nearby',
            },
            {
                id: 3,
                image: services3,
                text: 'Search by active substance',
            },
            {
                id: 4,
                image: services4,
                text: 'Advanced search',
            },
            {
                id: 5,
                image: services5,
                text: 'Defective series',
            },

        ]
    },
    {
        id: 3,
        image: nav3,
        text: 'Kyiv',
    },
]

export const navIcons = [
    {
        id: 1,
        image: icon1,
        link: '/shoppinglist/',
        text: '+'
    },
    {
        id: 2,
        image: icon2,
        link: '/reserve/',
        text: '0'
    },
    {
        id: 3,
        image: icon3,
        link: '/cabinet/login/',
    },
]

export const tab = [
    {
        id: 1,
        image: tab1,
        link: '/',
        text: 'Main',
    },
    {
        id: 2,
        image: tab2,
        link: '/category/',
        text: 'Catalogue',
    },
    {
        id: 3,
        image: tab3,
        link: '/reserve/',
        text: 'Basket',
        subtext: '+',
    },
    {
        id: 4,
        image: tab4,
        link: '/shoppinglist/',
        text: 'Shopping list',
        subtext: '+',
    },
    {
        id: 5,
        image: tab5,
        link: '/cabinet/',
        text: 'Profile',
    },
]

export const steps = [
    {
        id: 1,
        image: step1,
        text: 'Find the product',
        subtext: `Find the desired products in the search or in the catalog and click "Find in pharmacies".`,
    },
    {
        id: 2,
        image: step2,
        text: 'Choose a pharmacy',
        subtext: `Select the appropriate pharmacy from the list and click "Book".`,
    },
    {
        id: 3,
        image: step3,
        text: 'Make a reservation',
        subtext: `Add your contact details and click "Confirm booking".`,
    },
    {
        id: 4,
        image: step4,
        text: 'Pick up the order',
        subtext: `You will receive a message with a reservation number. Pick up the order at the pharmacy at this number.`,
    },
]

export const sidebar = [
    {
        id: 1,
        image: side1,
        text: 'Medicines and prophylactics',
    },
    {
        id: 2,
        image: side2,
        text: 'Vitamins and minerals',
    },
    {
        id: 3,
        image: side3,
        text: 'Beauty and care',
    },
    {
        id: 4,
        image: side4,
        text: 'Sports and health',
    },
    {
        id: 5,
        image: side5,
        text: 'Goods for children and mothers',
    },
    {
        id: 6,
        image: side6,
        text: 'Medical products',
    },
    {
        id: 7,
        image: side7,
        text: 'Orthopedics and rehabilitation',
    },
    {
        id: 8,
        image: side8,
        text: 'Medical equipment',
    },
    {
        id: 9,
        image: side9,
        text: 'Products for animals',
    },
    {
        id: 10,
        image: side10,
        text: 'The entire product catalogue',
    },
]

export const current = [
    {
        id: 1,
        image: current1,
        text: 'From colds and flu',
    },
    {
        id: 2,
        image: current2,
        text: 'For immunity',
    },
    {
        id: 3,
        image: current3,
        text: 'From stress',
    },
]

export const vitamins = [
    {
        id: 1,
        image: vitaminc,
        text: 'Vitamin C',
    },
    {
        id: 2,
        image: vitamind,
        text: 'Vitamin D',
    },
    {
        id: 3,
        image: vitaminb,
        text: 'Vitamin B',
    },
    {
        id: 4,
        image: vitamina,
        text: 'Vitamin A and E',
    },
]

export const derma = [
    {
        id: 1,
        image: derma1,
    },
    {
        id: 2,
        image: derma2,
    },
    {
        id: 3,
        image: derma3,
    },
    {
        id: 4,
        image: derma4,
    },
]

export const children = [
    {
        id: 1,
        image: child1,
        text: 'Baby food',
    },
    {
        id: 2,
        image: child2,
        text: 'Baby diapers and diapers',
    },
    {
        id: 3,
        image: child3,
        text: 'Bathing and baby care',
    },
]

export const sports = [
    {
        id: 1,
        image: health1,
        text: 'Protein bars',
    },
    {
        id: 2,
        image: health2,
        text: 'Protein bars',
    },
    {
        id: 3,
        image: health3,
        text: 'Protein bars',
    },
    {
        id: 4,
        image: health4,
        text: 'Protein bars',
    },
]

export const animals = [
    {
        id: 1,
        image: animal1,
        text: 'Dogs',
    },
    {
        id: 2,
        image: animal2,
        text: 'Cats',
    },
    {
        id: 3,
        image: animal3,
        text: 'Rodents',
    },
]

export const medical = [
    {
        id: 1,
        image: equipment1,
        text: 'Glucometers and test strips',
    },
    {
        id: 2,
        image: equipment2,
        text: 'Tonometers',
    },
    {
        id: 3,
        image: equipment3,
        text: 'Inhalers',
    },
    {
        id: 4,
        image: equipment4,
        text: 'Thermometers',
    },
]

export const alphabets = [
    {
        id: 1,
        title: 'A B C',
        content: [
            {
                id: 1,
                text: 'AND'
            },
            {
                id: 2,
                text: 'B'
            },
            {
                id: 3,
                text: 'IN'
            },
            {
                id: 4,
                text: 'G'
            },
            {
                id: 5,
                text: 'D'
            },
            {
                id: 6,
                text: 'IS'
            },
            {
                id: 7,
                text: 'J'
            },
            {
                id: 8,
                text: 'WITH'
            },
            {
                id: 9,
                text: 'I'
            },
            {
                id: 10,
                text: 'AND'
            },
            {
                id: 11,
                text: 'SHE'
            },
            {
                id: 12,
                text: 'AND'
            },
            {
                id: 13,
                text: 'K'
            },
            {
                id: 14,
                text: 'L'
            },
            {
                id: 15,
                text: 'M'
            },
            {
                id: 16,
                text: 'N'
            },
            {
                id: 17,
                text: 'AT'
            },
            {
                id: 18,
                text: 'P'
            },
            {
                id: 19,
                text: 'R'
            },
            {
                id: 20,
                text: 'WITH'
            },
            {
                id: 21,
                text: 'T'
            },
            {
                id: 22,
                text: 'IN'
            },
            {
                id: 23,
                text: 'F'
            },
            {
                id: 24,
                text: 'KH'
            },
            {
                id: 25,
                text: 'TS'
            },
            {
                id: 26,
                text: 'CH'
            },
            {
                id: 27,
                text: 'SH'
            },
            {
                id: 28,
                text: 'SH'
            },
            {
                id: 29,
                text: 'E'
            },
            {
                id: 30,
                text: 'YU'
            },
            {
                id: 31,
                text: 'I'
            },
        ],
    },
    {
        id: 2,
        title: 'ABC',
        content: [
            {
                id: 1,
                text: 'A'
            },
            {
                id: 2,
                text: 'B'
            },
            {
                id: 3,
                text: 'C'
            },
            {
                id: 4,
                text: 'D'
            },
            {
                id: 5,
                text: 'E'
            },
            {
                id: 6,
                text: 'F'
            },
            {
                id: 7,
                text: 'G'
            },
            {
                id: 8,
                text: 'H'
            },
            {
                id: 9,
                text: 'I'
            },
            {
                id: 10,
                text: 'J'
            },
            {
                id: 11,
                text: 'K'
            },
            {
                id: 12,
                text: 'L'
            },
            {
                id: 13,
                text: 'M'
            },
            {
                id: 14,
                text: 'N'
            },
            {
                id: 15,
                text: 'O'
            },
            {
                id: 16,
                text: 'P'
            },
            {
                id: 17,
                text: 'Q'
            },
            {
                id: 18,
                text: 'R'
            },
            {
                id: 19,
                text: 'S'
            },
            {
                id: 20,
                text: 'T'
            },
            {
                id: 21,
                text: 'U'
            },
            {
                id: 22,
                text: 'V'
            },
            {
                id: 23,
                text: 'W'
            },
            {
                id: 24,
                text: 'X'
            },
            {
                id: 25,
                text: 'Y'
            },
            {
                id: 26,
                text: 'Z'
            },
        ],
    },
    {
        id: 3,
        title: '123',
        content: [
            {
                id: 1,
                text: '+'
            },
            {
                id: 2,
                text: '1'
            },
            {
                id: 3,
                text: '2'
            },
            {
                id: 4,
                text: '3'
            },
            {
                id: 5,
                text: '4'
            },
            {
                id: 6,
                text: '5'
            },
            {
                id: 7,
                text: '6'
            },
            {
                id: 8,
                text: '7'
            },
            {
                id: 9,
                text: '8'
            },
            {
                id: 10,
                text: '9'
            },
            {
                id: 11,
                text: 'IS'
            },
        ],
    },
]

export const services = [
    {
        id: 1,
        image: service1,
        text: 'Payment',
        subtext: 'Purchase and payment for reserved goods is made directly at the pharmacy.',
        link: 'More details',
    },
    {
        id: 2,
        image: service2,
        text: 'Return',
        subtext: 'Medicines of good quality purchased in pharmacies cannot be returned...',
        link: 'Read more',
    },
]

export const users = [
    {
        id: 1,
        text: 'Pharmacies nearby',
    },
    {
        id: 2,
        text: 'Shipping and payment',
    },
    {
        id: 3,
        text: 'Return Policy',
    },
    {
        id: 4,
        text: 'Advanced Search',
    },
    {
        id: 5,
        text: 'Privacy Policy',
    },
    {
        id: 6,
        text: 'Terms of use',
    },
]

export const info = [
    {
        id: 1,
        text: 'About Us',
    },
    {
        id: 2,
        text: 'Editorial team',
    },
    {
        id: 3,
        text: 'Mass Media about us',
    },
    {
        id: 4,
        text: 'About booking',
    },
    {
        id: 5,
        text: 'Contacts',
    },
    {
        id: 6,
        text: 'Feedback',
    },
    {
        id: 7,
        text: 'Blog',
    },
    {
        id: 8,
        text: 'Our partners',
    },
]

export const parts = [
    {
        id: 1,
        text: 'Place a pharmacy',
    },
    {
        id: 2,
        text: 'Pharmacy personal account',
    },
    {
        id: 3,
        text: 'Advertising and Sponsorship Policy',
    },
]

export const apps = [
    {
        id: 1,
        image: app1,
    },
    {
        id: 2,
        image: app2,
    },
    {
        id: 3,
        image: app3,
    },
]

export const langs = [
    {
        id: 1,
        text: 'Ukrainian',
    },
    {
        id: 2,
        text: 'Russian',
    },
]

export const partners = [
    {
        id: 1,
        image: partner1,
    },
    {
        id: 2,
        image: partner2,
    },
]

export const cart = [
    {
        id: 1,
        text: 'Is your cart empty?',
        subtext: `It's not scary! If you are registered on the Tabletki website and there are products in the cart, you need to log in to see them .`,
    },
    {
        id: 2,
        text: 'Why book?',
        subtext: `You will be sure that the ordered products are waiting for you at the pharmacy at the specified price.`,
    },
    {
        id: 3,
        text: 'How to make a reservation?',
        subtext: `Find the products and add them to the cart at the pharmacy convenient for you, and then make a reservation.`,
    },
]

export const history = [
    {
        id: 1,
        text: 'Armor history is empty',
        subtext: `You haven't booked anything yet. If you are registered on the Tabletki.ua website and you had bookings, you need to log in to see them.`,
    },
    {
        id: 2,
        text: 'Why book?',
        subtext: `You will be sure that the ordered products are waiting for you at the pharmacy at the specified price.`,
    },
    {
        id: 3,
        text: 'How to make a reservation?',
        subtext: `Find a product or make a shopping list . Choose a pharmacy where it is convenient to pick up everything and press the "Book" button.`,
    },
]

export const shopTab = [
    {
        id: 1,
        title: 'Your list',
        subtext: '(empty)',
        link: '#list',
        content: [
            {
                text: 'create new list',
                image: arrow,
            }
        ]
    },
    {
        id: 2,
        title: 'Prices in pharmacies',
        subtext: '',
        link: '#',
        content: [
            {
                text: 'create new price',
                image: arrow,
            }
        ]
    },
]

export const cabinet = [
    {
        id: 1,
        image: '',
        link: '/cabinet/login/',
        text: 'Login / Registration',
    },
    {
        id: 2,
        image: profile1,
        link: '/reserve/history',
        text: 'My Armor',
    },
    {
        id: 3,
        image: profile2,
        link: '',
        text: 'My Product Lists',
    },
    {
        id: 4,
        image: profile3,
        link: '/cabinet/pharmacy/',
        text: 'My Pharmacies',
    },
]