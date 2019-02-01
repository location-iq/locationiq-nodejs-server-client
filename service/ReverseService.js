'use strict';


/**
 * Reverse Geocoding
 * Reverse geocoding is the process of converting a coordinate or location (latitude, longitude) to a readable address or place name. This permits the identification of nearby street addresses, places, and/or area subdivisions such as a neighborhood, county, state, or country.
 *
 * lat BigDecimal Latitude of the location to generate an address for.
 * lon BigDecimal Longitude of the location to generate an address for.
 * format String Format to geocode. Only JSON supported for SDKs
 * normalizecity Integer Normalizes village to city level data to city
 * addressdetails Integer Include a breakdown of the address into elements. Defaults to 1. (optional)
 * acceptLanguage String Preferred language order for showing search results, overrides the value specified in the Accept-Language HTTP header. Defaults to en. To use native language for the response when available, use accept-language=native (optional)
 * namedetails Integer Include a list of alternative names in the results. These may include language variants, references, operator and brand. (optional)
 * extratags Integer Include additional information in the result if available, e.g. wikipedia link, opening hours. (optional)
 * statecode Integer Adds state or province code when available to the statecode key inside the address element. Currently supported for addresses in the USA, Canada and Australia. Defaults to 0 (optional)
 * returns location
 **/
exports.reverse = function(lat,lon,format,normalizecity,addressdetails,acceptLanguage,namedetails,extratags,statecode) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "place_id" : "223483692",
  "licence" : "© LocationIQ.com CC BY 4.0, Data © OpenStreetMap contributors, ODbL 1.0",
  "osm_type" : "way",
  "osm_id" : "19301621",
  "boundingbox" : [ "39.307405567782", "39.307505567782", "-84.292824851595", "-84.292724851595" ],
  "lat" : "39.3074555677816",
  "lon" : "-84.2927748515948",
  "display_name" : "3894, Spring Mill Way, Hunter’s Point, Landen, Warren County, Ohio, 45039, United States of America",
  "class" : "place",
  "type" : "house",
  "importance" : 0.62025,
  "address" : {
    "house_number" : "3894",
    "road" : "Spring Mill Way",
    "residential" : "Hunter’s Point",
    "village" : "Landen",
    "county" : "Warren County",
    "state" : "Ohio",
    "postcode" : "45039",
    "country" : "United States of America",
    "country_code" : "us",
    "city" : "Landen"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

