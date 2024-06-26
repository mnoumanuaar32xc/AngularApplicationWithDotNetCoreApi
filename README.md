# Creating an Angular Application with a .NET Core API

Combining Angular's powerful client-side framework with the robust capabilities of a .NET Core API provides a comprehensive solution for developing high-performance web applications.
This guide will take you through the essential steps to integrate these technologies seamlessly. We'll cover setting up your development environment, understanding Angular's architecture, implementing routing, managing state, and handling essential features like authentication and CRUD operations. By the end of this guide, you'll have a solid understanding of how to build a scalable and maintainable Angular application backed by a .NET Core API.


Before Start Angular please go through bellow api , this API we will use in Angular Application.
https://github.com/mnoumanuaar32xc/AuthCoreApi

# Prerequisites  
At least knowledge about (.NET , .NET Core , Asp. Net , MVC, Web Forms , SQL Server, Bootstrap CSS, JS, Java queries , EF etc).

### Key Topics Include:

1. **Installation for Angular setup of IDE etc  (Windows)**
2. **Understanding Angular’s Structure**
3. **Implementing Routing**
4. **Handling Observables and Subscribers**
5. **Effective Unsubscribing**
6. **Managing CORS**
7. **Using Directives (RouterLink)**
8. **Working with CSS, JS, HTML in Angular**
9. **Creating a Navigation Bar**
10. **Performing CRUD Operations**
11. **Creating Environment Files**
12. **Building a Login Page and Logout Functionality**
13. **Authorization for Access Control**
14. **State Management (Local and Cookies)**
15. **JWT Token Handling**

# Setting Up Development Environmen 
We need to setup all the Software and Packages which are need to develop the application and that need to run our course smoothly.

 # Download and Install	
.NET SDK And .Net Run Time https://dotnet.microsoft.com/en-us/download 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/644b5828-3f92-49e8-9fb1-41e67e6d4185)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/e4e00561-31f4-4acc-aff1-6fdbe18cc592)

# Visual Studio Download and Install 
https://visualstudio.microsoft.com/downloads/
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/e69ff56c-1fb3-4072-a4e0-c349811b5f48)

# SSMS 
https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver1
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/df452c67-fe1a-4b7b-b5c6-9e5a3d9e1654)

# Download and Install SQL Server & SSMS 
https://www.microsoft.com/en-us/sql-server/sql-server-downloads
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/3676bd9d-2e92-4877-8cb5-2f42dce25910)

# Download and Install VSCode
https://code.visualstudio.com/

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/f3ab3c3c-9714-46f9-9f5c-d607fc9684fc)

# Visual Studio Code Extensions 
During the angular development we need some visual studio code extensions that would make a life ease for development.
During the angular development we need some visual studio code extensions that would make a life ease for development.
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/a4f307cb-67b5-46e4-b0fa-87387f6264bc)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/cc0d02f2-2d17-40b1-9939-96c6f6022b9e)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/ca149e68-f9e2-4dda-930a-7c2ad1b39ff1)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/b21be409-dc9d-4803-a005-65777de8d1b0)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/8da5cc0c-02fb-42f9-b981-5d298986469d)

# Node JS For Angular Application 
To create a Angular Application we need lates version of Node JS.  (https://nodejs.org/en)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/c5d9465e-5412-413b-8b73-549a0d2d284d)

# Angular CLI
1st we check Angular CLI are installed or not 
Open the command prompt 
Open the CMD and type  ng version 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/4c24aff2-ea9e-41ef-8683-52c9a1613ccc)

# Note 
# For uninstall npm uninstall –g @angular/cli
# For install npm install  –g @angular/cli
# npm install  –g @angular/cli@16.0.2 
# We need 16.0.2 for this training 

# Create new Angular Application.
Create a empty folder in drive like bellow image
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/de09866c-4a17-472d-922f-5fde64606052)
In my case you are looking 2 Git related files ignore them these files are just for git purpose.
Open the **AngularApplicationWithDotNetCoreApi** folder and Press shift button with mouse right click . And select the windows PowerShell . 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/f24a58cc-c775-42c7-bbbd-b826222c656f)
So now we have Node, and CLI angular already installed in 1st so we just type the command ng  new project-name

# Create a Project
ng new Project name for create a project in given directory
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/cd678b93-29e8-4d0f-bc87-1c3b17665949)
Via arrow keys select CSS and wait a minute.
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/1fbe9507-f1a8-4f9c-93b3-03c5277acfea)
after successfully project creation 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/614d047b-60e1-477b-b1f3-2dc83a68cd73)
Go to the directory and check Code project is created 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/768227d4-f1e0-4c8f-891f-29ee5f86db6e)

