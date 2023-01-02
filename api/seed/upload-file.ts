import fs from 'fs';
import '@strapi/strapi';

export const getFileInfo = fileName => {
  const path = `./seed/uploads/${fileName}`;
  const fileStat = fs.statSync(path);
  const array = path.split('.');
  const ext = array[array.length - 1];
  const mimeType = getMimeType(ext);

  return {
    path,
    name: `${fileName}`,
    size: fileStat.size,
    type: mimeType,
  };
};

const getMimeType = ext => {
  if (
    ['png', 'jpeg', 'jpg', 'gif', 'apng', 'avif', 'svg', 'webp'].includes(ext)
  ) {
    return `image/${ext}`;
  }
  if (['mp4', 'mov', '3gp', 'm3u8', 'avi', 'wmv'].includes(ext)) {
    return `video/${ext}`;
  }
  return '';
};

export const uploadFile = async name => {
  try {
    const fileInfo = getFileInfo(name);

    return strapi.services['plugin::upload.upload'].upload({
      data: {
        ref: 'my-collection',
        field: 'attachments',
      },
      files: {
        path: fileInfo.path,
        name: fileInfo.name,
        type: fileInfo.type,
        size: fileInfo.size,
      },
    });
  } catch (e) {
    console.log(e);
  }

  return null;
};
