##Change Detection strategies
changeDetectionstrategy.onpush -> If we set this in the component decorator, the logic to change the view with out user 
intervention will not happen. 

## Two-Way binding : Is a combination of propety binding and event binding
two way binding syntax is a combination of property binding and event binding
<Input type="Text" [(ngModel)] = "listfilter" />

## Method1:
<Input type ="Text" [ngModel] = "listfilter"  ==> This one defins the propetry binding from component to template. This ensures that 
                                                   any default value assigned to the property is set to the input element. 
                    (ngModelChange) = "listfilter=$event">  ==> to catch the any user input changes to the input element and update that
                                                              user change ?($event) payload to the component property.
                                                               
                    // here NgmodelChange keep track of changes of values $event is the chagned value.
                    
                    (ngMdoleChange) =onFilterChange($event) = Ned to implement this method 
                    
                onFilterChange(value:string) 
                { 
                   
                }
                    
## Method2:

[(ngModle)] = "listfileter"

getter and setter
_listfilter;
get listfilter()
{ 
   return _listfilter;
}

set listfilter(value: string)
{ 
    this._listfilter = value;
} 
 
## summary
When you are using two way databinding for a compoenent property you need to use the 
getter and setter for the component proprty- so it is automatically taken care the update from template to component and 
component to template. 

## getter and setter
## Forms directives - ValueChanges observable. 

## Good Resource on Change Detection Strategy:
https://dzone.com/articles/how-to-use-change-detection-in-angular
