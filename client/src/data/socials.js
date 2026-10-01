export const socials = {
whatsapp: '+9779866108306',
email: 'bhattakrish78@gmail.com',
github: 'https://github.com/DipendraBhattaGit',
linkedin: 'https://www.linkedin.com/in/dipendra-bhatta-60a018294/',
instagram: 'https://www.instagram.com/dipendrabhatta27/?hl=en',
facebook: 'https://www.facebook.com/Krish.Bhatta.27/',
email: 'bhattakrish78@gmail.com',
};

export const waMessage =
  'Hello Dipendra, I found your portfolio and would like to discuss an opportunity.';

const digits = socials.whatsapp.replace(/\D/g, '');

export const waLink =
  `https://wa.me/${digits}?text=${encodeURIComponent(waMessage)}`;