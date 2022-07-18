import React, {useState, useEffect} from 'react'
import * as API from '../../service/food.js'
import './search_component.css'


export const SearchComponent = () => {

    // Hooks
    const [ food, setFood ] = useState([])
    const [ searchFood, setSearchFood ] = useState('')

    useEffect(() => {
        API.getAllData().then(setFood);
    }, []);



    //Filtrado de datos a un solo array
    const singleDish = () => {
        let singleDishArray = [];
        food.map((item) => (item.food_pairing.map((dish) =>  singleDishArray.push(dish))))
        return singleDishArray;
    }


    // Handle Change
    const handleChange = (e) => {
        setSearchFood(e.target.value);
    }

    //Filtrado de busqueda
    const result = !searchFood ? singleDish() : singleDish().filter((item) => item.toLowerCase().includes(searchFood.toLowerCase()))

    return (
    <>

        <form className='col-lg-5 mx-auto mb-5 shadow'>
            <input type="search" onChange={handleChange} placeholder="Search your food" id="input-search" className='form-control text-center'/>
        </form>

        <div className='vh-100 col-xs-10 overflow-auto table-container'>
            <table className='table table-striped table-hover border border-secondary'>
                <thead>
                    <tr>
                        <th className='text-center table-header'>DISHES</th>
                    </tr>
                </thead>
                <tbody>
                    { result.map((dish) => (
                        <tr>
                        <td className='text-center list-element'>{dish}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    </>
)
}
