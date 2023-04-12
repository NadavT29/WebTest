
export const getimg = () => {


    return async (dispatch) => {

        const response = await fetch('https://api.unsplash.com/search/photos?query=nature&page=1&per_page=5&client_id=aa7da31d016ad86222602dee2e4e588ec41b6308d5964450b74914c4ad7c00b5')

        let i = await response.json();
        let backgrounds = i.results;

        return dispatch({
            type: "getimg",
            payload: backgrounds
        })
    }

}