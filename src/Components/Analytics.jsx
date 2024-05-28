import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-MW7WX5KV7L'; // Replace with your GA4 Measurement ID

export const initializeGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const trackPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page: page });
};
