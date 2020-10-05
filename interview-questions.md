# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: MVC stands for Model-Views-Controller. The model is the back-end which is the database. The views is what the user sees. It is all the front-end so Javascript, HTML, and CSS. The controller allows communication between the model and the views. All together, the MVC makes a fullstack application.

  Researched answer: An architectural pattern that divides an application into 3 parts: model, view, and controller. Each component handles a specific asepct of the application. The model is all the data-related logic. It doesn't know about views and controllers. When a model changes, it will notify the controller. The view is the user interface logic of the application. It is made with HTML, CSS, JavaScript, and templates. It has elements that the final user will interact with such as text boxes and dropdown menus. Those interactions cannot be updated without the controller. The controller is the interface between the model and the views. It processes the logic and incoming requests to render a final output. 



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: If an application has CRUD, it has the ability to modify content and change the functionality of the app. CRUD stands for Create, Read, Update, and Delete.

  Researched answer: CRUD are the four basic functions of persistant storage. It is defined as create, read/retrieve, update, and delete/destroy. Persistant storage is any data storage that retains power after a device has been powered off such as a hard disk or solid-state-drive. All databases need to be stored in persistant storage. CRUD indentifies all the major function that are inherit to relational databases and the applications that modify the data. CRUD is data-oriented and the standardized use of HTTP verbs.



3. What is a migration? Why would you use one?

  Your answer: It is a file that includes a change method. A migration is used when a change needs to be made to the schema such as adding or deleting a column or renaming a column. The migrations allow us to make those changes without having to modify the schema itself.

  Researched answer: Migrations are a feature of Active Records that allow the user to change the database schema over time. Instead of making changes to the schema in pure SQL, migrations allow the user to implement Ruby code to describe the changes to the database tables. Each migration can be seen as a new, updated version of the database. Migrations can add or remove tables, columns, or entires. They also allow the user to keep track of changes as each new migration has a date and time stamp of when the file was created. Developers can then go back to see previous changes if needed.



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: A person can purchase several computers. To buy a computer they probably need to have at least their name and contact information. A computer model could hold all the specs, price, and model of the computer. Basically, a person has many computers and a computer belongs to a person.

  Researched answer: A person has a name, phone number, home address, email address, and credit card information. If this person were buying a computer, it would have the model of the computer, price, the operating system, the processor, internal memory size, RAM, type of memory drive (e.g. HDD or SSD), weight, and installed bloatware. The person can have many computers and the computers belong to the person. The Computer model will hold the foreign key Person. 



5. What is object-relational mapping?

  Your answer: ORM is the ability to convert code in a programming language like Ruby into SQL queries.

  Researched answer: It is a programming technique for converting data between incompatible type systems using object-oriented programming languages like Ruby. Object-oreiented non-scalar data is not directly compatible with how data is stored in most databases, which store scalar values, so it is important to convert the data between two type systems. The existance of an ORM library, allows for a translation of the object data into SQL. This can help speed up development and avoid having to switch between two languages when doing CRUD actions.



6. What is a gem?

  Your answer: Snippets of Ruby code that is commonly used in development.

  Researched answer: Ruby libraries are released in the form of a gem. It is a Ruby packaging system designed to help with the creation, sharing, and installation of libraries. These libraries are pre-written code that developers can take advantage of. It contains specific pieces of functionality as well as any files and assets related to that functionality.



7. Why is it important to have validations in your application?

  Your answer: Validations are necessary to ensure that all fields meet the requirements necessary to move forward in the application. This can be a check to see if the user has left a field blank or if the user's input lacks a value that is required to keep the user's information safe and difficult to predict.

  Researched answer: Validations ensure that only valid data is saved into the working database. The developer wants to avoid bad or wrong data as much as possible. Active Record validations can help prevent wrong data being saved. It is an extra layer of security for any and all form fields within a Ruby on Rails application. There are different types of validations: database contraints, client-side validations, model level, and controller level. Model level is the best way because the database is agnostic (so very flexible) and cannot be bypassed by end users, as well as being convenient to test and maintain.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes - REST stands for representational state transfer and provides a way of mapping HTTP verbs and CRUD actions. It is a way of following routes by using HTTP requests to send and receive actions from the user.
- JSON - Stands for JavaScript Object Notation, which is a lightweight data-interchange format. It is a syntax for serializing objects, arrays, numbers, strings, booleans, and null. It is often used for sending data in web apps from server to client so it can be displayed on a webpage.
- API - Stands fro Application Programming Interface. A computing interface that allows two applications to communicate with each other. It defines the rules and defintions for building and integrating application software.
- Endpoints - A remote computing device that communicates back and forth with a network to which it is connected. It is the point where the API connects to the software program or server.
- Strong params - Provides and interface for protecting attributes from being used in Active Model mass assignments until allowed. A good security practice to help prevent accidentally allowing users to update sensitive model attributes.
