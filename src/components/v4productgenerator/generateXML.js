import xmlFormatter from 'xml-formatter';

const generateProduct = (products = 1, prefix = 'Product') => {
  let xml = `<?xml version="1.0" encoding="utf-8"?><marketplace xmlns="https://schemas.cdon.com/product/4.0/4.8.0/product">`;
  for (let i = 0; i < products; i++) {
    xml += `<product><identity><id>${prefix.toLowerCase() +
      '-' +
      (i + 1)}</id></identity><title><default>${prefix +
      ' ' +
      (i + 1)}</default></title><description><default>${prefix +
      ' ' +
      (i +
        1)} description</default></description><category><puzzles_pegged_puzzles /></category></product>`;
  }
  xml += `</marketplace>`;
  return xmlFormatter(xml);
};

const generatePrice = (products = 1, prefix = 'Product') => {
  const price = random(9999);
  const salesPrice = random(price);
  let xml = `<?xml version="1.0" encoding="utf-8"?><marketplace xmlns="https://schemas.cdon.com/product/4.0/4.8.0/price">`;
  for (let i = 0; i < products; i++) {
    xml += `<product><id>${prefix.toLowerCase() +
      '-' +
      (i +
        1)}</id><se><salePrice>${salesPrice}</salePrice><originalPrice>${price}</originalPrice><shippingCost>29.0</shippingCost><vat>25</vat></se></product>`;
  }
  xml += `</marketplace>`;
  return xmlFormatter(xml);
};

const generateAvailability = (products = 1, prefix = 'Product') => {
  let xml = `<?xml version="1.0" encoding="utf-8"?>
  <marketplace xmlns="https://schemas.cdon.com/product/4.0/4.8.0/availability">`;
  for (let i = 0; i < products; i++) {
    xml += `<product><id>${prefix.toLowerCase() +
      '-' +
      (i +
        1)}</id><stock>9999</stock><se><status>Online</status><deliveryTime><min>1</min><max>3</max></deliveryTime></se></product>`;
  }
  xml += `</marketplace>`;
  return xmlFormatter(xml);
};

const generateMedia = (products = 1, prefix = 'Product') => {
  let xml = `<?xml version="1.0" encoding="utf-8"?><marketplace xmlns="https://schemas.cdon.com/product/4.0/4.8.0/media">`;
  for (let i = 0; i < products; i++) {
    xml += `<product><id>${prefix.toLowerCase() +
      '-' +
      (i + 1)}</id><images><main>URL</main></images></product>`;
  }
  xml += `</marketplace>`;
  return xmlFormatter(xml);
};

const random = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export { generateProduct, generatePrice, generateAvailability, generateMedia };
