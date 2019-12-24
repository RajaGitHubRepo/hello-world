## Course details get from below
https://app.pluralsight.com/library/courses/angular-ngrx-getting-started/table-of-contents

for large applications managing state is more complemx 
as components react to that state changes.

## What is state : 
it can be data which is stored in backend database or any user provided input information 
 like filter string or user input selection etc... if you want to reuse that information you
 can treat it as a state. 
1. Information about the view, such as weather to dispaly specific view elements or U.I elements
2. It can be user information, such as users name and roles 
3. It can be entity data such as product information 
4. User selecte input such as currently selected product or entered filter string or any information user 
has selected. 

## What is NGRX 
NGRX is a popular statemangement pattern called Redux tailered to Angular using standard angular concepts and techniques.

## Purposse of NGRX:
 1. Provide formal pattern for organising application state (Data, Either it is a backend (or) user provided input data or fileter           string     etc... ) In to one single local state container.
 2. Store (Redux pattern) provides a way to store UI state and it can be used between router views.
 3. Getting data gain and again from backend (and it won't keep change) Redux pattern allows you to store the data 
    locally as a cache. 
 4. Notify to all (The reducer updates the store and the store notify's to all subscribers ) 
 5. it has great tooling if something went wrong. 
 5. Managing that state by requiring one way data flow.
 6. Communicating that state changes to our components, so they can react accordingly.  
  
## More details about NgRX:

1. NGRX is a set of reactive libraries (Redux pattern) for Angular.
2. With out NGRX, You need to create services to store state information, If the application becomes 
more complex, there will be a lot of such services to create and manage, If you use NGRX it is a single store (Local) 

## What is Redux Pattern: 
   example : If you have a view like display any of the information based on click of a selection. 
   If user check to dispal the information. And user navigates to new page and comes back, then the 
   selection should be available back. 
   
## Types of problems NGRX Solves: 
Above example is a single component there are much more complex cases like below. 
 1.Much complex example involve multiple components use state 
 2.Loading data from backend service and create, update and delete operations. 
 
 
 
