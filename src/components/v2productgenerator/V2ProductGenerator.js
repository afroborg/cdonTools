import React, { Component } from 'react';
import './v2productgenerator.sass';
import TextareaAutosize from 'react-autosize-textarea';
import generateXML from './generateXML';

export default class V2ProductGenerator extends Component {
  state = {
    products: 1,
    prefix: undefined,
    xml: ''
  };
  generateXML = () => {
    this.setState({ xml: generateXML(this.state.products, this.state.prefix) });
  };

  generateFile = () => {
    const data = new Blob([this.state.xml], { type: 'application/xml' });
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    document.body.append(a);
    a.download = `cdontools-v2xml-${new Date().toLocaleString()}`;
    a.href = url;
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
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
        {this.state.xml !== '' && (
          <div className="row mt-4 mb-4">
            <div className="col">
              <span className="font-weight-bold">Output</span>
              <button
                className="btn btn-outline-success btn-sm ml-2"
                onClick={this.generateFile}
              >
                Download
              </button>
              <TextareaAutosize
                className="form-control mt-4"
                value={this.state.xml}
                name="xml"
                onChange={this.handleChange}
                readOnly
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}
