import path from "path";

/*
 All available options & documentation from:
 https://github.com/arthurbergmz/webpack-pwa-manifest
 */
const manifestConfig = {
    name: "PWA StaticHtmlSkeleton",
    short_name: "StaticHtmlSkeleton",
    description: "PWA StaticHtmlSkeleton description",
    background_color: "#FFFFFF",
    fingerprints: false,
    theme_color: "black",
    "theme-color": "black",
    lang: "en",
    dir: "ltr",
    start_url: "/index.html",
    display: "minimal-ui",
    orientation: "omit",
    inject: true,
    prefer_related_applications: true,
    related_applications: [
        {
            platform: "play",
            id: "com.google.static.html.skeleton.iosched"
        }
    ],
    ios: {
        "apple-mobile-web-app-title": "StaticHtmlSkeleton",
        "apple-mobile-web-app-status-bar-style": "black"
    },
    icons: [
        {
            src: path.resolve("src/assets/images/logo.png"),
            sizes: [120, 152, 167, 180, 1024],
            destination: path.join("assets", "images", "favicons"),
            ios: true
        },
        {
            src: path.resolve("src/assets/images/logo.png"),
            size: "1024x1024",
            destination: path.join("assets", "images", "favicons"),
            ios: "startup"
        },
        {
            src: path.resolve("src/assets/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "images", "favicons")
        }
    ]
};

export default manifestConfig;
