import type { NextConfig } from "next";

// Deployment configuration.
//
// Default: deploy to the custom domain `nothingbuthealthy.in` (root path),
// which matches `SITE_URL` in `src/utils/constants.ts` and every canonical /
// JSON-LD URL on the site.
//
// To deploy at a sub-path (e.g. `<username>.github.io/nothingbuthealthy/`),
// set `NEXT_PUBLIC_BASE_PATH=/nothingbuthealthy` in the build environment AND
// update `SITE_URL` to match — otherwise canonicals will not resolve.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
