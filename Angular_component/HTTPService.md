return this.http.get<IProduct[]>(this.ProdcutUrl)
              .Pipe(
              tap(data => console.log(data))
              tap( data => this.prodcuts == data) -- > To Set The Prodcuts Property to the data retrieved. 
              catchError(this.HandleError)
              )
              
## Http.Get<>()
Takes input the type you want to recieve. one you get you can use the 
 pipe () operater to transform the given input data 
 .Pipe (
 tap()
 tap(data => this.proudcts = data) // Yu can use tap to save the given data in to the Property of a service or any other variable. 
 catchError(this.HandleError)  // hadle exception. 
 )

## Map and filter operator to tranform the data. 
  Most widly used operators when we use http service to get the response back with Get

## http.Get<return type> (Htp Url )  
    .Pipe () ==> List of Observable Opererators 
