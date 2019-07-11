module.exports = {
    presets: [["@babel/preset-env", { useBuiltIns: "usage" }], ["@babel/preset-react"]],
    plugins: ["@babel/plugin-proposal-class-properties", "react-hot-loader/babel"]
};
