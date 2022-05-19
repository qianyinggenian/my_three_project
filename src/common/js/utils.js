export function getResourcePath (systemCode, path) {
  return process.env.NODE_ENV === 'production' ? `/${systemCode}${path}` : path
}