# Open the Vs Code
in VS Code select File and click on Open Folder and search your project which is created by Powershall command
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/592a2f0e-bab5-468a-8f38-25a81adb3c46)

# Understanding Files in Angular Application. 
1. Visual Studio code is the editor that is used for develop the angler Application. So this is the IDE for development the Angular applications.
# Node-module folder
Node module folder which get the dependencies needed by the angular application
For us this is not important this is for project creation 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/4b653a7e-7a78-4d2b-980c-1c1fe60021f8)

# Src 
All necessary files are in src .
In it we have app and assets and index.html file
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/cabb82d0-92b9-4323-8a3b-256b04781308)

# Index.html  and app-root <app-root></app-root>
app-root /app-root Insides body we have a component that is  app-root and this component is angular rendering by default.
All components are exists inside the app folder
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/484699b5-4613-4b0c-b32c-54e5211f8af7)

App.components.ts file 
Anuglar files are based on transcripts files
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/8f155532-4a02-48cd-bbe5-3e677c8730c8)

# Assets  
To keeps the static files and other css and images etc

# Main.ts 
1. This file is main file of project which is basically a starting up a AppModule which resides inside the app folder app.module.ts
2. app.module.ts is an important file which handles all the imports declarations and providers and submits and use this information to provide to the entire application. 
# App.routing.module.ts
That file use to create routes 
Routs have a map between rout and components that will get loaded where that rout is accessed.
 
# Style.css 
That is used for global styles which are used through out the application., otherwise local components.css use

# Run the application Run the application  
Open the project directory in PowerShell and type ng serve --open

on powershell following script will be generate 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/3caddde8-4dec-4814-b5a6-ca50b2a08aa2)
and on Browser mainely on Microsoft Edge web Application will be open 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/1a2a1098-64a1-4190-b50d-0f329230b294)

# Clean angular project and import Bootstrap CDN  
Open the app.component.html  and remove all Html and style code except 
router-outlet router-outlet 
Because router-out is only responsible for display the component that are render from the app routing module. 

# Bootstrap CDN 
https://getbootstrap.com/
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/3a5b4068-854c-4cb1-8952-099ca0310309)

# Include via CDN  
Include via cdn is the easy and simplest way 
Copy the link file and  opend the index.html file and paste inside the head tag and also copy and paste the java script file url.
 ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/24ff65ae-3ccc-4ae5-8c43-0cee0b8cd747)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/3be203c5-47d9-4d98-b3c0-eb00aaff4728)

# For conformation we added a write css and js files create a button inside the index.html 
<button class="btn btn-primary"> Button </button>
open the app.component.html and remove bulien templet all html and css code , check the browser 


![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/807ad491-6983-43a1-966b-8413c095b420)


 # NavBar component
Navbar component are the component which available on entire pages on application .
Router-outlet are the component which change the component as per navbar bar selection.
Navbar are placed in app.component.ts file and the is fixed
# Example of NavBar
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/f7bef1a1-872a-49b0-b0a0-e5e5c74f3f93)

# Create a NavBar Component 
In Vs code Create folder in app folder Core then inside new folder name  Component 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/07df1786-5c3d-4b39-b262-a0216a6d4cb7)
 **NavBar Component **  Open the terminal of core > component folder in VS code 
 open the terminal and create the component Navbar in Component folder ng g c Navbar
 
 ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/188cf65a-1ff2-4673-b9a0-c1535e541ae4) 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/76955f78-b0ca-46b0-b3ac-4f235ef3e2a1)
You can see we have 4 files of Navbar created . That is the Navbar component . 
Just to the app.component.html where **router-outlet /router-outlet**  available . Add the <app-navbar></app-navbar>  component tag over here.
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/7bd9b15e-2714-4733-97c5-49ed50e1056b)

 # Add Bootstrap NavBar into Component 
 Visit website **https://getbootstrap.com/docs/5.3/getting-started/introduction/** and search the Navbar
Copy any templet navbar and try in your code.

 ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/8b09369e-2369-4334-99f6-10e2fc0f0e29) 

 # NavBar  Component 
 Change the NavBar as per your requirements 
Remove the  <div class="container-fluid"> it just a container
Change the navbar-brand name Traning
Change the Dropdown Nav name Dropdown to Admin 
In Admin comment the all List items and add only on 
Change the name Action into Tranings. 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/1bb9a904-475a-499c-8941-1b7a55b72a12)

# Create Traning List Components and Angular Routing 
 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/e5dc033a-f9a6-475f-8ea7-a83095af6e84)

 Component Traning List  in terminal ** ng g c traning-list**

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/d3958433-ff5d-4978-8934-56e0cb11f35d)
# Add the traning-list component with Routing  
Open the app-routing.module.ts file and set the routs for traning-list Component. 
Run the Url in brouser   
1St step 

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/0ae97fd2-d190-4f25-951e-36066ce88020)

