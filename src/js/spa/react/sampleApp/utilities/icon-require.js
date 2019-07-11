const IconRequire = path => require.context("../assets/icons/", true, /^\.\/.*\.(gif|jpg|jpe?g|svg|png)$/);

export default IconRequire;
