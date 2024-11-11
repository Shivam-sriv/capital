const imageBaseUrl = "https://capitalsiteassets.s3.ap-southeast-1.amazonaws.com"

export function getImageUrl(path) {
  return imageBaseUrl + path;
}