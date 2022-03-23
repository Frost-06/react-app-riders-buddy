const getMerchants = (users) => {
  const u = { ...users };
  Object.keys(u).map((k) => {
    if (u[k].type != "merchant") delete u[k];
  });
  return u;
};

const getStoreMerchant = (id, users) => {
  const merchants = getMerchants(users);
  let m;
  Object.keys(merchants).map((k) => {
    if (merchants[k].merchant.store.id == id) {
      m = merchants[k];
    }
  });
  return m;
};

module.exports = {
  getMerchants,
  getStoreMerchant,
};
