# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?
rails new my_app_name -d postgresql -T


2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - an http verb used to route to the controller action
library - the url to the method in the book controller
:id - the parameter key name that is passed into the url
book - the name of the controller (book_controller.rb) that contains the show method
show - the name of the method inside the book controller


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

(1) A foreign key will have it's own column, so we need to modify the existing database by creating a method to do so. First generate a new migration file in the terminal and be descriptive of the change you'd like to make and the name of the table being changed:

$rails generate migration add_foreign_key_to_model_names

(2) Inside the migration file, add the change you'd like inside the change method. Start with the action followed by the key of the table you're working with, the foreign key name** followed by 'd', and the key of the foreign key which should be integer:

def change 
    add_column :model_names, :foreign_key_id, :integer
end

**the foreign key's name should be the name of the model that includes has_many of the current model_names

(3) Then run the command $rails db:migrate in the terminal. This should add the foreign key column to your schema.


4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$rails generate model Person shirt:string pants:string shoes:string

$rails db:migrate
 

5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

Go to the file of the model: apps > models > person.rb
Inside the Person class, add a validate statement where if the presence of all fields (i.e. :shirt, :pants, :shoes) is true, then accept the new data entry:
validates :shirt, :pants, :shoes, presence:true
If one of the fields is left blank, a message will appear saying the validation failed and the particular value is blank.


6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

The name of the model is in PascalCase and singular. Rails will automatically name the file in snake_case once the model has been created. The name of the database will be snake_case but plural.
