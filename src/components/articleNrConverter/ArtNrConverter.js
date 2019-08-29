import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import XLSX from 'xlsx';

class artNrConv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: '',
      ids: this.props.ids,
      nrOfIds: 0,
      showUploadSpinner: false
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.getExcel = this.getExcel.bind(this);
  }
  inputHandler(e) {
    this.setState({ links: e.target.value });
    this.convertToId(this.state.links);
  }
  convertToId(str) {
    let splitText = str.split(/\r?\n/);
    let nrOfNrs = 0;
    let fullStr = 'ProductId\n';
    splitText.forEach(element => {
      if (element.includes('http')) {
        nrOfNrs++;
        var sStr = this.splitString(element);
        if (sStr) {
          fullStr += sStr + '\n';
        }
      }
    });
    this.setState({ ids: fullStr, nrOfIds: nrOfNrs });
    this.props.setIds(fullStr);
  }
  splitString(str) {
    if (str.split('-')[0] !== str) {
      let split = str.split('-');
      let lastStr = split[split.length - 1];
      let fixedStr;
      if (lastStr[0] === 'p') {
        fixedStr = lastStr.substr(1);
      } else if (split[split.length - 2][0] === 'p') {
        fixedStr = split[split.length - 2].substr(1);
      } else {
        fixedStr = split[split.length - 1];
      }
      return fixedStr;
    }
  }
  getExcel(e) {
    e.preventDefault();
    /* original data */
    var filename = `delete${new Date().toLocaleString()}.xlsx`;
    var data = [];
    this.state.ids.split(/\r?\n/).forEach(element => {
      data.push([element]);
    });
    var ws_name = 'SheetJS';

    //if(typeof console !== 'undefined') console.log(new Date());
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.aoa_to_sheet(data);

    /* add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, ws_name);

    /* write workbook */
    //if(typeof console !== 'undefined') console.log(new Date());
    XLSX.writeFile(wb, filename);
    //if(typeof console !== 'undefined') console.log(new Date());
  }
  handleFileChosen = e => {
    this.setState({ showUploadSpinner: true });
    var files = e.target.files,
      f = files[0];
    var reader = new FileReader();
    var str = '';
    reader.onload = async e => {
      var data = new Uint8Array(e.target.result);
      var workbook = XLSX.read(data, { type: 'array' });
      Object.keys(workbook.Sheets).forEach(sheet => {
        Object.keys(workbook.Sheets[sheet]).forEach(async row => {
          //console.log(row, workbook.Sheets[sheet][row]);
          if (!row.includes('!')) {
            if (
              typeof workbook.Sheets[sheet][row].v == 'number' &&
              !str.includes(workbook.Sheets[sheet][row].v)
            ) {
              str += `https://cdon.com/excel/upload/p-${workbook.Sheets[sheet][row].v} \n`;
            }
          }
        });
      });
      await this.setState({ links: str });
      await this.convertToId(this.state.links);
      this.setState({ showUploadSpinner: false });
    };
    reader.readAsArrayBuffer(f);
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="links" className="font-weight-bold">
                Links{' '}
                <span className="badge badge-primary" id="nrOfStrings">
                  {this.state.nrOfIds + (this.state.nrOfIds > 1 ? 'st' : '')}
                </span>
              </label>
              <TextareaAutosize
                rows={2}
                maxRows={20}
                name="links"
                placeholder="Ex. https://cdon.se/kategori/produkt-titel-p00000000"
                className="form-control textarea-links mb-2"
                id="links"
                value={this.state.links}
                onChange={this.inputHandler}
                onKeyUp={this.inputHandler}
              />
              <label
                htmlFor="importFile"
                href="#"
                className="btn btn-outline-success btn-sm"
              >
                {this.state.showUploadSpinner ? (
                  <span className="spinner-border spinner-border-sm"></span>
                ) : null}{' '}
                Upload excel file
              </label>
              <input
                type="file"
                style={{ display: 'none' }}
                name="importFile"
                id="importFile"
                onChange={this.handleFileChosen}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="output-ids" className="font-weight-bold">
                Article number(s){' '}
                <button
                  href="/"
                  className="btn btn-outline-info btn-sm"
                  onClick={this.getExcel}
                >
                  Download excel
                </button>
              </label>
              <TextareaAutosize
                rows={2}
                maxRows={20}
                name="output-ids"
                id="output-ids"
                className="form-control"
                value={this.state.ids}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default artNrConv;
