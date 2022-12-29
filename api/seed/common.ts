import { uploadFile } from './upload-file';

export class Common {
  static favicon = -1;
  static async getFavicon() {
    let iconId = Common.favicon;
    if (iconId === -1) {
      const faveIcon = await uploadFile('favicon.png');
      iconId = faveIcon[0].id;
    }
    return iconId;
  }
}
