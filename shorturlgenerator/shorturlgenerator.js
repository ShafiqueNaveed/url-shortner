

function generateShortId(length = 6) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let short = '';
  for (let i = 0; i < length; i++) {
    short += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return short;
}


module.exports = generateShortId
