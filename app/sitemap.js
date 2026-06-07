export default function sitemap() {
  const base = 'https://globeonexim.com';
  const routes = ['', '/about', '/products', '/why-choose-us', '/contact', '/products/moringa-powder', '/products/turmeric-powder', '/products/agricultural-products'];
  return routes.map(r => ({ url: `${base}${r}`, lastModified: new Date(), changeFrequency: 'monthly', priority: r === '' ? 1 : 0.8 }));
}
