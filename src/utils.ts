export function log(message: string, type?: 'log' | 'info' | 'warn') {
  if (!type || type === 'log') {
    console.log(message)
  } else if (type === 'info') {
    console.info(message)
  } else if (type === 'warn') {
    console.warn(message)
  }
}