2nd Step 

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/2671c7e9-d671-48ce-97a2-a90c339e6570)

3rs Step output

 ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/2160d2d0-263e-4507-b7e5-f9a91f8f1480)
 
**Directives ** Best way of using directives router link we use [] brackets to pass other information also like 

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/9126d2c2-c689-42c1-b0a3-d17349f182f0)


# Add Training Component  
ng g c add-traning

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/2119cd69-2780-4d9f-a6f1-6d4dc07cb02f)

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/c5d21b72-3452-45fd-80d5-64403a84d8f7)



# Create Templet forms  
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/4fc7eff1-2aeb-45b4-a22f-a4d74521b6fb)

1. Import the FormsModule and     HttpClientModule in app.module.ts
2. add Form form  #form="ngForm" (ngSubmit)="onFormSubmit()" in Add Traning Templete. Implement the onFormSubmit function in  add-traning.component.ts
3. create the request Model for accept The valuse from Add traning Page , model paramenters valuse must be same as APi request model

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/e7a99b67-227e-49ee-ab86-b7ef007c7d9a)

4. Add constractor and Initilize the model as like 

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/01a7ea23-7e49-4b67-bf69-be76ac53be68)

5.
onFormSubmit(){ 
      console.log(this.model);
  }
  Add the  [(ngModel)]="model.Name" and  [(ngModel)]="model.Lavel" in AddTraning.html text fields and try to check the values in consol
  
  ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/6f8be159-9bf4-4309-9239-8cc3c912e8d2)

  

7. Angular Service 
we will create an angular service and we'll submit this form and give data to the Angular service where it will talk to the API that we created,
the ASP.Net Core API, and it will submit Create a new folder name services in traning folder
Then in terminal create a service  ng g s traning-services
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/73590190-a3a7-4bc6-bb48-7af621d370c9)


8. You can see the service class that name is TraningServicesService and that is Injectable  means it accessible allover the application,
 ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/3b8c3e51-a869-48e9-ab80-99f183d289a7)


# create all APIs in Angular Services 
bellow image shows I implement Get traning, Get traning ID , Add Training, Update Training, Delete Training 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/e5c7cf37-5946-4d1f-89a4-d7457286fdfa)

**Observables**
In Angular, Observables are part of the Reactive Extensions for JavaScript (RxJS) library. Observables provide support for passing messages between parts of your application.
Observables are a powerful feature used extensively in reactive programming to handle asynchronous operations and data streams.
Observables provide a way to subscribe to and receive notifications when new data or events are emitted, enabling you to react to changes in real-time.

**CORS**
Cross-origin resource sharing (CORS) is a mechanism for integrating applications. CORS defines a way for client web applications that are loaded in one domain to interact with resources in a different domain.It is the way to protect the API resource.  
 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/7e2e6315-4b94-4c9b-bfeb-6ab88e2c27ad)
In Progam.css allow the CROS then restart the application.
If API is with HTTPS then stop the PowerShell app and restart with SST true 
ng serve --open --ssl true
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/52e90572-5180-4def-be87-41750ae10e50)

**Call the Add Training API by UI**
before Call API need to understand **Subscriber** This allows us to keep our logic for making API calls and subscribing to its results in a separate file from our component, making our code more maintainable and easier to read.
 ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/c16bea1c-ea7d-4f27-8ae6-660933ddc16d)

 After Submit form you can see the status 
 ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/9ffe9c80-32ca-40b3-a261-da15e9fabd37)
 
 **Unsubscribing from Observables** 
1. unsubscribing from observables in Angular is crucial for proper management of memory, optimizing performance, preventing ghost subscriptions, and avoiding unnecessary network requests and improving the code maintainability.
2. So a lot of factors are there in the favor of unsubscribing observables.
3. It can lead to memory leaks.
4. It is always a best practice to unsubscribe from subscriptions when they are no longer needed to ensure the smooth functioning of your application.
5. **Main them is that when the API connection is done so we need to destroy all Objects of API Service from the application**.

**Example of Unsubscription **
in add-training-compoinent 
1. export class AddTraningComponent implements OnDestroy
2. private addyTrainingSubscription?:Subscription;
3.    this.addCategorySubscription= this.categoryService.addCaterory(this.model).subscribe({

      next:(response)=>{
         // console.log("Success");
         this.router.navigateByUrl('/Admin/Categories');
      },
      error:(error)=>{
        console.log('Fail'+ error );
      }
    });
