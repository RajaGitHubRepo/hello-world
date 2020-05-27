## Motivation for strongly typing our actions
    motivation : in our previous reducer we are hard coding the action types 
    like below in switch statement
    case 'TOGGLE'
      return {
      }
   
    While dispatching also we are hardcoding the strings for the type and payload also.
    If we do spelling mistake, there is nothing that we can able to find out... 

## Action Creators 
     By building action creaters we can gain following things
     - For strongly typing our actions. ( Prevents us from typos and hard to find errors) 
     - for create and dispatch actions.
     - Use actions and selectors to communicate between components. 
     - Define actions for more complex operations.   
     
     It Involves 3 steps: 
       - Define the actions types as set of named constants.
       - Build the aciton creators. 
       - Define the union types for those action creators. 
       
       1. define all the aciton types in a enum 
       export enum actionTypes {
       toggleproductCode= '[product]Toogle' => Some good namingconvention to idetify 
                                            // Here [Product] specifies the name of the slice. 
       }
      
       Creat - Action creator
       exprot class ToggleProuctCode (Name of the action creator) Implements Action {
            readonly Type = actionTypes.toggleproductCode;
            Constructor (public payload: boolean)
            {
             
            }
       }
       
       
 ## why union type for action creators ? 
      -- Did not Understand the union typing ( Need to come back later and understand the 
       what is union types and why we need to union type the action creators ) 
       The second paramter in reducer will be action and earlier we have not specified the type.
       by defining the union type of all the action creators we can we the union type here.
       so the action cretors should be of one of the union type above. 

## 
