import "next";
import { initializeStore } from "./store";

declare module "*.svg";
declare module "*.png";
declare module "*.jpg";

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
    grecaptcha: any;
    isCaptchaReady: boolean;
    captchaId: boolean;
  }
}

declare module "next" {
  export interface NextPageContext {
    store: ReturnType<typeof initializeStore>;
  }
}
