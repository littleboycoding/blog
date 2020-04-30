const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: { API_URL: "http://localhost:3000" },
    };
  }
  return {
    exportTrailingSlash: true,
    env: { API_URL: "https://littleboycoding.netlify.app" },
  };
};
