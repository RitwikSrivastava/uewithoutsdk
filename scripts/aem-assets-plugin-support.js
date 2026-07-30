// The base path of the (temporarily vendored, see plugins/aem-assets-plugin/scripts/aem-assets.js)
// aem-assets-plugin code.
const codeBasePath = `${window.hlx?.codeBasePath}/plugins/aem-assets-plugin`;

// Initialize the aem-assets-plugin.
export default async function assetsInit() {
  const {
    createOptimizedPicture,
    decorateExternalImages,
    createOptimizedPictureForDMOpenAPI,
    createOptimizedPictureForDM,
  } = await import(`${codeBasePath}/scripts/aem-assets.js`);
  window.hlx = window.hlx || {};
  window.hlx.aemassets = {
    codeBasePath,
    createOptimizedPicture,
    decorateExternalImages,
    createOptimizedPictureForDMOpenAPI,
    createOptimizedPictureForDM,
    smartCrops: {
      Small: { minWidth: 0, maxWidth: 767 },
      Medium: { minWidth: 768, maxWidth: 1023 },
      Large: { minWidth: 1024, maxWidth: 9999 },
    },
    // Matches this project's DM tenant, see config.json's repoNames/delivery domain.
    externalImageUrlPrefixes: [
      ['https://delivery-p66302-e574366.adobeaemcloud.com/', createOptimizedPictureForDMOpenAPI],
    ],
  };
}
