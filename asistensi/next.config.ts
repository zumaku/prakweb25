import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  productionBrowserSourceMaps: false,
  turbopack: {}, // ✅ Tambahkan ini untuk menggunakan Turbopack
};

export default nextConfig;