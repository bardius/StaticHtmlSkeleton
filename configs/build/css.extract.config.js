import MiniCssExtractPlugin from "mini-css-extract-plugin";

/*
 All available options & documentation from:
 https://github.com/webpack-contrib/mini-css-extract-plugin
 */
const extractCSS = new MiniCssExtractPlugin({
    filename: "[name]/css/bundle.[hash:6].min.css"
});

export default extractCSS;
