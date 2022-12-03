import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Motherbitches',
  description: 'My journey learning Astro',
  site: 'https://legendary-bublanina-11e449.netlify.app/',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});