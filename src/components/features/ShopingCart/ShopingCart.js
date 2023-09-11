import React, { useState } from 'react'
import Cartlist from './Cartlist'

export default function ShopingCart() {
    const [List, setList] = useState([])
    const [Item, setItem] = useState("")
    const [Price, setPrice] = useState("")
    const [Total, setTotal] = useState(0)

    const handleItemInput = (e) => {
        setItem(e.target.value)
    }

    const handlePriceInput = (e) => {
        let input = e.target.value
        if (!isNaN(Number.parseInt(input.slice(-1))) || input === "") {
            setPrice(input)
        }
    }

    const handleAddItemToCart = () => {
        List.push({
            Item: Item,
            Price: Price
        })
        setTotal(Number.parseInt(Total) + Number.parseInt(Price))
        setItem("")
        setPrice("")
    }

    const handelEnterKeyPress = (e) => {
        if (e.key === "Enter" && Item !== "" && Price !== "") {
            handleAddItemToCart()
            document.getElementById("Item").focus()
        }
        else if(e.key === "Enter" && Item === ""){
            document.getElementById("Item").focus()
        }
        else if(e.key === "Enter" && Price === ""){
            document.getElementById("Price").focus()
        }
    }

    const handleDeleteItemFromList = (e) => {
		let newList = []
		let Index = Number.parseInt(e.target.id)
		for (const slno in List) {
			if (Number.parseInt(slno) === Index) {
				setTotal(Total - List[slno].Price)
				continue
			}
			newList.push(List[slno])
		}
		setList(newList)
	}
    return (
        <div className="container px-5 py-7 mx-auto">
            <div className="flex flex-col text-center w-full mb-12 border-b-4 border-orange-700">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Shoping cart</h1>
            </div>

            <Cartlist List={List} RemoveItem = {handleDeleteItemFromList} />

            <div className="flex flex-row text-center w-full mb-5 border-t-4 border-orange-700 fixed left-0 right-0 bottom-0 bg-white">
                <div className="flex flex-wrap -m-2 w-3/4 mx-4">
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="Item" className="leading-7 text-sm text-gray-600">Item</label>
                            <input type="text" id="Item" name="first_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handleItemInput} value={Item} onKeyDown={handelEnterKeyPress}/>
                        </div>
                    </div>
                    <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="Price" className="leading-7 text-sm text-gray-600">Price</label>
                            <input type="text" id="Price" name="last_name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={handlePriceInput} value={Price} onKeyDown={handelEnterKeyPress}/>
                        </div>
                    </div>
                </div>
                {(Price !== "" && Item !== "") && <button className='bg-blue-200 mr-3 px-3' onClick={handleAddItemToCart}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                        <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM280-280q-45 0-69-39.5t-1-78.5l54-98-144-304H40v-80h131l170 360h281l155-280 70 38-155 280q-11 20-29 31t-41 11H324l-44 80h480v80H280Z" />
                    </svg>
                    <span>Add</span>
                </button>}
                <div className='w-1/4'>
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                            <div className="relative">
                                <label for="last_name" className="leading-7 text-sm text-gray-600">Total</label>
                                <h1 className="text-3xl">{Total}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
