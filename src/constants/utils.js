// Import.meta.glob is a Vite feature
// It scans a specified folder and all subfolders
// Returns an OBJECT
// The keys are the image path urls
// The values are the vite generated versions of the path urls (hashed) e.g hero-xyz123
export const images = import.meta.glob(
  "../assets/**/*.{jpg,jpeg,png,gif,svg}",
  {
    eager: true, // Import files as soon as the app starts
  }
);

export const getImage = (path) => images[`../${path}`].default;
