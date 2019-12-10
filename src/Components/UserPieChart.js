import React from "react";
import '../css/App.css';
import house_big from '../img/house_big.png'
import '../css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {PieChart, Pie, Legend, Tooltip,} from 'recharts';
import API_sensor from "../API/API_sensor";

class UserPieChart extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data01 : [
                { name: 'bathroom', value: 1},
                { name: 'bedroom', value: 1},
                { name: 'entrance', value: 1 },
                { name: 'livingroom', value: 1 }
            ],
            datatamp : [
                { name: 'bathroom', value: 0},
                { name: 'bedroom', value: 0},
                { name: 'entrance', value: 0 },
                { name: 'livingroom', value: 0 }
            ],
            cptBathroom : 1,
            cptBedroom : 1,
            cptEntrance : 1,
            cptLivingroom : 1,
        };


    }

    componentWillMount() {
        console.log("compo");
            let api_sensor = new API_sensor();
        api_sensor.fetchSensors().then(response => {
            this.setState({allSensors: response.data});
            for (var i = 0; i <= this.state.allSensors.length; i++) {
                console.log("allSensors.location : ", this.state.allSensors[i].location);
                if (this.state.allSensors[i].location === "bathroom") {
                    this.state.datatamp[0].value = this.state.datatamp[0].value + 1;
                }
                if (this.state.allSensors[i].location === "bedroom") {
                    this.state.datatamp[1].value = this.state.datatamp[1].value + 1;
                }
                if (this.state.allSensors[i].location === "entrance") {
                    this.state.datatamp[2].value = this.state.datatamp[2].value + 1;
                }
                if (this.state.allSensors[i].location === "livingroom") {
                    this.state.datatamp[3].value = this.state.datatamp[3].value + 1;
                }

            }
            this.setState({data01 : this.state.datatamp});
            this.starte();
        }).catch(onerror => {
        });

    }

    starte(){
        console.log("bwaaaaaaaaaaaaaaaaaaaaaaaaa");

        console.log("CASE zero ", this.state.data01[0]);
        console.log("CASE zero ", this.state.data01[1]);
        console.log("CASE zero ", this.state.data01[2]);
        console.log("CASE zero ", this.state.data01[3]);
    }


    render() {
            return (
                <PieChart width={300} height={300}>
                    <Pie dataKey="value" isAnimationActive={true} data={this.state.data01} cx={150} cy={150} outerRadius={80} fill="#1FA4DF" label/>
                    <Tooltip/>
                </PieChart>
            );
    }
}
export default UserPieChart;