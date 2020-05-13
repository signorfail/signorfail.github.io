module.exports = {
  siteTitle: 'Eugene Yap | Product Manager',
  siteDescription:
    'Eugene is a tech product manager based in South Korea who specializes in data intensive applications.',
  siteKeywords:
    'Eugene Yap, Eugene Y, , signorfail, tech, product manager, project manager, Rakuten, machine learning, AI',
  siteUrl: 'https://.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Eugene Yap',
  location: 'KR',
  email: 'signorfail@gmail.com',
  github: 'https://github.com/signorfail/',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/signorfail/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yapeugene/',
    },
  ],

  navLinks: [
    {
      name: 'About Me',
      url: '/#about',
    },
    {
      name: 'Job Experience',
      url: '/#jobs',
    },
    {
      name: 'Things I\'ve Done',
      url: '/#projects',
    },
    {
      name: 'Contact Me',
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
