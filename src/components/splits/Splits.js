import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import XLSX from 'xlsx';

import ExcelFile from './ExcelFile';
import './excel.sass';

class artNrConv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ids: '',
            nrOfIds: 0,
            showUploadSpinner: false,
            files: []
        }
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler(e) {
        this.setState({[e.target.name]: e.target.value, nrOfIds: this.calcIds()});
        this.generateExcelData();
    }
    calcIds = () => {
        let splitText = this.state.ids.split(/\r?\n/);
        let nrOfIds = 0;
        splitText.forEach(element => {
            nrOfIds++;
        });
        return nrOfIds;
    }
    handleFileChosen = e => {
        this.setState({ showUploadSpinner: true });
        var files = e.target.files, f = files[0];
        var reader = new FileReader();
        var str = '';
        reader.onload = async (e) => {
            var data = new Uint8Array(e.target.result);
            var workbook = XLSX.read(data, { type: 'array' });
            Object.keys(workbook.Sheets).forEach(sheet => {
                Object.keys(workbook.Sheets[sheet]).forEach(async row => {
                    //console.log(row, workbook.Sheets[sheet][row]);
                    if (!row.includes('!')) {
                        if (typeof workbook.Sheets[sheet][row].v == 'number' && !str.includes(workbook.Sheets[sheet][row].v) && workbook.Sheets[sheet][row].v.toString().length === 8) {
                            str += `${workbook.Sheets[sheet][row].v} \n`;
                        }
                    }
                })
            });
            await this.setState({ids: str});
            this.setState({ showUploadSpinner: false, nrOfIds: this.calcIds() });
            this.generateExcelData()
        };
        reader.readAsArrayBuffer(f);
    }

    generateExcelData = () => {
        var files = [];
        for(var i = 1; i < Math.ceil(this.state.nrOfIds / 1000) + 1; i++){
            files.push(this.state.ids.split(/\r?\n/).slice(1000 * (i-1), 1000*i));
            this.setState({files});
        }
    }

    getGeneratorData = () => {
        this.setState({ids: this.props.ids});
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label htmlFor="ids" className="font-weight-bold">Ids <span className="badge badge-primary" id="nrOfStrings">{this.state.nrOfIds + (this.state.nrOfIds > 1 ? 'st' : '')}</span></label>
                            <TextareaAutosize rows={2} maxRows={20} name="ids" placeholder="Ex. xxxxxx" className="form-control textarea-links mb-2" id="ids" value={this.state.ids} onChange={this.inputHandler}/>
                            <label htmlFor="importFile" href="#" className="btn btn-outline-success btn-sm">{this.state.showUploadSpinner ? (<span className="spinner-border spinner-border-sm"></span>) : (null)} Upload excel file</label>
                            <input type="file" style={{ 'display': 'none' }} name="importFile" id="importFile" onChange={this.handleFileChosen} />
                            <label className={`btn btn-outline-primary btn-sm ml-2 ${this.props.ids ? '' : 'disabled'}`} onClick={this.getGeneratorData}>Hämta data från generator</label>
                        </div>
                    </div>
                </div>
                {this.state.files.length > 0 ? (
                    <div className="row mt-3">
                    <div className="col">
                        <h5>Excelfiler ({this.state.files.length}):</h5>
                        <div className="excelfiles">
                            {this.state.files.map((file, index) => {
                                return (<div className="excelContainer"><ExcelFile data={file} index={index}/></div>)
                            })}
                        </div>
                    </div>
                </div>
                ) : (null)}
            </div>
        );
    }
}


export default artNrConv;