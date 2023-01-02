import axios from 'axios';

const roles = {
  name: 'Public',
  description: 'Default role given to unauthenticated user.',
  permissions: {
    'api::home-page': {
      controllers: {
        'home-page': {
          find: { enabled: true, policy: '' },
          update: { enabled: false, policy: '' },
          delete: { enabled: false, policy: '' },
        },
      },
    },
    'plugin::content-type-builder': {
      controllers: {
        components: {
          getComponents: { enabled: false, policy: '' },
          getComponent: { enabled: false, policy: '' },
        },
        'content-types': {
          getContentTypes: { enabled: false, policy: '' },
          getContentType: { enabled: false, policy: '' },
        },
      },
    },
    'plugin::email': {
      controllers: { email: { send: { enabled: false, policy: '' } } },
    },
    'plugin::upload': {
      controllers: {
        'content-api': {
          find: { enabled: false, policy: '' },
          findOne: { enabled: false, policy: '' },
          destroy: { enabled: false, policy: '' },
          upload: { enabled: false, policy: '' },
        },
      },
    },
    'plugin::i18n': {
      controllers: { locales: { listLocales: { enabled: false, policy: '' } } },
    },
    'plugin::users-permissions': {
      controllers: {
        auth: {
          callback: { enabled: true, policy: '' },
          changePassword: { enabled: false, policy: '' },
          resetPassword: { enabled: true, policy: '' },
          connect: { enabled: true, policy: '' },
          forgotPassword: { enabled: true, policy: '' },
          register: { enabled: true, policy: '' },
          emailConfirmation: { enabled: true, policy: '' },
          sendEmailConfirmation: { enabled: true, policy: '' },
        },
        user: {
          create: { enabled: false, policy: '' },
          update: { enabled: false, policy: '' },
          find: { enabled: false, policy: '' },
          findOne: { enabled: false, policy: '' },
          count: { enabled: false, policy: '' },
          destroy: { enabled: false, policy: '' },
          me: { enabled: false, policy: '' },
        },
        role: {
          createRole: { enabled: false, policy: '' },
          findOne: { enabled: false, policy: '' },
          find: { enabled: false, policy: '' },
          updateRole: { enabled: false, policy: '' },
          deleteRole: { enabled: false, policy: '' },
        },
        permissions: { getPermissions: { enabled: false, policy: '' } },
      },
    },
  },
  users: [],
};

let intervalId: NodeJS.Timeout;
let isDataSet: boolean;

const strapiEndpoint = process.env.STRAPI_APP_HOST
  ? `https://${process.env.STRAPI_APP_HOST}`
  : `http://localhost:${process.env.PORT}`

const getToken = async (count: number) => {
  try {
    if (count > 9 || isDataSet) return;
    clearInterval(intervalId);
    const loginRes = await axios.post(`${strapiEndpoint}/admin/login`, {
      email: process.env.STRAPI_ADMIN_EMAIL,
      password: process.env.STRAPI_ADMIN_PASSWORD,
    });
    isDataSet = true;
    addPermission(loginRes.data.data.token);
    return loginRes.data.data;
  } catch (e) {
    console.log(e);
    intervalId = setTimeout(async () => await getToken(count + 1), 3000);
  }
};

const addPermission = async token => {
  try {
    const loginRes = await axios.put(
      `${strapiEndpoint}/users-permissions/roles/2`,
      roles,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    console.log('strapi::init - roles added');
  } catch (e) {
    console.error('strapi::init - failed to load roles - %s', e.message);
  }
};

const collectionPermissions = {
  find: { enabled: true, policy: '' },
  findOne: { enabled: true, policy: '' },
  create: { enabled: true, policy: '' },
  update: { enabled: true, policy: '' },
  delete: { enabled: true, policy: '' },
};

const singlePermissions = {
  find: { enabled: true, policy: '' },
  update: { enabled: false, policy: '' },
  delete: { enabled: false, policy: '' },
};

export const setInitialRole = async pages => {
  pages.map(
    page =>
      (roles.permissions[`api::${page.name}`] = {
        controllers: {
          [page.name]: page.isCollection
            ? collectionPermissions
            : singlePermissions,
        },
      }),
  );
  const res = await getToken(0);
};
