import {useState, useEffect} from "react";
import "./css/Budas.css";
import axios from "axios";
import Buda from "./Buda";
import AddBuda from "./AddBuda";

const Budas = () => {
    const [budas, setBudas] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    //after page loaded to asynch json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("http://localhost:3002/api/budas");
            setBudas(response.data);
        })();

    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method")
        setShowAddDialog(false);
    }

    const updateBudas = (Buda) => {
        setBudas((Budas)=>[...Budas, Buda]);
    };


    return (
        <>
            <button id="add-buda" onClick={openAddDialog}>+</button>

            {showAddDialog?(<AddBuda 
                                closeAddDialog={closeAddDialog} 
                                updateBudas={updateBudas}
                                /> ): ("")}
            
            <div id="buda-plans" className="columns">
                {buda.map((buda)=>(
                    <Buda
                    key={buda.name}
                    _id={buda._id}
                    name={buda.name}
                    description={buda.description}
                    rating={buda.rating}
                    main_image={house.main_image}/>
                ))}
                
            </div>
        </>
        
    );
};

export default Budas;