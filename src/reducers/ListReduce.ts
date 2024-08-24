import { ItemType } from "@/types/ItemType"

type AddAction = {
    type: 'add',
    payload: {task: string}
}

type RemoveAction = {
    type: 'remove',
    payload: {id: number}
}

type EditTextAction = {
    type: 'edit',
    payload: {id: number, newTask: string}
}

type CompletedAction = {
    type: 'completed',
    payload: {id: number}
}

type ListActions = AddAction | RemoveAction | EditTextAction | CompletedAction ;

export const ListReducer = (list: ItemType[], actions: ListActions) => {
    switch(actions.type){
        case 'add': 
            return [...list, {
                id: list.length,
                task: actions.payload.task,
                completed: false
            }]
        case 'remove':
            return list.filter(item => item.id!== actions.payload.id)
        case 'edit':
            return list.map(item => item.id === actions.payload.id? {...item, task: actions.payload.newTask} : item)
        case 'completed':
            return list.map(item => item.id === actions.payload.id? {...item, completed:!item.completed} : item)
        default:
            return list;
    }
}