export default function sitemap() {

  const currentDate = new Date().toISOString();

    return [
      {
        url: 'https://papayahub.pe',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://www.papayahub.pe',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 1,
      },
      {
        url: 'https://papayahub.pe/videos',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://wwww.papayahub.pe/videos',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: 'https://papayahub.pe/cositas',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://www.papayahub.pe/cositas',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: 'https://papayahub.pe/inicio',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://www.papayahub.pe/inicio',
        lastModified: currentDate,
        changeFrequency: 'weekly',
        priority: 0.7,
      },
      {
        url: 'https://papayahub.pe/crear-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: 'https://www.papayahub.pe/crear-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.6,
      },
      {
        url: 'https://papayahub.pe/activar-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://www.papayahub.pe/activar-anuncio',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.5,
      },
      {
        url: 'https://papayahub.pe/sign-in',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.4,
      },
      {
        url: 'https://www.papayahub.pe/sign-in',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.4,
      },
      {
        url: 'https://papayahub.pe/sign-up',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.3,
      },
      {
        url: 'https://www.papayahub.pe/sign-up',
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.3,
      }
    ]
  }