import React from 'react'
import { GridComponent, Inject, ColumnsDirective,
    ColumnDirective, Search, Toolbar } from '@syncfusion/ej2-react-grids';
 
 import { ExperimentListData, ExperimentListGrid } from '../data/data';

const ExperimentTable = () => {
    const toolbarOptions = ['Search'];

    return (
      <div>
        <GridComponent
          dataSource={ExperimentListData}
          width="auto"
          allowPaging
          allowSorting
          toolbar={toolbarOptions}
        >
          <ColumnsDirective>
            {ExperimentListGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
          </ColumnsDirective>
          <Inject services={[Search, Toolbar]} />
  
        </GridComponent>
      </div>
    );
  };

export default ExperimentTable