import * as ActionTypes from "../GratitudeActionTypes"

interface AddTodaysJournalType {
    type: string
}
interface EditJournalType {
    type: string
    date: string
    content: string
}

export interface StoreActionTypes extends AddTodaysJournalType, EditJournalType {}

export const AddTodaysJournal = ():AddTodaysJournalType => {
    return {
        type: ActionTypes.ADD_TODAYS_JOURNAL
    }
}
export const editJournal = (date:string, content:string): EditJournalType => {
    return {
        type: ActionTypes.EDIT_JOURNAL,
        date,
        content
    }
}
