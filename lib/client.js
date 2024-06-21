import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
    projectId: "hfpf04yl",
    dataset: 'production',
    apiVersion: "2022-07-16",
    useCdn: true,
    token:
    "skCw4zgI2uQKF7jMBiclH8rCWMxnuAeR4fr0utVyhlKKk86DJ1MLftrmtw6T6sxEFpmZIsr6eAKgBTZbAwB6BC3IAAYaxjwzL8sxGliHY9x5k0qaFlrsL8R0kzEIM1JMVXiMd3p3abkRQS6jttKYWNxl349hu42vMG6WvVPnmODmo7b4BIu9"
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)