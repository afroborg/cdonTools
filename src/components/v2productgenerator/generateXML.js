import xmlFormatter from 'xml-formatter';

const generateXML = (products = 1, prefix = 'Product') => {
  let xml = `<cdon_shopping_mall_import import_id="1" source_id="1" version="2.0" import_previous_id="1" import_type='FULL' xmlns="http://schemas.cdon.com/product/2.0/shopping-mall.xsd" import_date="${new Date().toISOString()}"><documents><products>`;
  for (let i = 0; i < products; i++) {
    const price = random(9999);
    const salesPrice = random(price);
    xml += `<product id="${prefix.toLowerCase() +
      '-' +
      (i +
        1)}"><class id="Pens" /><freightClass>${generateRandomFreightClass()}</freightClass><values><attribute id="title"><value>${prefix +
      ' ' +
      (i + 1)}</value></attribute><attribute id="description"><value>${prefix +
      ' ' +
      (i +
        1)} description</value></attribute><attribute id="FrontImage"><value>URL</value></attribute></values><productStatus><status>ONLINE</status><exposeStatus>BUYABLE</exposeStatus><inStock>9999</inStock></productStatus><salesChannels><channel iso="se"><price current="${salesPrice}" ordinary="${price}" vat="25" currency="SEK"/><sellable>true</sellable><deliveryTime min="1" max="3"/></channel></salesChannels></product>`;
  }
  xml += `</products></documents></cdon_shopping_mall_import>`;
  return xmlFormatter(xml);
};

const generateRandomFreightClass = () => {
  const freightClasses = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  return freightClasses[Math.floor(Math.random() * freightClasses.length)];
};

const random = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default generateXML;
