import React, {useState} from "react";
import Counter from "./pruebas";
import '../../styles/index.css'

//create your first component
const Home = () => {
	const [ classNameRojo, setClassNameRojo] = useState("luzRojaOff");
	const [ classNameAmarilla, setClassNameAmarilla] = useState("luzAmarillaOff");
	const [ classNameVerde, setClassNameVerde] = useState("luzVerdeOff");
	
	function encenderLuz(){
		let luzRoja = document.getElementsById("luzRoja");
		return setClassNameRojo="luzRojaOn"
	}

	return (
		<div className="contenedor">
			<div className="palo"></div>
			<div className="semaforo p-3">
				<div onClick={()=> setClassNameRojo(classNameRojo=> classNameRojo="luzRojaOn")} id="luzRoja" className={classNameRojo}></div>
				<div onClick={()=> setClassNameAmarilla(classNameAmarilla=> classNameAmarilla="luzAmarillaOn")} id="luzAmarilla"className={classNameAmarilla}></div>
				<div onClick={()=> setClassNameVerde(classNameVerde=> classNameVerde="luzVerdeOn")} id="luzVerde"className={classNameVerde}></div>
			</div>
			<button onClick={()=> setClassNameRojo(classNameRojo=> classNameRojo="luzRojaOn")} type="button" className="btn btn-primary mt-5">Cambiar Color</button>
		</div>
		);
};

export default Home;
