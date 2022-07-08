import React, {useState, useEffect} from 'react'
import * as API from '../../service/food.js'


export const SearchComponent = () => {

    // Hooks
    const [ food, setFood ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        API.getAllData().then(setFood);
    }, []);



    //Filtrado de datos a un solo array
    const singleDish = () => {
        let singleDishArray = [];
        food.map((item) => (item.food_pairing.map((dish) =>  singleDishArray.push(dish))))
        return singleDishArray;
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const result = !search ? singleDish() : singleDish().filter((item) => item.toLowerCase().includes(search.toLowerCase()))

    return (
    <>

        <form>
            <input type="search" value={search} onChange={handleChange} placeholder="Search your food" id="input-search" className='form-control'/>
        </form> 

        <div>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th className='text-center'>DISHES</th>
                    </tr>
                </thead>
                <tbody>
                    { result.map((dish) => (
                        <tr>
                        <td className='text-center'>{dish}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    </>
)
}
