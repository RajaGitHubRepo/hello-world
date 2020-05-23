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
  
## Feature module state composition
  StoreModule.ForFeature("products", reference to that reducer); 
  These are similar to routes for routes we use forchild() and for reducers we user .forFreacture().
  We can devide further in to sub reducers with in the each module. Reducers for subslices. 
  we can set these reducers for sub slices by using forFeature second argument which takes the key value pair.
  forFeature(products, {Prodcutlist:listReducer , productEdit:editreducer})

## Define the state and actions

## Build a reducer to process actions and set store state

## Dispatch an action to change store state

## Subscribe to state change notifications
