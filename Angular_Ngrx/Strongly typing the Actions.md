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
     - For strongly typing our actions.
     - for create and dispatch actions.
     - Use actions and selectors to communicate between components. 
     - Define actions for more complex operations.   

## 
