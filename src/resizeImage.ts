const sharp = require('sharp');
const path = require('path');

const resizeImage = async (imageName: string, imageWidth: number, imageHeight: number, thumbnail: string): Promise<string> => {
    try {
        const inputWidth = imageWidth as number;
        const inputHeight = imageHeight as number;
      await sharp(path.resolve('inputFolder/images/' + imageName))
        .resize({
          width: inputWidth,
          height: inputHeight
        })
        .toFile(path.resolve('inputFolder/thumbnails/' + thumbnail));
        const outputFilePath = path.resolve('inputFolder/thumbnails/' + thumbnail);
        return outputFilePath;
    } catch (error) {
      console.log(error);
      return 'No File';
    }
  };
  
export default resizeImage;
