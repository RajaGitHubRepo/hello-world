## To achieve two way databinding you need directive called [(ngModel)]
   To use [ngModel] you need to import the forms module. 
   first -> data from view goes to components
   second -> and the data from the component comes back to view
   
## Exampmle:
   .html file
   <input type="text" [(ngModel)]="inputText">
   {{inputText}} 
   
   .ts file
    @component
    Export class MyComponent
    {
    inputText : string = "Initial Value";
    }
