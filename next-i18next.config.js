const path = require("path");
module.exports = {
	i18n: {
		defaultLocale: "fa",
		locales: ["fa", "en"],
		localeDetection: false,
		localePath: path.resolve("./public/locales"),
	},
};
