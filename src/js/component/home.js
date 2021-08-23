import React, { useState, useEffect } from "react";
import PropTypes, { object } from "prop-types";
import ReactDOM from "react-dom";
import { get } from "jquery";

export function Home() {
	const [tareaNueva, setTareaNueva] = useState("");
	const [listaTareas, setListaTareas] = useState([]);

	const listarTodo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/luxsalgado", {
			method: "GET",
			//body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(
				resp => resp.json()
				//console.log("Respuesta: ", resp.ok); // Será true (verdad) si la respuesta es exitosa.
				//console.log("Status: ", resp.status); // el código de estado = 200 o código = 400 etc.
				//console.log("Cadena: ",resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				//return resp.json(); (regresa una promesa) toma la respuesta de la API y la transforma a JSON
			)
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log("Data recibida", data); //esto imprimirá en la consola el objeto exacto recibido del servidor
				setListaTareas(data);
			});
	};

	const enviarTodo = nuevoArray => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/luxsalgado", {
			method: "PUT",
			body: JSON.stringify(nuevoArray), //Envio la variable y la convierto en texto plano
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => resp.json())
			.then(data => {
				listarTodo(); //esto llamara de nuevo al GET
			});
	};

	const borrarTodo = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/luxsalgado", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(resp => resp.json());
	};

	function agregar(e) {
		if (e.key === "Enter") {
			if (tareaNueva === "") {
				alert("Debes escribir una nueva tarea");
				return;
			} else {
				/* setListaTareas(arr => [
					...arr,
					{ label: tareaNueva, done: false }
				]); */
				setTareaNueva("");
				enviarTodo([
					//Ojo con esto, se hace porque el setListaTareas no guarda los datos nuevos tan rapido
					...listaTareas,
					{ label: tareaNueva, done: false }
				]);
				return;
			}
		}
		return;
	}

	function eliminar(indice) {
		if (indice > -1) {
			//Para validar que el arreglo no esté vacío
			let aux = listaTareas.filter((value, index) => index !== indice);
			setListaTareas(aux);
			console.log("Nuevo arreglo: ", listaTareas);
			enviarTodo(aux);
		}
	}

	useEffect(() => {
		listarTodo();
	}, []);

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="style-1 my-4">To-Do List</h1>
			<ul className="list-group shadow">
				<input
					className="list-group-item caja-todo"
					id="inputTarea"
					placeholder="Escribir una nueva tarea..."
					onChange={e => setTareaNueva(e.target.value)}
					value={tareaNueva}
					onKeyPress={e => agregar(e)}></input>
				{listaTareas.length === 0 ? (
					<li className="list-group-item caja-todo">
						<p className="my-2">No hay tareas, agregar tarea</p>
					</li>
				) : (
					listaTareas.map(function(name, index) {
						return (
							<li
								key={index}
								className="list-group-item caja-todo d-flex justify-content-between align-items-center seleccionar">
								<p className="my-2">{name.label}</p>
								<button
									type="button"
									className="btn btn-link hide"
									onClick={() => {
										eliminar(index);
									}}>
									<i className="fas fa-times"></i>
								</button>
							</li>
						);
					})
				)}
				{listaTareas.length === 0 ? (
					""
				) : (
					<li className="list-group-item caja-todo numero-items py-0">
						<p className="my-2">
							{listaTareas.length === 1
								? listaTareas.length + " tarea por hacer"
								: listaTareas.length + " tareas por hacer"}
						</p>
					</li>
				)}
			</ul>
			{/* <button
				className="btn btn-info"
				onClick={() => enviarTodo(listaTareas)}>
				Guardar en API
			</button> */}
			<button className="btn btn-danger" onClick={() => borrarTodo()}>
				Eliminar toda la lista de tareas y el usuario
			</button>
		</div>
	);
}
