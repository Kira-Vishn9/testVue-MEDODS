import vue from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  optimizeDeps: {
    include: ["vue"],
  },
};
