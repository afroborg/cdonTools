import React, { Component } from 'react';
import XLSX from 'xlsx';

class ExcelFile extends Component {

    downloadFile = () => {
        var filename = `delete${this.props.index}-${(new Date()).toLocaleString()}.xlsx`;
        var data = [['ProductId']];
        this.props.data.forEach(d => {
            if(parseInt(d)) data.push([d]);
        })
        var ws_name = "CDON Tools";

        var wb = XLSX.utils.book_new(), ws = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, ws_name);

        XLSX.writeFile(wb, filename);
        
    }

    render() {
        return (
            <div className="excel">
                <button onClick={this.downloadFile}>
                    <img src="https://www.freepngimg.com/thumb/microsoft/26716-4-excel-transparent.png" alt="excel"/>
                    <p>{this.props.index + 1}</p>
                </button>
            </div>
        );
    }
}

export default ExcelFile;