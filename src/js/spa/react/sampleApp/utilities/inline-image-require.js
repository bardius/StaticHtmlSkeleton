const InlineImageRequire = path => require.context("../assets/inline/img/", true, /^\.\/.*\.(gif|jpg|jpe?g|svg|png)$/);

export default InlineImageRequire;
