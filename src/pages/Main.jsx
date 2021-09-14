import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Input } from '../components/Input'
import { LeftNav } from '../components/LeftNav'
import { Title } from '../components/Title'
import SearchIcon from '../assets/SearchIcon'
import { AddOrder } from '../components/AddOrder'
import { OrderItem } from '../components/OrderItem'
import { setLS } from '../utils/LocalStorage'


function Main() {
    const navItems = ['ID','Client','Pickup Address','Dropoff Address','Courier','Status']
    const orders = useSelector(state => state.ClientReducer.clients)

    const [addOrder, setAddOrder] = useState(false)
    const [items, setItems] = useState(orders)
    const [searchValue, setSearchValue] = useState('')

    useEffect(()=> {
        setItems(orders)
        setLS('clients', orders)
    }, [orders])

    const handleSearch = (e) => {
        setSearchValue(e.target.value)
    }

    useEffect(()=> {
        const filtredItems = orders.filter((item)=> {
            if(item.client.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1) {
                return true
            } else {
                return false
            }   
        })
        setItems([...filtredItems])
        
    }, [searchValue])


    return (
        <div className='wr'>
            <LeftNav />
            <div className="packages">
                <div className="packages__wr">
                <div className="packages__search">
                    <SearchIcon className='packages__search-icon'/>
                    <Input 
                    placeholder='Search package, client or courier'
                    className='packages__search-input'
                    onChange={handleSearch}
                    />
                </div>
                <div className="packages__header">
                    <Title  
                        text='Packages' 
                        className='packages__header-title'
                    />
                    <span className='packages__header-items'> {orders.length} entries</span>
                </div>

                <div className="packages__nav">
                    {navItems.map((item, key) => <div key={key} className="packages__nav-item">{item}</div>)}
                    <div className={`packages__nav-add ${addOrder && 'packages__nav-add--active' }`} onClick={() => setAddOrder(!addOrder)}>
                        {addOrder ? '-' : '+'}
                    </div>
                </div>
                {items.map((item, key)=> <OrderItem 
                key={key} 
                id={item.id} 
                client={item.client} 
                pickup={item.pickAdress}
                dropoff={item.dropAdress}
                courier={item.courier}
                />)}

                {addOrder && <AddOrder />}

                </div>
            </div>
        </div>
    )
}

export default Main
