const ImageRequire = path => require.context("../assets/img/", true, /^\.\/.*\.(gif|jpg|jpe?g|svg|png)$/);

export default ImageRequire;
