import{ useEffect, useRef } from "react";
import * as echarts from "echarts";

const Revenue = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current) return;

        const revenueChart = echarts.init(chartRef.current);

        const revenueOption = {
            animation: false,
            tooltip: {
                trigger: "axis",
            },
            grid: {
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
            },
            xAxis: {
                type: "category",
                data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                    data: [15000, 18000, 22000, 20000, 25000, 23000],
                    type: "bar",
                    itemStyle: {
                        color: "#3B82F6",
                    },
                },
            ],
        };

        revenueChart.setOption(revenueOption);

        const handleResize = () => {
            revenueChart.resize();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            revenueChart.dispose();
        };
    }, []);

    return (
        <div className="bg-white shadow rounded-lg">
            <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Revenue Trends
                </h3>
                <div ref={chartRef} style={{ height: "300px" }}></div>
            </div>
        </div>
    );
};

export default Revenue;
