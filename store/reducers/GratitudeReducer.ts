import * as ActionTypes from '../GratitudeActionTypes'
import { StoreActionTypes } from '../actions/GratitudeActions'
import { InitialGratitudeState } from "../../global";
import moment from 'moment'

const InitialState:InitialGratitudeState = {
    journals: []
}

const GraitudeStore = (state=InitialState, action:StoreActionTypes):InitialGratitudeState => {
    switch (action.type) {
        case ActionTypes.ADD_TODAYS_JOURNAL:
            let journals = [ ...state.journals ];
            let index = state.journals.length - 1 < 0 ? 0 : state.journals.length - 1
            let journal = state.journals[index];
            let date = moment().format('DD MMMM, yyyy');
            // console.log(moment().format('DD MMMM, yyyy'));
            if(!journal || journal.date !== date) {
                journals.push({
                    id: Math.floor(Math.random() * 100),
                    date: date,
                    content: ""
                });
            }
            console.log(journals);
            return {
                ...state,
                journals
            };
        case ActionTypes.EDIT_JOURNAL:
            let oldJournals = [ ...state.journals ].map( journal => {
                if( action.date === journal.date ) {
                    journal.content = action.content;
                }
                return journal;
            });
            return {
                ...state,
                journals: oldJournals
            }
        default:
            return state;
    }
}

export default GraitudeStore;