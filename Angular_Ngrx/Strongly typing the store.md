## Define Interfaces for slices of state
  - One issue when defining the global application state ( lazy loading boudnary).
  - We need to establish logical boundaries with our lazy loaded features with the global application state.
  
  How to solve this: In the feature(Product) code, We will extend the global application state to include the 
  the feature (prouduct) slcie of interface. So we are keeping this in our lazy loading boundary. 
  When feature is lazy loaded, then we are exteding the global state to include the lazy loded feature in our 
  global application state.
  
  Import * ( Meaning import all the of the exported memebers )
  Import * as fromRoot from '../../state/app.state'
  
  export Interface state extends fromRoot.state {  // fromRoot.state -> have all the exported intefaces defined.
  products : productState;
  }
  
  if your feature is not lazy loaded you can directly define it in the global application state. 
  export interface state {
   Users: UserState; // Pre loaded features slices.
  }
  Above extends used for lazy loaded feature slices. 

## Use the Interfaces for strong typing

## Set Initial state value

## Build selectors
