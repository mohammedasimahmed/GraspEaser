declare module "tailwindcss/lib/util/flattenColorPalette" {
  const flattenColorPalette: (
    pallette: Record<string, string>,
  ) => Record<string, string>;
  export { flattenColorPalette };
}
