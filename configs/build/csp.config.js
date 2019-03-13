/*
 All available options & documentation from:
 https://github.com/slackhq/csp-html-plugin
 https://www.owasp.org/index.php/Content_Security_Policy_Cheat_Sheet
 https://developer.mozilla.com/en-US/docs/Web/HTTP/CSP
 */
const cspConfig = {
    policy: {
        "base-uri": "'self'",
        "object-src": "'none'",
        "default-src": ["*", "data:", "blob:", "'unsafe-inline'", "'unsafe-eval'"],
        "script-src": ["*", "'unsafe-inline'", "'unsafe-eval'"],
        "connect-src": ["*", "'unsafe-inline'"],
        "img-src": ["*", "data:", "blob:", "'unsafe-inline'"],
        "frame-src": ["*"],
        "style-src": ["*", "data:", "blob:", "'unsafe-inline'", "'unsafe-eval'"],
        "font-src": ["*", "data:", "blob:", "'unsafe-inline'"]
    },
    optional: {
        enabled: true,
        devAllowUnsafe: false,
        nonceEnabled: { "script-src": true, "style-src": false },
        hashEnabled: { "script-src": true, "style-src": false },
        hashingMethod: "sha512"
    }
};

export default cspConfig;
