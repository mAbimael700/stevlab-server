function formatMacAddressWithSeparators(mac) {
  // Dividir la cadena en grupos de 2 caracteres y unirlos con ':'
  return mac
    .match(/.{1,2}/g)
    .join(":")
    .toUpperCase();
}

module.exports = {
  formatMacAddressWithSeparators,
};
