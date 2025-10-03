export const depositMoney = (amount) => {
    return (d) => {
        d({
            type: 'deposit',
            payload: amount
        })
    }
}

// Here dispatch is a parameter which is defined using arrow function
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}