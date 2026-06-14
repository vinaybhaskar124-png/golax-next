// Per-country GEO + locale metadata used for international SEO/AEO/GEO targeting.
// geo.region uses ISO 3166-1 alpha-2; position is "lat;lng" of the country centroid (capital region).
// locale uses BCP-47 underscore form for og:locale. hreflang uses lowercase BCP-47.
export interface CountryGeo {
  region: string;
  placename: string;
  position: string; // "lat;lng"
  icbm: string; // "lat, lng"
  locale: string; // og:locale, e.g. en_US
  hreflang: string; // e.g. en-us
  language: string; // e.g. English (United States)
  currencyCode: string;
}

export const countryGeoMap: Record<string, CountryGeo> = {
  "united-states": {
    region: "US",
    placename: "United States",
    position: "37.0902;-95.7129",
    icbm: "37.0902, -95.7129",
    locale: "en_US",
    hreflang: "en-us",
    language: "English (US)",
    currencyCode: "USD",
  },
  "united-kingdom": {
    region: "GB",
    placename: "United Kingdom",
    position: "55.3781;-3.4360",
    icbm: "55.3781, -3.4360",
    locale: "en_GB",
    hreflang: "en-gb",
    language: "English (UK)",
    currencyCode: "GBP",
  },
  canada: {
    region: "CA",
    placename: "Canada",
    position: "56.1304;-106.3468",
    icbm: "56.1304, -106.3468",
    locale: "en_CA",
    hreflang: "en-ca",
    language: "English (Canada)",
    currencyCode: "CAD",
  },
  australia: {
    region: "AU",
    placename: "Australia",
    position: "-25.2744;133.7751",
    icbm: "-25.2744, 133.7751",
    locale: "en_AU",
    hreflang: "en-au",
    language: "English (Australia)",
    currencyCode: "AUD",
  },
  "united-arab-emirates": {
    region: "AE",
    placename: "United Arab Emirates",
    position: "23.4241;53.8478",
    icbm: "23.4241, 53.8478",
    locale: "en_AE",
    hreflang: "en-ae",
    language: "English (UAE)",
    currencyCode: "AED",
  },
  "saudi-arabia": {
    region: "SA",
    placename: "Saudi Arabia",
    position: "23.8859;45.0792",
    icbm: "23.8859, 45.0792",
    locale: "en_SA",
    hreflang: "en-sa",
    language: "English (Saudi Arabia)",
    currencyCode: "SAR",
  },
  singapore: {
    region: "SG",
    placename: "Singapore",
    position: "1.3521;103.8198",
    icbm: "1.3521, 103.8198",
    locale: "en_SG",
    hreflang: "en-sg",
    language: "English (Singapore)",
    currencyCode: "SGD",
  },
  germany: {
    region: "DE",
    placename: "Germany",
    position: "51.1657;10.4515",
    icbm: "51.1657, 10.4515",
    locale: "en_DE",
    hreflang: "en-de",
    language: "English (Germany)",
    currencyCode: "EUR",
  },
  "new-zealand": {
    region: "NZ",
    placename: "New Zealand",
    position: "-40.9006;174.8860",
    icbm: "-40.9006, 174.8860",
    locale: "en_NZ",
    hreflang: "en-nz",
    language: "English (New Zealand)",
    currencyCode: "NZD",
  },
  qatar: {
    region: "QA",
    placename: "Qatar",
    position: "25.3548;51.1839",
    icbm: "25.3548, 51.1839",
    locale: "en_QA",
    hreflang: "en-qa",
    language: "English (Qatar)",
    currencyCode: "QAR",
  },
};

export const getCountryGeo = (slug: string): CountryGeo | undefined =>
  countryGeoMap[slug];
