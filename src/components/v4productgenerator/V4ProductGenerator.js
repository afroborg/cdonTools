import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import {
  generateProduct,
  generatePrice,
  generateAvailability,
  generateMedia
} from './generateXML';

export default class V4ProductGenerator extends Component {
  state = {
    products: 1,
    prefix: undefined,
    productXML: '',
    priceXML: '',
    availabilityXML: '',
    mediaXML: ''
  };
  generateXML = () => {
    this.setState({
      productXML: generateProduct(this.state.products, this.state.prefix),
      priceXML: generatePrice(this.state.products, this.state.prefix),
      availabilityXML: generateAvailability(
        this.state.products,
        this.state.prefix
      ),
      mediaXML: generateMedia(this.state.products, this.state.prefix)
    });
  };

  generateFile = () => {
    const dataTypes = ['Product', 'Price', 'Availability', 'Media'];
    dataTypes.forEach(type => {
      const data = new Blob([this.state[type.toLowerCase() + 'XML']], {
        type: 'application/xml'
      });
      const url = window.URL.createObjectURL(data);
      const a = document.createElement('a');
      document.body.append(a);
      a.download = `cdontools-v4xml-${type}-${new Date().toLocaleString()}`;
      a.href = url;
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="output-ids" className="font-weight-bold">
                Number of products
              </label>
              <input
                className="form-control mb-2"
                type="number"
                value={this.state.products}
                name="products"
                onChange={this.handleChange}
                min="1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="output-ids" className="font-weight-bold">
                Prefix
              </label>
              <input
                className="form-control mb-2"
                value={this.state.prefix}
                placeholder="Product"
                name="prefix"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                onClick={this.generateXML}
              >
                Generate XML
              </button>
            </div>
          </div>
          <div className="col"></div>
        </div>
        {this.state.productXML !== '' && (
          <div className="row mt-4 mb-4">
            <div className="col">
              <div className="row">
                <span className="font-weight-bold">Output</span>
                <button
                  className="btn btn-outline-success btn-sm ml-2"
                  onClick={this.generateFile}
                >
                  Download all
                </button>
              </div>
              <div className="row  mt-4">
                <div className="col">
                  <p className="font-weight-bold">Product</p>
                  <TextareaAutosize
                    className="form-control"
                    value={this.state.productXML}
                    readOnly
                  />
                </div>
                <div className="col">
                  <p className="font-weight-bold">Price</p>
                  <TextareaAutosize
                    className="form-control"
                    value={this.state.priceXML}
                    readOnly
                  />
                </div>
                <div className="col">
                  <p className="font-weight-bold">Availability</p>
                  <TextareaAutosize
                    className="form-control"
                    value={this.state.availabilityXML}
                    readOnly
                  />
                </div>
                <div className="col">
                  <p className="font-weight-bold">Media</p>
                  <TextareaAutosize
                    className="form-control"
                    value={this.state.mediaXML}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
