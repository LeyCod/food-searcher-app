import React, {useState, useEffect} from 'react'
import * as API from '../../service/food.js'


export const SearchComponent = () => {

    // Hooks
    const [ food, setFood ] = useState([])
    const [ search, setSearch ] = useState('')

    useEffect(() => {
        API.getAllData().then(setFood);
    }, []);

    return (
    <>

        <form action="">
            <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} name="q" placeholder="Search your food" id="input-search" className='form-control'/>
        </form> 
        <div>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th className=''>DISHES</th>
                    </tr>
                </thead>
                <tbody>
                    {food.map((item) => (
                            item.food_pairing.map((dish, index) => (
                                <tr>
                                    <td key={index}>{dish}</td>
                                </tr>                               
                            ))
                    ))}
                </tbody>
            </table>
        </div>
        
    </>
)
}
