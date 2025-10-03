import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../state/index'

const Shop = () => {
    const dispatch = useDispatch();
    return (
        <div className='container my-3'>
            <h2>Update Bank Balance for Deposit/Withdrawl</h2>
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Updated Balance
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button>
        </div>
    )
}

export default Shop