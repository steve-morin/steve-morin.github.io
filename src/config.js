module.exports = {
  siteTitle: 'Steve Morin | Cloud Software Developer | Full-Stack Data Engineer',
  siteDescription:
    'Steve Morin is a Full Stack Software Developer, who loves learning new technologies and collaborating with team to deliver innovative solutions.',
  siteKeywords:
    'Steve, Morin, software developer, software engineer, data engineer, big data, web developer, javascript developer, SQL databases, C#, Python',
  siteUrl: 'https://steve-morin.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Steve Morin',
  location: 'Calgary, Canada',
  email: 'steve.m.morin@gmail.com',
  github: 'https://github.com/steve-morin/',
  twitterHandle: 'NA',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/steve-morin/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/steve-morin-6a65a94/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/NA',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/NA',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/NA',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
