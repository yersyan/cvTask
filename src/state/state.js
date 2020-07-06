import React, {createContext} from "react";
import testimonial1 from "../img/testimonials/testimonial-1.jpg";
import testimonial2 from "../img/testimonials/testimonial-2.jpg";
import testimonial3 from "../img/testimonials/testimonial-3.jpg";
import logo1 from "../img/clients/client-1.png";
import logo2 from "../img/clients/client-2.png";
import logo3 from "../img/clients/client-3.png";
import logo4 from "../img/clients/client-4.png";
import logo5 from "../img/clients/client-5.png";
import logo6 from "../img/clients/client-6.png";
import logo7 from "../img/clients/client-7.png";
import {faClock, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";
import img from "../img/clients/client-1.png";
import img1 from "../img/portfolio/1.jpg";
import img2 from "../img/portfolio/2.jpg";
import img3 from "../img/portfolio/3.jpg";
import img4 from "../img/portfolio/4.jpg";
import img5 from "../img/portfolio/5.jpg";
import img6 from "../img/portfolio/6.jpg";
import profileImage from "../img/Art.jpg";

let initialState = {
    menu: [
        {id: 1, title: "Home", path: "/home", icon: "lnr-home", active: true},
        {id: 2, title: "About", path: "/about", icon: "lnr-user", active: false},
        {id: 3, title: "Resume", path: "/resume", icon: "lnr-graduation-hat", active: false},
        {id: 4, title: "Portfolio", path: "/portfolio", icon: "lnr-briefcase", active: false},
        {id: 5, title: "Blog", path: "/blog", icon: "lnr-book", active: false},
        {id: 6, title: "Contact", path: "/contact", icon: "lnr-envelope", active: false},
    ],
    profile: {
        img: profileImage,
        fullName: "Artak Hovakimyan",
        specialty: [
            {title: "Senior Developer Engineer", status: "main"},
            {title: "Frontend-developer", status: ""},
        ]
    },
    socialLinks: [
        {icon: "fa-linkedin-in", source: "/#", target: "_blank"},
        {icon: "fa-facebook-f", source: "/#", target: "_blank"},
        {icon: "fa-twitter", source: "/#", target: "_blank"},
        {icon: "fa-github", source: "/#", target: "_blank"},
    ],
    copyrights: {
      date: new Date().getFullYear(),
      text: "All rights reserved."
    },
    infoData: {
        infoText: `I have skills and knowledge for working on all key areas of an organization and managed my time on trying myself also on development (coding) area. Team Lead / Senior developer engineer and architect with more than 5 years of development experience. Proficient in: JavaScript, Backbone, Marionette, HTML / XHTML, HTML5, CSS CSS3, PHP, Mysql, MongoDB application development, Zend Framework based application development, Wordpress custom plugin development, Magento theme development, Magento extension development, jQuery custom plugin development.`,
        infoList: [
            {title: "Age", value: `${new Date().getFullYear() - 1983}`},
            {title: "Residence", value: "Armenia"},
            {title: "Address", value: "Republic of Armenia, 0033, Yerevan, H. Emin 6, apt. 12"},
            {title: "eMail", value: "ahovakimyan@beeoncode.com"},
            {title: "Phone", value: `(+374) 77-94-88-88`},
        ],
        infoListWIconData: {
            title: {mainTitle: "What", spanTitle: "I Do"},
            infoListWIcon: [
                {
                    icon: "lnr-store", title: "Ecommerce", text: `Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.`
                },
                {
                    icon: "lnr-pencil", title: "Copywriting", text: `Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.`
                },
                {
                    icon: "lnr-laptop-phone", title: "Web Design", text: `Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.`
                },
                {
                    icon: "lnr-flag", title: "Management", text: `Pellentesque pellentesque, ipsum sit amet auctor
                                        accumsan, odio tortor bibendum massa, sit amet
                                        ultricies ex lectus scelerisque nibh. Ut non
                                        sodales.`
                },
            ]
        },
    },
    testimonialsData: {
        title: {mainTitle: "Testimonials", spanTitle: ""},
        testimonials: [
            {img: testimonial1, name: "Julia Hickman", company: "Omni Source"},
            {img: testimonial2, name: "Robert Watkins", company: "Endicott Shoes"},
            {img: testimonial3, name: "Kristin Carroll", company: "Helping Hand"},
        ],
    },
    clientsData: {
        title: {mainTitle: "Clients", spanTitle: ""},
        clients: [
            {logo: logo1, },
            {logo: logo2, },
            {logo: logo3, },
            {logo: logo4, },
            {logo: logo5, },
            {logo: logo6, },
            {logo: logo7, },
        ]
    },
    factsData: {
        title: {mainTitle: "Fun", spanTitle: "Facts"},
        facts: [
            {img: faHeart, title: "Happy Clients", quantity: 578},
            {img: faClock, title: "Working Hours", quantity: 4780},
            {img: faStar, title: "Awards Won", quantity: 15},
        ]
    },
    timelineData: [
        {
            title: {mainTitle: "Education", spanTitle: ""},
            array: [
                {
                    period: "2007-2009",
                    company: "Yerevan State University",
                    title: "Master's Degree",
                    text: `Faculty of Mathematics`
                },
                {
                    period: "2001-2006",
                    company: "Yerevan State University",
                    title: "Bachelor's Degree higher special",
                    text: `Faculty of Mathematics`
                },
                {
                    period: "1990-2000",
                    company: "Yerevan, Armenia 145th Secondary School",
                    title: "Secondary Education and Teaching",
                    text: ``
                },
            ]
        },
        {
            title: {mainTitle: "Experience", spanTitle: ""},
            array: [
                {
                    period: "2015 - Till Now",
                    company: "BeeOnCode",
                    title: "CO-Founder ",
                    text: `www.beeoncode.com`
                },
                {
                    period: "2014 - Till Now",
                    company: "Plexidoft Software",
                    title: "E-Commerce Developer Engineer",
                    text: `PHP Yii Framework, MySql, JavaScript, Jquery, mongoDb .`
                },
                {
                    period: "2013 - 2014",
                    company: "NOVEMBIT CJSC",
                    title: "Senior Backend Developer Engineer",
                    text: `“matea.com” is a web multi-Vendor Shop. This Shop is built on responsive layout for all screen resolutions. It gives opportunity to show and manage products of different Vendors. There are 2 payment methods, Ogone and PayPal. Used technologies and languages: PHP MVC, MySql, JavaScript, Jquery,(Ogone payment API, PayPal API) “LaPoste” is a web site where users give questions and the specialist gives the answers . There is a chance to approve or decline questions. Used technologies and languages: PHP Yii Framework, MySql, JavaScript, Jquery .`
                },
                {
                    period: "2011 - 2012",
                    company: "AlphaSoft",
                    title: "Senior Developer Engineer",
                    text: `“Supporter” (supportus.com.au) Web application based on Zend Framework . It scraps information about different products and corporations from API’s or HTML.(Used APIs CommissionMonster, CommissionFactory, DGM ... etc.) Used technologies and languages: Zend Framework, PHP, MySql, Dojo Toolkit “MyTravelMap” is a travel agency portal, where users can book tours, hotels and air tickets and integrated mutiple API’s. Used technologies and languages: Web Services, PHP, MySql Database migrations from one platform to another ones. Fixed bugs and added new features for already developed web sites and applications such as Magento, Backbone/Marionette, Zend Framework, YII Framework, Wordpress, Joomla, etc.. “thdental.am” is a dental labaratory, where users can get information about their products Used technologies and languages: PHP, WordPress, MySql`
                },
                {
                    period: "2009 - Till Now",
                    company: "Freelance",
                    title: "Freelancer",
                    text: `“matea.com” is a web multi-Vendor Shop. This Shop is built on responsive layout for all screen resolutions. It gives opportunity to show and manage products of different Vendors. There are 2 payment methods, Ogone and PayPal. Used technologies and languages: PHP MVC, MySql, JavaScript, Jquery,(Ogone payment API, PayPal API) “LaPoste” is a web site where users give questions and the specialist gives the answers . There is a chance to approve or decline questions. Used technologies and languages: PHP Yii Framework, MySql, JavaScript, Jquery .`
                },
            ]
        }
    ],
    skillsData: [
        {
            title: {mainTitle: "Design", spanTitle: "Skills"},
            skills: [
                {title: "Web Design", level: "95%", style: "skill-1"},
                {title: "Print Design", level: "65%", style: "skill-2"},
                {title: "Logo Design", level: "80%", style: "skill-3"},
                {title: "Graphic Design", level: "90%", style: "skill-4"},
            ]
        },
        {
            title: {mainTitle: "Coding", spanTitle: "Skills"},
            skills: [
                {title: "JavaScript", level: "95%", style: "skill-5"},
                {title: "PHP", level: "85%", style: "skill-6"},
                {title: "HTML/CSS", level: "100%", style: "skill-7"},
                {title: "Smarty/Twig", level: "75%", style: "skill-8"},
                {title: "Perl", level: "90%", style: "skill-9"},
            ]
        }
    ],
    knowledgesData: {
        title: {mainTitle: "Knowledges", spanTitle: ""},
        knowledges: [
            {title: "Marketing"},
            {title: "Print"},
            {title: "Digital Design"},
            {title: "Social Media"},
            {title: "Time Management"},
            {title: "Communication"},
            {title: "Problem-Solving"},
            {title: "Social Networking"},
            {title: "Flexibility"},
        ]
    },
    certificatesData: {
        title: {mainTitle: "Certificates", spanTitle: ""},
        certificates: [
            {logo: img, title: "Psyhology of Intertnation Design", id: "Membership ID: XXXX", date: "19 April 2018", company: ""},
            {logo: img, title: "Psyhology of Intertnation Design", id: "Membership ID: XXXX", date: "19 April 2018", company: ""},
        ]
    },
    portfolioMenu: [
        {title: "All"},
        {title: "Detailed"},
        {title: "Mockups"},
        {title: "SoundCloud"},
        {title: "Vimeo Videos"},
        {title: "YouTube Videos"},
    ],
    portfolioItems: [
        {
            img: img1,
            icon: "fa-volume-up",
            name: "SoundCloud Audio",
            category: "SoundCloud",
            source: {
                address: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true",
                cn: "lightbox mfp-iframe",
                title: "SoundCloud Audio",
                target: "_blank"
            }
        },
        {
            img: img2,
            icon: "fa-file-alt",
            name: "SoundCloud Audio",
            category: "Detailed",
            source: {
                address: "/portfolio/portfolio-1",
                cn: "ajax-page-load",
                title: "",
                target: "_blank"
            }
        },
        {
            img: img3,
            icon: "fa-video",
            name: "SoundCloud Audio",
            category: "Vimeo Videos",
            source: {
                address: "https://player.vimeo.com/video/158284739",
                cn: "lightbox mfp-iframe",
                title: "Vimeo Video 1",
                target: "_blank"
            }
        },
        {
            img: img4,
            icon: "fa-file-alt",
            name: "SoundCloud Audio",
            category: "Detailed",
            source: {
                address: "/portfolio/portfolio-2",
                cn: "ajax-page-load",
                title: "",
                target: "_blank"
            }
        },
        {
            img: img5,
            icon: "fa-image",
            name: "SoundCloud Audio",
            category: "Mockups",
            source: {
                address: "img/portfolio/full/5.jpg",
                cn: "lightbox",
                title: "Mockup Design 1",
                target: "_blank"
            }
        },
        {
            img: img6,
            icon: "fa-video",
            name: "SoundCloud Audio",
            category: "YouTube Videos",
            source: {
                address: "https://www.youtube.com/embed/bg0gv2YpIok",
                cn: "lightbox mfp-iframe",
                title: "YouTube Video 1",
                target: "_blank"
            }
        },
    ],
    blogCards: [
        {description: "Design", img: img1, date: "05 Mar 2020", title: "Why I Switched to Sketch For UI Design"},
        {description: "UI", img: img2, date: "23 Feb 2020", title: "Best Practices for Animated Progress Indicators"},
        {description: "Design", img: img3, date: "06 Feb 2020", title: "Designing the Perfect Feature Comparison Table"},
        {description: "Design", img: img4, date: "07 Jan 2020", title: "An Overview of E-Commerce Platforms"},
    ],

    animations: ["animated-section-moveFromRight",
        "animated-section-moveFromLeft",
        "animated-section-moveFromBottom",
        "animated-section-moveFromTop",
        "animated-section-moveFromRight animated-section-ontop",
        'animated-section-moveFromLeft animated-section-ontop',
        'animated-section-moveFromBottom animated-section-ontop',
        'animated-section-moveFromTop animated-section-ontop',
        'animated-section-moveFromRightFade',
        'animated-section-moveFromLeftFade',
        'animated-section-moveFromBottomFade',
        'animated-section-moveFromTopFade',
        'animated-section-moveFromRight',
        'animated-section-moveFromLeft',
        'animated-section-moveFromBottom',
        'animated-section-moveFromTop',
        'animated-section-moveFromRight animated-section-ontop',
        'animated-section-moveFromLeft animated-section-ontop',
        'animated-section-moveFromBottom animated-section-ontop',
        'animated-section-moveFromTop animated-section-ontop',
        'animated-section-scaleUpDown animated-section-delay300',
        'animated-section-scaleUp animated-section-delay300',
        'animated-section-scaleUp',
        'animated-section-scaleUp',
        'animated-section-scaleUp',
        'animated-section-scaleUp',
        'animated-section-scaleUpCenter animated-section-delay400',
        'animated-section-moveFromRight animated-section-delay200 animated-section-ontop',
        'animated-section-moveFromLeft animated-section-delay200 animated-section-ontop',
        'animated-section-moveFromTop animated-section-delay200 animated-section-ontop',
        'animated-section-moveFromBottom animated-section-delay200 animated-section-ontop',
        'animated-section-flipInLeft animated-section-delay500',
        'animated-section-flipInRight animated-section-delay500',
        'animated-section-flipInBottom animated-section-delay500',
        'animated-section-flipInTop animated-section-delay500',
        'animated-section-scaleUp',
        'animated-section-rotateInNewspaper animated-section-delay500',
        'animated-section-moveFromRight',
        'animated-section-moveFromLeft',
        'animated-section-moveFromBottom',
        'animated-section-moveFromTop',
        'animated-section-rotatePullRight animated-section-delay180',
        'animated-section-rotatePullLeft animated-section-delay180',
        'animated-section-rotatePullBottom animated-section-delay180',
        'animated-section-rotatePullTop animated-section-delay180',
        'animated-section-moveFromRightFade',
        'animated-section-moveFromLeftFade',
        'animated-section-moveFromBottomFade',
        'animated-section-moveFromTopFade',
        'animated-section-rotateUnfoldLeft',
        'animated-section-rotateUnfoldRight',
        'animated-section-rotateUnfoldTop',
        'animated-section-rotateUnfoldBottom',
        'animated-section-rotateRoomLeftIn',
        'animated-section-rotateRoomRightIn',
        'animated-section-rotateRoomTopIn',
        'animated-section-rotateRoomBottomIn',
        'animated-section-rotateCubeLeftIn',
        'animated-section-rotateCubeRightIn',
        'animated-section-rotateCubeTopIn',
        'animated-section-rotateCubeBottomIn',
        'animated-section-rotateCarouselLeftIn',
        'animated-section-rotateCarouselRightIn',
        'animated-section-rotateCarouselTopIn',
        'animated-section-rotateCarouselBottomIn',
        'animated-section-rotateSidesIn animated-section-delay200',
        'animated-section-rotateSlideIn'
    ]
}

export const profileContext = createContext(initialState.profile);
export const copyrightsContext = createContext(initialState.copyrights);
export const socialLinksContext = createContext(initialState.socialLinks);
export const infoDataContext = createContext(initialState.infoData);
export const animationsContext = createContext(initialState.animations);
export const testimonialsDataContext = createContext(initialState.testimonialsData);
export const clientsDataContext = createContext(initialState.clientsData);
export const factsDataContext = createContext(initialState.factsData);
export const timelineDataContext = createContext(initialState.timelineData);
export const experienceDataContext = createContext(initialState.experienceData);
export const skillsDataContext = createContext(initialState.skillsData);
export const knowledgesDataContext = createContext(initialState.knowledgesData);
export const designDataContext = createContext(initialState.designData);
export const codingDataContext = createContext(initialState.codingData);
export const certificatesDataContext = createContext(initialState.certificatesData);
export const portfolioMenuContext = createContext(initialState.portfolioMenu);
export const portfolioItemsContext = createContext(initialState.portfolioItems);
export const blogCardsContext = createContext(initialState.blogCards);
export const menuContext = createContext(initialState.menu);