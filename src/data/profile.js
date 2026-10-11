// Drop your photo in src/assets/ named profile.jpg (or .png/.webp). Missing file = "DB." placeholder.
const f = import.meta.glob('../assets/profile.*', { eager: true, query: '?url', import: 'default' });
export default Object.values(f)[0] || null;
