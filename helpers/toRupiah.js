const toRupiah = (num) => {
  return new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR',
  }).format(num);
};

module.exports = toRupiah;
