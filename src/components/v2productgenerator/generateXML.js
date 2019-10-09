import xmlFormatter from 'xml-formatter';

const generateXML = (products = 1, prefix = 'Product', variations) => {
  let xml = `<cdon_shopping_mall_import import_id="1" source_id="1" version="2.0" import_previous_id="1" import_type='FULL' xmlns="http://schemas.cdon.com/product/2.0/shopping-mall.xsd" import_date="${new Date().toISOString()}"><documents><products>`;
  for (let i = 0; i < products; i++) {
    xml += `<product id="${prefix.toLowerCase() +
      '-' +
      (i +
        1)}"><class id="Pens" /><values><attribute id="title"><value>${prefix +
      ' ' +
      (i + 1)}</value></attribute><attribute id="description"><value>${prefix +
      ' ' +
      (i +
        1)} description</value></attribute><attribute id="FrontImage"><value>URL</value></attribute>`;
    if (variations) {
      xml += `<variations>${generateKeys()}</variations>`;
    }
    xml += `</values><productStatus>${generateProductStatuses()}</productStatus>`;
    if (variations) {
      xml += '<productVariations>';
      for (let j = 0; j < products; j++) {
        xml += `<sku id="${prefix.toLowerCase() +
          '-' +
          (i + 1) +
          '-' +
          'variation' +
          '-' +
          (j +
            1)}">${generateProductStatuses()}<variation key="CatalogColor" value="Cool color" /><variation key="CatalogSize" value="Too big" />${generateSalesChannel()}</sku>`;
      }
      xml += '</productVariations>';
    } else {
      xml += generateSalesChannel();
    }
    xml += '</product>';
  }
  xml += `</products></documents></cdon_shopping_mall_import>`;
  return xmlFormatter(xml, { collapseContent: true });
};

const generateProductStatuses = () => {
  return '<status>ONLINE</status><exposeStatus>BUYABLE</exposeStatus><inStock>9999</inStock>';
};

const generateSalesChannel = () => {
  const price = random(9999);
  const salesPrice = random(price);
  return `<salesChannels><channel iso="se"><price current="${salesPrice}" ordinary="${price}" vat="25" currency="SEK"/><sellable>true</sellable><deliveryTime min="1" max="3"/><freightClass>${generateRandomFreightClass()}</freightClass></channel></salesChannels>`;
};

const generateRandomFreightClass = () => {
  const freightClasses = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  return freightClasses[Math.floor(Math.random() * freightClasses.length)];
};

const random = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

const generateKeys = () => {
  return '<key attribute="CatalogColor"><variation value="Cool color" /></key><key attribute="CatalogSize"><variation value="Too big" /></key>';
};

export default generateXML;
