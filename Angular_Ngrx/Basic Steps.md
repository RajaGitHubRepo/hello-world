## Setup a sample application
  It provides in-memory container for our application state.
  This provides single source of truth for the application. It is the one place 
  we store the application state and one place to read the application state. 
  
  State : is a simple javascript object contains the with properties. 
  since the angular app is organised by feature modules, it is logical to arrange the store 
  also by the features.This creates a tree like structure for the properties. 

## Install @ngrx/store
  npm install @ngrx/store

## Initialise the store
  How to Initialise the store/ state ? 
  We need to build one reducer to work with that state. 
  (or) We can create one reducer for each slice of state. 
  for main reducer we user .forRoot()
  
  For our example: Intialise the Store (we do this to register the store container with our application) In root app module (.forRoot() 
  and feature module (.forFeature())
   
  
## Feature module state composition
  StoreModule.ForFeature("products", reference to that reducer); 
  These are similar to routes for routes we use forchild() and for reducers we user .forFreacture().
  We can devide further in to sub reducers with in the each module. Reducers for subslices. 
  we can set these reducers for sub slices by using forFeature second argument which takes the key value pair.
  forFeature(products, {Prodcutlist:listReducer , productEdit:editreducer})

## Define the state and actions
   In our example we are creating for check box (have two states, if user checked in or un-checked it)
   and define to types : One to show the code (if check box is checked) 
                       : One to hid the code (if check box is un-checked)
                       : Another one type for toggle and payload looks like ( True | False) 

## Build a reducer to process actions and set store state
  how the recuder looks like ? 
  Export function reducer (state, action) 
  And the body of recueer is just like a big switch statement. Processing the type of actions.
  in the swich for each actions, the reducer creates new representations of the state. 
  reducer should be pure function: given the same input alwasy returns the same output. 
  
  Where to put the reducer ? create a seperate folder inside the feature module folder and add a reducer function.
  this recuder function needs to include in main reducer .forRoot({reducer}) and .forFeature('slice of the state',reducer)
  

## Dispatch an action to change store state

## Subscribe to state change notifications
