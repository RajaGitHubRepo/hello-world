## How to access a ModuleA into Module B

First improt ModuleA in the moduleB, What ever the component or directive or pipe you want to use in moudleB you need ot export 
in the moduleA , in the export [] array. 
and register ModuleA in the imports array of ModuleB


## (Registering a serivce via module's providers array) 
If you eager load a module and that moudles have provided in Array [which contains] service. 
This service is not registered in Root Injector, a Child Injector is created and this service 
is only available for this module. 

and also in the service decorator
@injectable()
{
  ProvidedIn : 'modulename'   - If this module is eager loaded then this service is injected in root injector.
                              - if this module is lazy loaded then this servcie is injected in child injector. 
} 

## If you want to use serviceA of module A in to ServiceB of moduleB. 
you dont need to import ModuleA in to moudleB. becase 
root injector will take care of suppling of service in ModuleB. 

## Registering a serivce via component providers 
A seperate child injector will be always created. (not the root injector).
Even though the above component moudle is Lazy loaded or eagerly loaded. 
The servcie is only available for this component. 

