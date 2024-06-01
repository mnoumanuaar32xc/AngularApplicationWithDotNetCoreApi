# Angular Application With Dot Net Core Api

Before Start Angular please go through bellow api , this API we will use in Angular Application.
# https://github.com/mnoumanuaar32xc/AuthCoreApi

# Prerequisites  
At least knowledge about (.NET , .NET Core , Asp. Net , MVC, Web Forms , SQL Server, Bootstrap CSS, JS, Java queries , EF etc).

# We Will try 
1. Installation for Angular application development (for Windows)
2. Structure of Angular
3. Routoing
4. How CSS , JS , HTML workis in Angular
5. Create Nav Bar
6. Perform Curad Operation Create Traning, List of Traning, Delete Traning, Update Traning.
7. Login Page then Logout
8. Access on operation by using Authorization
9. State Management| Local and Cookies Statemanagement.
10. JWT toekn access etc

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
 

