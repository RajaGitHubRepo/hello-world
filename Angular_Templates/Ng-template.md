ng-template and ngTemplateOutlet directives are advanced concepts and very popular features 
that supports wide veriety of advanced features.

https://blog.angular-university.io/angular-ng-template-ng-container-ngtemplateoutlet/

These directives are used with ng-containers, so it is good idea to learn all in once. 
1. ng-container
2. ng-template
3. ngTemplateOutlet

## ng-template : As the name suggest, ng-template directive represents angular template. 
that means content of this tag conains part of the template, it can then be composed with other template in order 
to form a final template. 

Angular is already using ng-templates in ngif, ngfor and ngSwitch. 

##ngTemplateOutlet: We can able to take the template and instanciate anywhere on the page using 
  ngTemplateOutlet directive. 
  ng-container helps to do that
  <ng-container *ngTemplateOutlet="loading"></ng-container>  => here instanciating the loading ng-template.
  We are refering to the loading template via its template reference #loading, and we are using 
  the ngTemplateOutlet structural directive to instantiate the template.
  We are refering to the loading template via its template reference #loading, and we are
  using the ngTemplateOutlet structural directive to instantiate the template.

##TemplateContext: property variable to pass to the instance template.
I am relating this like this... ng-template is like a class wiht name and have some properties. 
when Instaciating the class, you can assign values those properites. 

in ng-template definision, we define some properties using let- propertyname
and inside the template we can use that property.
When instaciating using ngTemplateOutlet, we can provide those property values using context object.

@Component({
  selector: 'app-root',
  template: `      
<ng-template #estimateTemplate let-lessonsCounter="estimate">
    <div> Approximately {{lessonsCounter}} lessons ...</div>
</ng-template>
<ng-container 
   *ngTemplateOutlet="estimateTemplate;context:ctx">
</ng-container>
`})
export class AppComponent {

    totalEstimate = 10;
    ctx = {estimate: this.totalEstimate};
  
}

## ng-container: You can not use multiple structural directives like (ngIf and ngFor) on a single element.
In order to apply multiple structural directives on a single element you can use ng-container
the ng-container directive provides us with an element that we can attach a structural directive to a section
of the page, without having to create an extra element just for that.

There is another major use case for the ng-container directive: it can also provide a placeholder 
for injecting a template dynamically into the page

## Template References

