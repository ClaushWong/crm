import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const API = {
  HOST: publicRuntimeConfig.NEXT_PUBLIC_API_HOST,
  TIMEOUT: publicRuntimeConfig.NEXT_PUBLIC_API_TIMEOUT_MS
    ? Number(publicRuntimeConfig.NEXT_PUBLIC_API_TIMEOUT_MS)
    : 30000,
};
