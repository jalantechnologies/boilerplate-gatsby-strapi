export const getPageContext = (data: any) => ({
    title: data.attributes.title,
    metaTitle: data.attributes.seo.metaTitle,
    metaDescription: data.attributes.seo.metaDescription,
    metaImage:
      process.env.STRAPI_API_URL +
      data.attributes.seo.metaImage.data.attributes.url,
    heroDesc: data.attributes.hero[0].text,
    heroTitle: data.attributes.hero[0].header.title,
    heroImg:
      process.env.STRAPI_API_URL +
      data.attributes.hero[0].images.data[0].attributes.url
})