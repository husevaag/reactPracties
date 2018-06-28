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
            label:"Juni",
            value:"20000"
        },
        {
            label:"Juli",
            value:"25000"
        },
        {
            label:"August",
            value:"23000"
        },
        {
            label:"September",
            value:"27000"
        },
        {
            label:"Oktober"
            ,value:"21000"
        }
    ]
};
var revenueChartConfigs={
    id:"revenue-chart",
    type:"column2d",
    width:"30%",
    height:300,
    dataFormat:"json",
    dataSource:myDataSource,
    display: "flex",
    
};

export const BudgetExpences = (<ReactFC {...revenueChartConfigs}/>);