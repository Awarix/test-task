export const ExperimentListGrid = [
    { field: 'Name',
      headerText: 'Experiment',
      width: '150',
      textAlign: 'Center' },

    { field: 'Description',
      headerText: 'Description',
      width: '170',
      textAlign: 'Center',
    },

    { field: 'Date',
      headerText: 'Date',
      width: '135',
      format: 'yMd',
      textAlign: 'Center' },
  
    { field: 'Status',
      headerText: 'Status',
      width: '120',
      textAlign: 'Center' },

    { field: 'ExperimentListID',
      headerText: 'ExperimentList ID',
      width: '125',
      textAlign: 'Center' },
  ];

  export const ExperimentListData = [
    {
      ExperimentListID: 1,
      Name: 'Atom Destroyer',
      Description: 'Destroy atoms to build new universe',
      Date: '03/09/2022',
      Status: 'Success',
    },
    {
      ExperimentListID: 2,
      Name: 'Dream Caster',
      Description: 'Only good dreams provider',
      Date: '01/09/2022',
      Status: 'Success',
    },
    {
      ExperimentListID: 3,
      Name: 'Slime Creator',
      Description: 'Build slime creatures from gloo',
      Date: '02/09/2022',
      Status: 'Failed',
    },
];

// chart
export const lineChartData = [
    [
      { xval: new Date(2005, 0, 1), yval: 21 },
      { xval: new Date(2006, 0, 1), yval: 24 },
      { xval: new Date(2007, 0, 1), yval: 36 },
      { xval: new Date(2008, 0, 1), yval: 38 },
      { xval: new Date(2009, 0, 1), yval: 54 },
      { xval: new Date(2010, 0, 1), yval: 57 },
      { xval: new Date(2011, 0, 1), yval: 70 },
    ],
    [
      { xval: new Date(2005, 0, 1), yval: 28 },
      { xval: new Date(2006, 0, 1), yval: 44 },
      { xval: new Date(2007, 0, 1), yval: 48 },
      { xval: new Date(2008, 0, 1), yval: 50 },
      { xval: new Date(2009, 0, 1), yval: 66 },
      { xval: new Date(2010, 0, 1), yval: 78 },
      { xval: new Date(2011, 0, 1), yval: 84 },
    ],
  
    [
      { xval: new Date(2005, 0, 1), yval: 10 },
      { xval: new Date(2006, 0, 1), yval: 20 },
      { xval: new Date(2007, 0, 1), yval: 30 },
      { xval: new Date(2008, 0, 1), yval: 39 },
      { xval: new Date(2009, 0, 1), yval: 50 },
      { xval: new Date(2010, 0, 1), yval: 70 },
      { xval: new Date(2011, 0, 1), yval: 100 },
    ],
  ];

  export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'yval',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  }
  
  export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };


  export const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'xval',
      yName: 'yval',
      name: 'Germany',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'xval',
      yName: 'yval',
      name: 'England',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[2],
      xName: 'xval',
      yName: 'yval',
      name: 'India',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];
