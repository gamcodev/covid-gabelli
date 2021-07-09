import React from 'react'
import Button from 'muicss/lib/react/button';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';


const ExportCerts = (props) => {
  const { registrants, fileName } = props
  
  const csvData = registrants

  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';

  const exportToCSV = (csvData, fileName) => {
      const ws = XLSX.utils.json_to_sheet(csvData);
      const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
      const data = new Blob([excelBuffer], {type: fileType});
      saveAs(data, fileName + fileExtension);
  }

  return (
    <Button
      disabled={ !csvData }
      variant='raised' color='primary'
      onClick={() => exportToCSV(csvData,fileName)}
    >
      Export List
    </Button>
  )
}

export default ExportCerts
