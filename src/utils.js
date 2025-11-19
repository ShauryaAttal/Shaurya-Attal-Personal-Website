export function createPageUrl(pageName) {
  const lower = pageName.toLowerCase();
  // Home should go to "/"
  if (lower === 'home') return '/';
  return `/${lower}`;
}