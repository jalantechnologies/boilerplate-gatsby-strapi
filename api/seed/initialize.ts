import bcrypt from 'bcryptjs';

import { setInitialRole } from './roles/initial-data';
import { pages } from './pages';

export const startInitialization = async strapi => {
  try {
    const isFirst = await isFirstRun();
    const shouldRun =
      process.env.NODE_ENV === 'development' ||
      process.env.STRAPI_RUN_INIT === 'true';

    if (!isFirst || !shouldRun) {
      console.log('strapi::init - skipping procedure');
      return;
    }

    console.log('strapi::init - data initialization started');
    const password = await bcrypt.hash(process.env.STRAPI_ADMIN_PASSWORD, 10);
    await strapi.query('admin::user').create({
      data: {
        password,
        firstname: 'admin',
        lastname: 'admin',
        username: 'admin',
        email: process.env.STRAPI_ADMIN_EMAIL,
        blocked: false,
        isActive: true,
      },
    });

    await addData(pages, 0);

    console.log('strapi::init - initializing roles');
    await setInitialRole(pages);

    console.log(
      `strapi::init - completed, email - ${process.env.STRAPI_ADMIN_EMAIL}, password - ${process.env.STRAPI_ADMIN_PASSWORD}`,
    );
  } catch (e) {
    console.log(e);
  }
};

const addData = async (pages, index) => {
  if (index > pages.length - 1) return;
  const page = pages[index];
  console.log(`strapi::init - adding ${page.name} page data`);
  const data = await page.getData();
  try {
    if (page.isCollection) {
      await strapi.services[`api::${page.name}.${page.name}`].create({
        data: data,
      });
    } else {
      await strapi.services[`api::${page.name}.${page.name}`].createOrUpdate({
        data: data,
      });
    }
  } catch (e) {
    console.log(e);
  }
  console.log(`strapi::init - successfully added ${page.name} page data`);
  await addData(pages, index + 1);
};

const isFirstRun = async () => {
  const pluginStore = strapi.store({
    environment: strapi.config.environment,
    type: 'type',
    name: 'setup',
  });
  const initHasRun = await pluginStore.get({
    key: 'initHasRun',
  });
  await pluginStore.set({
    key: 'initHasRun',
    value: true,
  });
  return !initHasRun;
};
