import { useContext, useEffect, useMemo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2"
import { authContext } from "../../context/AuthProvider";

ChartJS.register(
    CategoryScale, LineElement, LinearScale, PointElement, Title, Tooltip, Legend, Filler
);


const options = {
    fill: true,
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
        },
        labels: {
            color: "#fff",
        }
    },
    scales: {
        y: {
            y: {
                min: 0,
            },
            ticks: { color: '#fff', beginAtZero: true }
        },
        x: {
            ticks: { color: '#fff', beginAtZero: true }
        }
    }

}

const LineChart = () => {

    const { FirebaseGetClientsFecha, fechas } = useContext(authContext);
    const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const scores = fechas;


    useEffect(() => {
        try {
            FirebaseGetClientsFecha();
        } catch (error) {
            console.log(error)
        }

    }, []);

    const data = useMemo(() => {

        return {
            datasets: [{
                label: "Clientes agregados por mes",
                data: scores,
                tension: 0.3,
                borderColor: "white",
                pointRadius: 6,
                pointBackgroundColor: [
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
            labels,
        }
    }, []);


    return  <Line data={data} options={options} /> 
};



export default LineChart