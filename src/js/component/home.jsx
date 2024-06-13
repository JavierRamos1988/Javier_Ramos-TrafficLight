import React, {useState} from "react";
import Counter from "./pruebas";
import '../../styles/index.css'

//create your first component
const Home = () => {
	const [ classNameRojo, setClassNameRojo] = useState("luzRojaOff");
	const [ classNameAmarilla, setClassNameAmarilla] = useState("luzAmarillaOff");
	const [ classNameVerde, setClassNameVerde] = useState("luzVerdeOff");
	
	function encenderLuzRoja(){
		setClassNameRojo(classNameRojo=> classNameRojo="luzRojaOn");
		setClassNameAmarilla(classNameAmarilla=> classNameAmarilla="luzAmarillaOff");
		setClassNameVerde(classNameVerde=> classNameVerde="luzVerdeOff");
	};
	function encenderLuzAmarilla(){
		setClassNameRojo(classNameRojo=> classNameRojo="luzRojaOff");
		setClassNameAmarilla(classNameAmarilla=> classNameAmarilla="luzAmarillaOn");
		setClassNameVerde(classNameVerde=> classNameVerde="luzVerdeOff");
	};
	function encenderLuzVerde(){
		setClassNameRojo(classNameRojo=> classNameRojo="luzRojaOff");
		setClassNameAmarilla(classNameAmarilla=> classNameAmarilla="luzAmarillaOff");
		setClassNameVerde(classNameVerde=> classNameVerde="luzVerdeOn");
	};

	return (
		<div className="contenedor">
			<div className="palo"></div>
			<div className="semaforo p-3">
				<div onClick={encenderLuzRoja} id="luzRoja" className={classNameRojo}></div>
				<div onClick={encenderLuzAmarilla} id="luzAmarilla"className={classNameAmarilla}></div>
				<div onClick={encenderLuzVerde} id="luzVerde"className={classNameVerde}></div>
			</div>
			<button type="button" className="btn btn-primary mt-5">Cambiar Color</button>
		</div>
		);
};

export default Home;
