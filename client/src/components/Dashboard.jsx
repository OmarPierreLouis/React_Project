import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import {Link} from 'react-router-dom'

const Dashboard = () => {
    const [allProducts, setAllProducts] = useState([]);
    
    useEffect(() => {
        axios.get("http://localhost:8000/Fli/get")
            .then(res => {
                console.log(res)
                setAllProducts(res.data.results)
            })
            .catch(err => {
                console.log("error", err)
            })
    },[])
    return (
        <div>
            <>
                return (

                    <h1>Mic check 1 2 1 2</h1>
                    
                </>
        </div>
    );
};


export default Dashboard;
// class Dashboard extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// Dashboard.propTypes = {};