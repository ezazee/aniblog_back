// module.exports = ({ env }) => ({
//   "vercel-deploy": {
//     enabled: true,
//     config: {
//       deployHook:
//         "https://api.vercel.com/v1/integrations/deploy/prj_aUik4tky2oIgZoj2yZ7hUG579Iuo/kgcwQ1WltO",
//       apiToken: "lLtBK7g9v6qVMx9RUNIx3B8p",
//       appFilter: "strapi_animae",
//       teamFilter: "your-team-id-on-vercel",
//       roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
//     },
//   },
// });

module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
