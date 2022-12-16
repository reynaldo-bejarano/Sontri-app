import { useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Bar } from "react-chartjs-2"
import { useContext } from "react";
import { authContext } from "../../context/AuthProvider";
import { useEffect } from "react";

ChartJS.register(
    CategoryScale, BarElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler
);




const options = {

    responsive: true,
    layout: {
        padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 60
        }
    },
    plugins: {
        legend: {
            display: false,
            labels: {
                color: "white",

            }
        },
    },
    scales: {
        y: {
            ticks: { color: 'white', beginAtZero: true }
        },
        x: {
            ticks: { color: 'white', beginAtZero: true }
        }
    }


}

const BarChart = () => {

    const { FirebaseGetInterestsChart, interestDataChart } = useContext(authContext);
    const labels = interestDataChart;
    const scores = [1, 1, 1, 1,1, 1, 1, 1];
    useEffect(() => {
        try {
            FirebaseGetInterestsChart();
        } catch (error) {
            console.log(error.message)
        }
    }, []);
    const data = useMemo(() => {
        return {
            datasets: [{
                label: "Cantidad de Interés por  clientes",
                data: scores,
                borderColor: "white",
                backgroundColor: [
                    '#2a9d8f',
                    '#e9c46a',
                    '#f4a261',
                    '#e76f51',
                    '#f48c06',
                    '#faa307',
                    "white",
                    '#219ebc',
                    '#e9c46a',
                    '#f4a261',
                    '#e76f51',
                    '#f08080',
                ]

            }],
            labels

        }
    }, []);


    return <Bar data={data} options={options} />
}

export default BarChart