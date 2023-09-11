import React, { useState } from 'react'
import Todolist from "./Todolist"

export default function Todo() {
	const [List, setList] = useState([])
	const [Task, setTask] = useState({
		Task: "",
		Completed: false
	})
	const [completedCount, setCompletedCount] = useState(0)

	const handleTaskInput = (e) => {
		setTask({
			Task: e.target.value,
			Completed: false
		})
	}

	const handleAddToList = () => {
		List.push(Task)
		// setList(List)
		setTask({
			Task: "",
			Completed: false
		})
	}

	const handleDeleteFromList = (e) => {
		let newList = []
		let Index = Number.parseInt(e.target.id)
		for (const slno in List) {
			if (Number.parseInt(slno) === Index) {
				if (List[slno].Completed) {
					setCompletedCount(completedCount - 1)
				}
				continue
			}
			newList.push(List[slno])
		}
		setList(newList)
	}

	const handelKeyPress = (e) => {
		if(e.key === "Enter" && Task.Task !== ""){
			handleAddToList()
		}
	}

	const handleMarkAsCompleted = (e) => {
		let Index = Number.parseInt(e.target.id)
		for (const slno in List) {
			if (Number.parseInt(slno) === Index) {
				List[slno].Completed = !List[slno].Completed
				document.getElementById(`Task${slno}`).classList.toggle("line-through")
				if (List[slno].Completed) {
					setCompletedCount(completedCount + 1)
					document.getElementById(`${Index}`).innerHTML = "Mark as not completed"
				}
				else {
					setCompletedCount(completedCount - 1)
					document.getElementById(`${Index}`).innerHTML = "Mark as completed"
				}
			}
		}
	}
	return (
		<div className="container px-5 py-7 mx-auto">
			<div className="flex flex-col text-center w-full mb-12 border-b-4 border-orange-700">
				<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">To Do</h1>
			</div>

			<Todolist List={List} DeleteItem={handleDeleteFromList} MarkAsCompleted={handleMarkAsCompleted} />

			<div className="flex flex-row text-center w-full pb-5 border-t-4 border-orange-700 fixed left-0 right-0 bottom-0 bg-white">
				<div className="flex flex-wrap -m-2 w-full mx-4">
					<div className="p-2 w-full">
						<div className="relative">
							<label htmlFor="first_name" className="leading-7 text-sm text-gray-600">Task</label>
							<input type="text" id="first_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleTaskInput} onKeyDown={handelKeyPress} value={Task.Task} />
						</div>
					</div>
				</div>
				{Task.Task !== "" && <button className='bg-blue-200 mr-3 px-3' onClick={handleAddToList}>
					<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
					<span>Add</span>
				</button>}
				<div className='w-1/4'>
					<div className="flex flex-wrap -m-2">
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="last_name" className="leading-7 text-sm text-gray-600">Total</label>
								<h1 className="text-3xl">{List.length}</h1>
							</div>
						</div>
						<div className="p-2 w-1/2">
							<div className="relative">
								<label htmlFor="last_name" className="leading-7 text-sm text-gray-600">Completed</label>
								<h1 className="text-3xl">{completedCount}</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
