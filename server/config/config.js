import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: 'okoyecb',
  api_key: 874837483274837,
  api_secret: 'a676b67565c6767a6767d6767f676fe1',
});
const uploads = file => new Promise((resolve) => {
  cloudinary.uploader.upload(
    file,
    (result) => {
      resolve({ url: result.url, id: result.public_id });
    },
    { resource_type: 'auto' },
  );
});

export default uploads;
