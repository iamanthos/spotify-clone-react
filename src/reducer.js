export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: null,
    //Remove after developing
    // token: "BQAenfQZC5OMtVer9p5-_DXd1U_C9OqSPf7lVOJzu3p8fGxWiRgCBV4ocnzh50VKG0mtDRoAYu4hYBQLPv9tRk5jzAnEa_s8iEGPEqZievbKr_ienfGaKlwL21xqYYC_vsCCllys-YV4IET1j-QFVFrnTU5vu9YHffR3xJmhvZZOKnlrR7fN",
};

//Action -> type, [payload]

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            };
        case "SET_PLAYING":
            return {
                ...state,
                playing: action.playing,
            };
        case "SET_ITEM":
            return {
                ...state,
                item: action.item,
            };
        default:
            return state;
    }
};

export default reducer;