4. ngOnDestroy(): void {
    // when Subscription completed on destroyed callas Subscripotion will be unsubscribed
    this.addCategorySubscription?.unsubscribe();
  }
 
  # Create Environment File  
Go to terminal and type  ng generate  environments  
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/b5a59375-6ff6-46b7-8a4d-75c184eee17d)

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/e4a8f9cb-d393-44db-9704-3411584034a9)
change the URl and the URl in both enviroment files
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/533d2119-7acf-4ea1-9bb8-8747f9ea69f2)

**Create Angular Service GET ALL Trainings**
  Ist create a model in Angular 
  Create a function in service get all Trainings and call the model in observable
  ![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/956247cb-25a3-4334-9215-8e191930f11b)
# Create a Table in angular  in traning-list.component.html and Buind with Api Service 
# Async Pipe to subscribe and unsubscribe  
Angular template, you can use the async pipe to directly display data from an Observable.
async pipe subscribes to the observable and updates the view whenever new data is emitted.

 # Get a  Category By ID-API and Create EDIT Component and Pass route Parameters 
1.  Ng g c edit-training
2. Add the rout for Edit button and add the rout link in Eidt button. When on click edit button we need to move on Edit page
3. In EditeComponent.ts file inject the activated route
4. Create onint function get the routs parms value by pams id
5. Add the subscription and use the ondestry function to end to subscription make it unsubscribe . That is helpful for memory leaks.
6. Then try to use to show the model value in to html.

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/4ec9821e-9d29-49ca-ac63-0bc158526c0d)

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/2806b664-790a-4332-a74e-27748486f4bd)

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/984267d8-88e5-448a-bfd6-1d74aebcc398)

# On Edit  Bustton Show Edit Component and Update Valus into Db 

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/e591cf94-21b5-4702-8184-6736b905f845)

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/cf070ff9-f809-45c4-b06a-1ba79a25d821)

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/22a85eff-2676-4122-9e5a-1b9596e33a3e)


# On Delete  Button delete  row into Db 
daleteTraining(id: string): Observable<training> {
    // Make the POST request with the correct structure
    //return this.http.delete<training>(`${environment.apiBaseUrl}/api/Training/${id}` );
  return this.http.delete<training>(`${environment.apiBaseUrl}/api/Training/${id}`);
}

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/0ab9d1d9-e09e-4ee1-a2cd-7f042779007c)


# Authentication and Authorization UI  Login component UI 
1. Add a login button on NavBar
2. create interface model USER
3. create service class AuthServiceService
4. Create a login component

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/25da5e91-bb77-4d4f-860d-dac78664ca2c)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/0bae534d-5f52-4b53-ac99-bdf661ffa3e4)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/198a675e-19df-45de-9ae5-d05da04ca708)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/b4e8edeb-173c-4798-885e-a4680b30ac77)

# Create Login Component  Changes after login  User name , and Logout button show and hide login button
# Logout Button and hide login button 

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/6aa47586-0bda-498e-9639-5269beb27ed8)

1. create Login component
2. add page in routing.modul.ts
3. set use in aut service
setuser(user :User): void{

    this.$user.next (user);

    localStorage.setItem('user-email',user.Email);
    localStorage.setItem('user-roles',user.roles.join(','));
 
  }
4. onFormSubmit 
 onFormSubmit(): void {
    this.authService.login(this.model)
    .subscribe({
      next: (response) => { 
        // Set User in local storage befor rediect 
        this.authService.setuser({
          Email: response.email,
          roles: response.roles
        });

        // Redirect back to Home
         this.router.navigateByUrl('/');

      }
    });
  }

# after login you will see the logout button because user class have values 
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/b8318dfb-02cb-42fc-9a35-2b9a93db042e)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/5dffc231-6f92-4a4f-8e0c-5a00a7355f8b)


# Secure JWT toke Securely UI
Now we have to store this JWT token so that we can use this JWT token for subsequent requests so that our Angular application can consume the endpoints that are blocked by the API.
back to Visual Studio code and first install this package and back in the application, and I'll open the terminal and in here I will write 
NPM install nginx NXG Cookie Service
Npm install ngx-cookie-service –save
If not work then forcefully add by bellow command 
npm install ngx-cookie-service --save --force
 
# After Login redirect to Home page and set the token in Cookies 

![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/6b90fdba-73e3-41bb-a829-64bd644515cb)
![image](https://github.com/mnoumanuaar32xc/AngularApplicationWithDotNetCoreApi/assets/8413883/b90fac89-4d82-4191-b187-e628ef4e6b28)


# Nav Bar show as per Roles 
go to Navbar component and set roles 
<ng-container *ngIf="user !== undefined && user?.roles?.includes('WRITER')">

 

 



