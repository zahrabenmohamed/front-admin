import { Chart } from 'primereact/chart';
import React, { useContext, useEffect, useRef, useState } from 'react';
const Dashboard = () => {
    const [chartData, setChartData] = useState({});
    const [piechartData, setPieChartData] = useState({});


    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const Piedata = {
            labels: ['Email', 'GED', 'FTP', 'Email with PJ'],
            datasets: [
               
                {
                    label: 'Documents',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--pink-400'),
                    data: [28, 48, 40, 19]
                }
            ]
        };
        const data = {
            labels: ['Invoice', 'Payment Receipt', 'Monthly Report'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'), 
                        documentStyle.getPropertyValue('--yellow-500'), 
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'), 
                        documentStyle.getPropertyValue('--yellow-400'), 
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setPieChartData(Piedata);
        setChartOptions(options);
    }, []);
    //const [lineOptions, setLineOptions] = useState(null);
    return (
        <div className="grid">
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Total Document</span>
                            <div className="text-900 font-medium text-xl">152</div>
                        </div>
                       
                    </div>
                    <span className="text-green-500 font-medium">24 new </span>
                    <span className="text-500">since last visit</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Total Template</span>
                            <div className="text-900 font-medium text-xl">100</div>
                        </div>
                        
                    </div>
                    <span className="text-green-500 font-medium">%5 </span>
                    <span className="text-500">since last week</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Total Users</span>
                            <div className="text-900 font-medium text-xl">28441</div>
                        </div>
                        
                    </div>
                    <span className="text-green-500 font-medium">520 </span>
                    <span className="text-500">newly registered</span>
                </div>
            </div>
            <div className="col-12 lg:col-6 xl:col-3">
                <div className="card mb-0">
                    <div className="flex justify-content-between mb-3">
                        <div>
                            <span className="block text-500 font-medium mb-3">Comments</span>
                            <div className="text-900 font-medium text-xl">152 Unread</div>
                        </div>
                        
                    </div>
                    <span className="text-green-500 font-medium">85 </span>
                    <span className="text-500">responded</span>
                </div>

            </div>
            <div className="col-12 xl:col-6">
                <div className="card">
                    <h5>Type of document generated</h5>
                    <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />

                </div>

            </div>

            <div className="col-12 xl:col-6">
                <div className="card">
                    <h5>Total Document Sent</h5>
                    <Chart type="radar" data={piechartData} options={chartOptions} className="w-full md:w-30rem" />

                </div>

            </div>
        </div>
    );
};

export default Dashboard;
