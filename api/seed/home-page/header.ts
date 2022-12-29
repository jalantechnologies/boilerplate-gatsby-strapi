import { uploadFile } from '../upload-file';

export const getHeader = async () => {
  const logo = await uploadFile('logo.png');

  return {
    Logo: logo[0].id,
    Menus: [
      {
        Label: 'Beach',
        Url: '/',
        Target: null,
        Submenus: [
          {
            Label: 'Submenu1',
            Url: '/',
            Target: null,
          },
          {
            Label: 'Submenu2',
            Url: '/',
            Target: null,
          },
          {
            Label: 'Submenu3',
            Url: '/',
            Target: null,
          },
          {
            Label: 'Submenu4',
            Url: '/',
            Target: null,
          },
        ],
      },
      {
        Label: 'Ocean',
        Url: '/',
        Target: null,
        Submenus: [
          {
            Label: 'Submenu1',
            Url: '/',
            Target: null,
          },
          {
            Label: 'Submenu2',
            Url: '/',
            Target: null,
          },
          {
            Label: 'Submenu3',
            Url: '/',
            Target: null,
          },
          {
            Label: 'Submenu4',
            Url: '/',
            Target: null,
          },
        ],
      },
      {
        Label: 'Mountain',
        Url: '/',
        Target: null,
        Submenus: [
          {
            Label: 'Menu 1',
            Url: '/',
          },
          {
            Label: 'Menu 2',
            Url: '/',
          },
        ],
      },
    ],
  };
};
