module.exports = {
  images: {
    domains: ["i.thatcopy.pw"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
