export const getStrapiURL = (path = "") => {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337'
    }${path}`
}