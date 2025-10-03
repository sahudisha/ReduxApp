import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state/index'
import { bindActionCreators } from 'redux'

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);

    const balance = useSelector(state => state.amount)

    return (
        <div className='container my-3'>
            <h2>Update Bank Balance for Deposit/Withdrawl</h2>
            {/* <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>
            Updated Balance
            <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}

            {/* Implemented using bindCreators and destructuring i.e. by extracting the value */}
            <button className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}>-</button>
            Updated Balance ({balance})
            <button className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>
        </div>
    )
}

export default Shop