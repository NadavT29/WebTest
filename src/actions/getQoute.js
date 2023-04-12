export const getQoutes = () => {
    return async (dispatch) => {
        const response = await fetch('https://type.fit/api/quotes')
        let i = await response.json();
        let length = i.length;

         let random = Math.floor(Math.random() * length)

       const q = (i[random])
     //    console.log(q)

        return dispatch({
            type: "QOUET",
            payload: q
        })
    }
}
