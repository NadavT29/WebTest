
export const getimg = () => {


    return async (dispatch) => {

        const response = await fetch('https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=cjwMEBJFzg_Qa1EpHsCYbxmm98ZnXEYfXiGTXuvnPP0')

        let i = await response.json();
        let backgrounds = i.results;

        return dispatch({
            type: "getimg",
            payload: backgrounds
        })
    }

}