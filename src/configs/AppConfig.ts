const activeConfig = process.env.NODE_ENV;

const appConfig = {
  // setup enviroment for development
  development: {
    appName: "Boilerplate",
    url: {
      api: process.env.BASE_URL_API,
      assets: "",
      origin: "",
    },
    openGraph: {
      site_title: "BoilerPlate - NextJS with React Query",
      site_description: "NEXTJS TYPESCRIPT BOILERPLATE WITH REACT QUERY",
      type: "website",
      locale: "id_ID",
      url: "localhost://3000",
    },
  },
  // setup enviroment for testing
  test: {
    appName: "",
    url: {
      api: "",
      assets: "",
      origin: "",
    },
    openGraph: {
      site_name: "",
      type: "",
      locale: "",
      url: "",
    },
  },
  // setup enviroment for production
  production: {
    appName: "",
    url: {
      api: "",
      assets: "",
      origin: "",
    },
    openGraph: {
      site_name: "",
      type: "",
      locale: "",
      url: "",
    },
  },
};

export default appConfig[activeConfig];
