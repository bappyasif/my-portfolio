import animSaavy from "../../assets/anim-saavy.gif"
import automatedTrucks from "../../assets/automated-trucks.gif"
import landingPage from "../../assets/landing-page.gif"
import prodReview from "../../assets/prod-rev-page.gif"
import restaurantSite from "../../assets/restaurant-site.gif"
import travelWorldwide from "../../assets/travel-worldwide.gif"
import just_news_gif from "../../assets/just_news_rec.gif"
import odbo_live_gif from "../../assets/odbo_live_rec.gif"
import twitter_prototype_gif from "../../assets/twitter_prototype_rec.gif"
import myth_busters_gif from "../../assets/myth_busters_rec.gif"
import mmmm_rec_gif from "../../assets/4ms_rec.gif"

export const skills = [
    { name: "CSS", text: "Profeciency", percentile: 94 },
    { name: "HTML", text: "Profeciency", percentile: 94 },
    { name: "TailwindCss", text: "Profeciency", percentile: 87 },
    { name: "MUI", text: "Profeciency", percentile: 87 },
    { name: "Javascript", text: "Profeciency", percentile: 85 },
    { name: "React", text: "Profeciency", percentile: 85 },
    { name: "ExpressJS", text: "Profeciency", percentile: 80 },
    { name: "NextJS", text: "Profeciency", percentile: 70 },
    { name: "MongoDB", text: "Profeciency", percentile: 72 },
    { name: "Authentications", text: "Profeciency", percentile: 76 },
    { name: "MERN Stack", text: "Profeciency", percentile: 86 },
    { name: "Typescript", text: "Profeciency", percentile: 63 },
    { name: "Firebase", text: "Profeciency", percentile: 62 },
    { name: "React Queries", text: "Profeciency", percentile: 72 },
    { name: "Axios", text: "Profeciency", percentile: 81 },
    { name: "Next Auth", text: "Profeciency", percentile: 72 },
    { name: "ReduxToolkits", text: "Profeciency", percentile: 58 },
    { name: "React Redux", text: "Profeciency", percentile: 56 }
];

export const figs = [
    { name: "HackerRank", count: 4, text: "Stars and more" },
    { name: "OSP Contributions", count: 24, text: "Successfull Merges and more" },
    { name: "FCC Forum", count: 55, text: "Solutions and more" },
    { name: "Github Repos", count: 127, text: "and more" },
];

export const projects = [
    { name: "Just News", repo: "https://github.com/bappyasif/just-news", live: "https://just-news-eta.vercel.app/", description: "A Fullstack web app which used NewsCatcher Api, to display news snippets and list of all available providers globally. In this Fullstack app which uses MongoDB for storing persistents data by user and shows it on app as intended. Just News app also shows live search capability (i.e. for searched query and searched media outlets) but for Logged In Users Only. Just News app also provides option to store news search filters or news provider filters to access those information from a dashboard view experience from just a click of a button. This Fullstack web app is built on NextJs ecosystem with various authentication options available for users to choose from. I hope you will find this useful for your news snippet skims as well.", imgSrc: just_news_gif, stackUsed: [ "ReactJS", "MongoDB", "Mongoose", "ReactIcons", "NextJs", "Tailwind", "NextAuth", "Axios", "TanstackQueries"] },
    { name: "OdBo", repo: "https://github.com/bappyasif/odbo-live", live: "https://vercel.com/bappyasif/odbo-live", description: "A Fullstack web app made with pure MERN Stack. This was a final project submission for The Odin Project FullStack Path curriculum. This web app made full use of MUI for CSS and UI. This web app is a social media site alike which will allow users to login, logout, connect, create, edit, update, delete posts and comments from a post. For its backend services (authorizations, database modelling and API routing, etc) ExpressJs was used, api and authentication is handled through that. This was indeed was a project where all of my acquired and new knowledge were involved to complete this project. Thank you Odin Project for guiding people like us to shore of Fullstack Development.", imgSrc: odbo_live_gif, stackUsed: [ "ReactJS", "MongoDB", "Mongoose", "MUI", "React Router", "TinyMCE", "EmojiPicker", "GIPHY", "Moment", "DomPurify", "Figma"] },
    { name: "Standalone Twitter - Prototype", repo: "https://github.com/bappyasif/prototype-attempt-for-a-basic-twitter", live: "https://prototyping-a-basic-twitter.web.app/", description: "Final project for Frontend Path curriculam of The Odin Project. This project required us to make a frontend functionlaities with ReactJs and backend services with Firebase for any of our favorite web app. I chose to go with recreating a standalone mode prototype of Twitter. This project only uses plain css for its styling. Firebase was extensively used for data storing, authentication and hosting. After completing this web app my knowledge on ReactJS and its usage was more clear and fluent.", imgSrc: twitter_prototype_gif, stackUsed: [ "ReactJS", "GIPHY", "Webpack", "Babel", "Emoji-Mart", "UUID", "CSS", "Firebase-hosting", "Firebase-storage", "Firebase-authentication"] },
    { name: "Myth Busters", repo: "https://shorturl.at/pvFV0", live: "https://myth-buster-game-jam.web.app/", description: "This is a project that i and along with a team member completed together and competed for an international game jam, organized by The Odin Project for its students and learners. This is an education based game for middleschool and above grade students or individuals. This game uses only Vanilla Javascript and pure css for its styling. Also useed Figma and notion for keepinbg track of its progress and UI. This project took about a 3-4 weeks time and was in mid level standing among all of its contestents and participants. This was really a fun experience where i got to collaborate and see it through this project from ideation to deployment.", imgSrc: myth_busters_gif, stackUsed: [ "VanillaJS", "Webpack", "ES-Lint", "Babel", "CSS", "Firebase-hosting", "Figma", "Notion"] }
];

