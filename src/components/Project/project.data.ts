export const ProjectData = [
    {
        name: 'Paint Game',
        image: '',
        description: 'Paint game to prosta gra logiczna, której celem jest zapełnienie planszy jednym kolorem.',
        demo: {
            url: 'https://paint-game2k22.netlify.app/',
        },
        links: [
            {
                name: 'Github',
                url: 'https://github.com/mateuszslowinski/paintGame',
            },

        ],
        technology:['React']

    },

    {
        name: 'Games World',
        image: '/images/projectImages/Games-projekt.png',
        description: 'Aplikacja będzie ukazywać historie produkcji wydanych na poszczególne konsole.',
        links: [
            {
                name: 'Frontend',
                url: 'https://github.com/mateuszslowinski/gamesFront',
            },
            {
                name: 'Backend',
                url: 'https://github.com/mateuszslowinski/gamesBack',
            }
        ],
        technology:['React', 'NestJS','Prisma']
    },
    {
        name: 'Tea Shop',
        image: '/images/projectImages/TeaShop.png',
        description: 'Aplikacja mająca na celu imitować sklep z herbatami. Z funkcja składania zamówienia, przeglądania historii swoich zamówień oraz z możliwością zapisania się do newsletteru.',
        demo: {
            url: 'https://tea-shop-front.herokuapp.com',
        },
        links: [
            {
                name: 'Frontend',
                url: 'https://github.com/mateuszslowinski/teaShopFront',
            },
            {
                name: 'Backend',
                url: 'https://github.com/mateuszslowinski/teaShop-backend',
            }
        ],
        technology:['React', 'ExpressJS','MongoDB']

    },
    {
        name: 'Mega Books',
        image: '/images/projectImages/BookWorld.png',
        description: 'Aplikacja do zarządzania swojej historii swoich przeczytanych książek, posiada moduł rejestracji i logowania oraz przypisywania kolekcji książek do każdego użytkownika.',

        links: [
            {
                name: 'Frontend',
                url: 'https://github.com/mateuszslowinski/megakBooksFront',
            },
            {
                name: 'Backend',
                url: 'https://github.com/mateuszslowinski/megakBooksBack',
            }
        ],
        technology:['React', 'ExpressJS','MySQL']
    },
]