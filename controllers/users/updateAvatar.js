const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../schemas");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

exports.updateAvatar = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const filename = `${_id}_${originalname}`;
    const resultUpload = path.join(avatarsDir, filename);
    const image = await Jimp.read(tempUpload);
   
    image.resize(250, 250).write(resultUpload);
    await fs.rename(tempUpload, resultUpload);
   
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({
      avatarURL,
    });
  } catch (error) {
    next(error);
  }
};