export const explorativeProjects = [
    { name: "4m's", tagline: "Me Making My Meals - A Food Recipe Webapp", repo: "https://github.com/bappyasif/me-making-my-meal", live: "https://me-making-my-meals-fp.vercel.app/", description: "A Firebase Backed Fullstack web app which uses TheMealDb Api, to display meal recipes, ingredients, instructions both in text and vedio format. 4m's app also shows most popular food categories, cuisines, ingredients, and meals viewed by users. 4m's web app also uses language accessibility functionlaity in 6 languages using i18n backend services. 4m's web app also uses rapid api hosted Microsoft Translation api for translating intructions as well in Meal Detail page. Recipies are also shareable among Social Medias from Meal Detail page. 4m's also uses Helmet for SEO functionlaity as well. I hope you will find this web app as useful as i thought it would be.", imgSrc: mmmm_rec_gif, stackUsed: [ "Typescript", "ReactJS", "Firebase", "Firestore", "React Share", "React Router", "Tailwind", "i18n", "TheMealDbApi", "Microsoft Translation", "Helmet"] },
    { name: "Just News", tagline: "View News And Sources - See live Searches And Store News Filters", repo: "https://github.com/bappyasif/just-news", live: "https://just-news-eta.vercel.app/", description: "A Fullstack web app which used NewsCatcher Api, to display news snippets and list of all available providers globally. In this Fullstack app which uses MongoDB for storing persistents data by user and shows it on app as intended. Just News app also shows live search capability (i.e. for searched query and searched media outlets) but for Logged In Users Only. Just News app also provides option to store news search filters or news provider filters to access those information from a dashboard view experience from just a click of a button. This Fullstack web app is built on NextJs ecosystem with various authentication options available for users to choose from. I hope you will find this useful for your news snippet skims as well.", imgSrc: just_news_gif, stackUsed: [ "NextJs", "ReactJs", "MongoDB", "Mongoose", "ReactIcons", "Tailwind", "NextAuth", "Axios", "TanstackQueries"] },
];

