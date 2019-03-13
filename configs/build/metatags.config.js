/*
 Custom meta tags management
 */
const metaTagsConfig = {
    charset: "utf-8",
    viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui",
    "x-ua-compatible": { "http-equiv": "x-ua-compatible", content: "ie=edge,chrome=1" },
    "Content-Security-Policy": { "http-equiv": "Content-Security-Policy", content: "" },
    robots: "index, follow",
    author: "Skeleton",
    "google-site-verification": { "google-site-verification": "google-verification-token" },
    "apple-itunes-app": {
        "apple-itunes-app": "app-id=AppStoreId, affiliate-data=AffiliateData, app-argument=URLArguments"
    }
};

export default metaTagsConfig;
