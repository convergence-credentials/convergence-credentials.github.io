import getConfig from "next/config";
import { getLogger } from "../utils/logger";

const { trace } = getLogger("config");
const { publicRuntimeConfig } = getConfig();

export const NETWORK_TYPES = {
  INFURA_MAINNET: "INFURA_MAINNET",
  INFURA_ROPSTEN: "INFURA_ROPSTEN",
  INJECTED: "INJECTED",
  CUSTOM: "CUSTOM",
  MOCK: "MOCK"
};

export const URL = "https://opencerts.io";

const GA_PRODUCTION_ID = "UA-130492260-1";
const GA_DEVELOPMENT_ID = "UA-130492260-2";

// export const IS_MAINNET = publicRuntimeConfig.network === "mainnet";

export const IS_MAINNET = false;

export const DEFAULT_NETWORK = IS_MAINNET
  ? NETWORK_TYPES.INFURA_MAINNET
  : NETWORK_TYPES.INFURA_ROPSTEN;


console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)
console.log(DEFAULT_NETWORK)

export const GA_ID = IS_MAINNET ? GA_PRODUCTION_ID : GA_DEVELOPMENT_ID;
export const CAPTCHA_CLIENT_KEY = "6LfiL3EUAAAAAHrfLvl2KhRAcXpanNXDqu6M0CCS";
export const EMAIL_API_URL = IS_MAINNET
  ? "https://api.opencerts.io/email"
  : "https://api-ropsten.opencerts.io/email";
export const INFURA_PROJECT_ID = "1f1ff2b3fca04f8d99f67d465c59e4ef";
export const LEGACY_OPENCERTS_RENDERER =
  publicRuntimeConfig.legacyRendererUrl || "https://legacy.opencerts.io/";

export const DEFAULT_SEO = {
  title: "Easily verify credentials",
  titleTemplate: `Convergence - %s`,
  description:
    "Whether you're a student or an employer, Convergence lets you verify the certificates you have of anyone from any institution. All in one place.",
  openGraph: {
    type: "website",
    url: URL,
    title: "Convergence - Easily verify credentials",
    description:
      "Whether you're a student or an employer, Convergence lets you verify the certificates you have of anyone from any institution. All in one place.",
    images: [
      {
        url: `${URL}/static/images/convergence.png`,
        width: 800,
        height: 600,
        alt: "Convergence"
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image"
  }
};

trace(`DEFAULT_NETWORK: ${DEFAULT_NETWORK}`);
trace(`CAPTCHA_CLIENT_KEY: ${CAPTCHA_CLIENT_KEY}`);
trace(`EMAIL_API_URL: ${EMAIL_API_URL}`);