export const curriculamProjects = [
    { name: "OdBo", tagline: "The Odin Book Project - Curriculam Final Project", repo: "https://github.com/bappyasif/odbo-live", live: "https://vercel.com/bappyasif/odbo-live", description: "A Fullstack web app made with pure MERN Stack. This was a final project submission for The Odin Project FullStack Path curriculum. This web app made full use of MUI for CSS and UI. This web app is a social media site alike which will allow users to login, logout, connect, create, edit, update, delete posts and comments from a post. For its backend services (authorizations, database modelling and API routing, etc) ExpressJs was used, api and authentication is handled through that. This was indeed was a project where all of my acquired and new knowledge were involved to complete this project. Thank you Odin Project for guiding people like us to shore of Fullstack Development.", imgSrc: odbo_live_gif, stackUsed: [ "ReactJs", "MongoDB", "Mongoose", "MUI", "React Router", "TinyMCE", "EmojiPicker", "GIPHY", "Moment", "DomPurify", "Figma"] },
    { name: "Standalone Twitter - Prototype", tagline: "Prototype Your Favorite Website - Front End Final Project", repo: "https://github.com/bappyasif/prototype-attempt-for-a-basic-twitter", live: "https://prototyping-a-basic-twitter.web.app/", description: "Final project for Frontend Path curriculam of The Odin Project. This project required us to make a frontend functionlaities with ReactJs and backend services with Firebase for any of our favorite web app. I chose to go with recreating a standalone mode prototype of Twitter. This project only uses plain css for its styling. Firebase was extensively used for data storing, authentication and hosting. After completing this web app my knowledge on ReactJs and its usage was more clear and fluent.", imgSrc: twitter_prototype_gif, stackUsed: [ "ReactJs", "GIPHY", "Webpack", "Babel", "Emoji-Mart", "UUID", "CSS", "Firebase-hosting", "Firebase-storage", "Firebase-authentication"] }
];

export const collaborativeProjects = [
    { name: "Myth Busters", tagline: "An Edutainment Based Game - I was Project Manager and Team Lead for our Game Jam Team", repo: "https://shorturl.at/pvFV0", live: "https://abappy.itch.io/myth-busters", description: "This is a project that i and along with a team member completed together and competed for an international game jam contest, organized by The Odin Project for its students and learners. This is an education based game for middleschool and above grade students or individuals. This game uses only Vanilla Javascript and pure css for its styling. Also useed Figma and notion for keepinbg track of its progress and UI. This project took about a 3-4 weeks time and was in mid level standing among all of its contestents and participants. This was really a fun experience where i got to collaborate and see it through this project from ideation to deployment.", imgSrc: myth_busters_gif, stackUsed: [ "VanillaJS", "Webpack", "ES-Lint", "Babel", "CSS", "Firebase-hosting", "Figma", "Notion"] }
];

export const designs = [
    { name: "Restaurant Site", repo: "https://shorturl.at/mxQZ7", live: "https://shorturl.at/czBO1", description: "Frontend view, Where it displays menu, popular items and events details.", imgSrc: restaurantSite },
    { name: "Tourism Worldwide", repo: "https://shorturl.at/krEL6", live: "https://shorturl.at/grEP2", description: "Frontend view, design and user interactivity for presumeably a tourism company", imgSrc: travelWorldwide },
    { name: "Landing Page", repo: "https://shorturl.at/fjovK", live: "https://shorturl.at/iGOY8", description: "landing page prototype for a company website. this spa is a more generic design ", imgSrc: landingPage },
    { name: "Animations Saavy", repo: "https://shorturl.at/fnwHM", live: "https://shorturl.at/fvAH4", description: "a single page application frontend view for a forum or news based site", imgSrc: animSaavy },
    { name: "Self-driving Corp", repo: "https://shorturl.at/crtuB", live: "https://shorturl.at/tT138", description: "another single page web applicatioin example, this is based ona self driving truck company", imgSrc: automatedTrucks },
    { name: "Product Review Page", repo: "https://shorturl.at/hBGHY", live: "https://shorturl.at/ahiL3", description: "product review page prototype desogn.", imgSrc: prodReview }
]

export const testimonials = [
    { text: "here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more", user: { name: "Hoxie", title: "none of your business", links: { profile: "github.com", twitter: "twitter.com" } } },
    { text: "here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more. here is testimonial. it is so full of this and that and what not and some more", user: { name: "Skyler", title: "none of your business", links: { profile: "github.com", twitter: "twitter.com" } } }
];