import imageminGifsicle from "imagemin-gifsicle";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";

/*
 When you enable cache and change options for imagemin plugins you should flush cache manually.
 Use the command via cli: npm run clean:image-cache

 All available options & documentation from:
 https://www.npmjs.org/package/imagemin-webpack
 https://github.com/imagemin/imagemin
 https://github.com/imagemin/imagemin-mozjpeg
 https://github.com/imagemin/imagemin-gifsicle
 https://github.com/imagemin/imagemin-pngquant
 https://github.com/imagemin/imagemin-svgo
 */
const imageOptimizationConfig = {
    bail: false,
    cache: true,
    exclude: [new RegExp(`font`)],
    loader: true,
    name: "[path][name].[ext]",
    imageminOptions: {
        plugins: [
            imageminGifsicle({
                interlaced: true,
                optimizationLevel: 5
            }),
            imageminMozjpeg({
                progressive: true,
                quality: 70
            }),
            imageminPngquant({
                strip: true,
                speed: 1,
                dithering: false,
                quality: [0.7, 0.8]
            }),
            imageminSvgo({
                removeViewBox: true
            })
        ]
    }
};

export default imageOptimizationConfig;
