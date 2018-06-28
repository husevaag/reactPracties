import Fusioncharts from 'fusioncharts';
import React from 'react';
import OceanTheme from 'fusioncharts/themes/fusioncharts.theme.ocean';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

charts(Fusioncharts);
OceanTheme(FusionCharts);

var { categoryChartConfigs, revenueChartConfigs } = {
    type: "column2d",
    className: "fc-column2d", // ReactJS attribute-name for DOM classes
    dataFormat: "JSON",
    dataSource: {
        chart:{},
        data: [{value: 500}, {value: 600}, {value: 700}]
    }
};

var myDataSource={
    chart:{
        caption:"Utgifter",
        subCaption:"Alle utgifter pr mnd",
        numberPrefix:"kr ",
        theme: "ocean"
    },
    data:[
        {
            label:"Bakersfield Central",
            value:"880000"
        },
        {
            label:"Garden Groove harbour",
            value:"730000"
        },
        {
            label:"Los Angeles Topanga",
            value:"590000"
        },
        {
            label:"Compton-Rancho Dom",
            value:"520000"
        },
        {
            label:"Daly City Serramonte"
            ,value:"330000"
        }
    ]
};
var revenueChartConfigs={
    id:"revenue-chart",
    type:"column2d",
    width:"40%",
    height:300,
    dataFormat:"json",
    dataSource:myDataSource,
    display: "flex",
    
};

export const Budget = (<ReactFC {...revenueChartConfigs}/>);