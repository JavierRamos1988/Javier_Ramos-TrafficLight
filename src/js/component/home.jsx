import React, {useState, useRef} from "react";
import Counter from "./pruebas";
import '../../styles/index.css'

//create your first component
const Home = () => {
	const [ classNameRojo, setClassNameRojo] = useState("luzRojaOff");
	const [ classNameAmarilla, setClassNameAmarilla] = useState("luzAmarillaOff");
	const [ classNameVerde, setClassNameVerde] = useState("luzVerdeOff");
	const ref = useRef(null);
	
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

	let contador = 0;
	function botonOn () {
		if(ref.current){
			clearInterval(ref.current)
		}
		ref.current = setInterval(()=>{
		if(contador === 0){
			encenderLuzRoja()
		}
		else if(contador === 1){
			encenderLuzAmarilla()
		}
		else if(contador === 2){
			encenderLuzVerde()
		}
		contador = contador+1
		if (contador == 3){
			contador = 0
		}
	},1000)};
	function botonOff (){
		if(ref.current){
			clearInterval(ref.current)
		}

	}
	function botonPurpura(){
		if(ref.current){
			clearInterval(ref.current)
		}
		setClassNameRojo(classNameRojo=> classNameRojo="luzPurpuraOn");
		setClassNameAmarilla(classNameAmarilla=> classNameAmarilla="luzPurpuraOn");
		setClassNameVerde(classNameVerde=> classNameVerde="luzPurpuraOn");
	}
	function apagarSemaforo(){
		if(ref.current){
			clearInterval(ref.current)
		}
		setClassNameRojo(classNameRojo=> classNameRojo="luzRojaOff");
		setClassNameAmarilla(classNameAmarilla=> classNameAmarilla="luzAmarillaOff");
		setClassNameVerde(classNameVerde=> classNameVerde="luzVerdeOff");
	}
	
	return (
		<div className="contenedor">
			<div className="palo"></div>
			<div className="semaforo p-3">
				<div onClick={encenderLuzRoja} id="luzRoja" className={classNameRojo}></div>
				<div onClick={encenderLuzAmarilla} id="luzAmarilla"className={classNameAmarilla}></div>
				<div onClick={encenderLuzVerde} id="luzVerde"className={classNameVerde}></div>
			</div>
			<button onClick={botonOn} type="button" className="btn btn-primary mt-5">Iniciar semáforo</button>
			<h8>Inicia secuencia de luces</h8>
			<button onClick={botonOff} type="button" className="btn btn-primary mt-5">Parar semáforo</button>
			<h8>Para secuencia donde esté</h8>
			<button onClick={botonPurpura} type="button" className="btn btn-primary mt-5">Alarma Púrpura</button>
			<h8>Activa protocolo púrpura</h8>
			<button onClick={apagarSemaforo} type="button" className="btn btn-primary mt-5">Cortar corriente</button>
			<h8>Apaga todas las luces</h8>
		</div>
		);
};

export default Home;
