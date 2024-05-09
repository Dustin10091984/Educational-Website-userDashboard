

'use client'

import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

const ClassTable = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    { کلاس: 'زیست-تست', مدرس: ' اشکان عظیمی', ترم: 1,نوع:'حضوری', وضعیت: true },
    { کلاس: 'شیمی-تست', مدرس: 'اشکان عظیمی', ترم: 1,نوع:'حضوری', وضعیت: false },
    { کلاس: 'ریاضی-تست', مدرس: 'اشکان عظیمی', ترم: 2,نوع:'آنلاین', وضعیت: false },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { headerName: 'ردیف', valueGetter: 'node.rowIndex + 1', width: 100 },
    { field: 'کلاس' },
    { field: 'مدرس' },
    { field: 'ترم' },
    { field: 'نوع' },
    { field: 'وضعیت' },
    {
      headerName: 'عملیات',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: (row) => {
          // Handle button click for the specific row
          console.log('Button Clicked for Row:', row.data);
        },
      },
    },
  ]);

  const frameworkComponents = {
    buttonRenderer: ButtonRenderer,
  };

  return (
    <div className="ag-theme-quartz w-full px-[15%] md:px-4" style={{ height: 700, fontFamily: 'IRANSansWeb' }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} enableRtl={true} frameworkComponents={frameworkComponents} />
    </div>
  );
};

// Custom Button Renderer Component
const ButtonRenderer = (props) => {
  const handleClick = () => {
    props.onClick(props.node);
  };

  return <button className='text-black' onClick={handleClick}>Click Me</button>;
};

export default ClassTable;

