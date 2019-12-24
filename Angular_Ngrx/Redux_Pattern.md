Redux is not just for Angular, almost all front end frameworks use this statemenagnet library. 
by using redux we can build predictable state containers for javascript apps. 

## ngrx has 3 following main principles
    1. Single Source of truth is called State
    2. State is read only and only way to change the state is by dispatching Actions.
    3. Changes to the store is done by using pure functions called Reducers. 
## Store:
    It is literally a javascript object, which can store all of your application state. 
    Angular forms need to include in store, because usually they are self contained.
    Things which are not serialisable are not put in to store.

## Actions: 
      Actions are simple javascript objects with Type of string and payload of any type
       { 
           Type:"Login",
           PayLoad : {userName= '', password = ''}
       }
      If you need to change the state, you need to replace the whole state object (as state is immutable)
## Reducers:
    Reducers are functions, that specify how state changes in response to an action.
    Reducer is a pure function which accepts two orguments (state, action) and returns a new state. 
    State = is a previous state 
    Action = dispatched update state. 


## NGRX effect:
    To manage side effects we use NGRX effects library. 

Components don't put the information in to the store, rather they dispatch an action for the reducer to update the store. 
Components don't read the information from the store, then they use selector to recieve state change notfications.
Since all the components, get the information from single source of touth (store)..

Ngrx has tools to view our list of actions and state, making it much easier to see what's going on in the application.


(*)Action : 
---------
(*)Reducer : 
----------
Takes the stae from the store if already exists and creates a new state (as it is immutable)
(*)Store (local store) State : 
----------------------------
is a tree like object (which organises in to moudles and properties)
you need to install @ngrx/store package
  Import {StoreModule} from 'ngrx/store';

@NgMoudle({
Imports : [BrowserModule, 
RouterModule.forRoot(),
StoreModule.forRoot()
]
})
export class AppModule
{
}

// As we discussed store is organised in to features (just like feature modules) are also called slices. 
// we create number of reduceres for each slice in the store. (like product reducer, customer reducer, user reducer etc...)
// Again each slice is subdevided in to multiple slices just like prodcut features has (productList, CurrentProduct, dispaly code yer or no etc...)

(*) Selector : 
----------
