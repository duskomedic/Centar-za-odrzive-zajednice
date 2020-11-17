/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: `Centar za održive zajednice`,
        author: {
            name: `Duško Medić`,
        },
        description: `Websajt nevladine organizacije iz Novog Sada`,

        /* Choose and arrange the sections to be displayed on the landing page */
        sections: [
            `hero`,
            `features`,
            // `pricing`,
            `testimonials`,
            `call-to-action`,
            // `screenshots`,
            // `subscribe`
        ],

        /* Configure the navigation menu */
        menuItems: [
            { path: 'features', label: 'Izdvajamo' },
            // { path: 'pricing', label: 'Publikacije' },
            // { path: 'screenshots', label: 'Projekti' },
            { path: 'testimonials', label: 'O nama' },
            // { path: 'subscribe', label: 'Subscribe' },
        ],

        /* Provide social media accounts. Remove or add new services. (The value 'fa' is the name of FontAwesome icon to display. Choose from here: https://fontawesome.com/cheatsheet/free/brands ) */
        social: [{
                service: `Facebook`,
                url: `https://www.facebook.com/PolitikeEUiSRBIJAKlimaiEkologija`,
                fa: `facebook`
            },
            {
                service: `Twitter`,
                url: `https://twitter.com/prijateljizs`,
                fa: `twitter`
            },
            {
                service: `GitHub`,
                url: `https://github.com/duskomedic`,
                fa: `github`
            },
        ],

        /* Path to favicon and logo (located inside the 'static' folder) */
        favicon: `favicon.png`,
        logo: `/images/logo.png`,

        /* Logo and text to show in footer */
        footer: {
            logo: `/images/footer-logo.png`,
            text: `Centar za odrzive zajednice (COZ) / Center for Sustainable Communities (CSC)
            Matični broj: 28046057
            PIB: 107077984
            Datum osnivanja: 24.02.2011.
            Delatnost: 9949 – Delatnost ostalih organizacija na bazi učlanjenja`,
        },

        /* Address and contact info to show in footer */
        address: {
            line1: `Jerneja Kopitara 40c`,
            line2: `21000 Novi Sad`,
            line3: `Republika Srbija`,
        },
        contacts: [
            { text: `+381606466205`, url: `+381606466205` },
            { text: `+381216466205`, url: `tel:+381216466205` },
            { text: `prijateljizs@gmail.com`, url: `mailto:prijateljizs@gmail.com` },
        ],
    },
    plugins: [`gatsby-plugin-anchor-links`, `gatsby-plugin-smoothscroll`, `react-scrollspy`],
}
