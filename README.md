# README For The Plonk Exchange - Backend Portion of the Project

For general information and details on the UI portion of this project see
https://github.com/mkutter72/plonk_front_end/blob/master/README.md


## Table Definitions for Database
###Tables for User and User Authentication
These tables, models and routers originate from https://github.com/gaand/project2-api

###Table for Profile

| Column | Type |
| :----- | :--- |
| id | INTEGER |
| first_name | CHARACTER VARYING |
| last_name | CHARACTER VARYING |
| street_address | CHARACTER VARYING |
| city | CHARACTER VARYING |
| state| CHARACTER VARYING |
| zip_code| INTEGER |
| user_name | CHARACTER VARYING, must be unique|
| user_id | Reference to User |
| updated_at | TIMESTAMP WITHOUT TIME ZONE |
| created_at | TIMESTAMP WITHOUT TIME ZONE |

####Validations and Constraints for Profile
* user_name, city and zip_code must be filled in
* user_name must be unique



###Table for Plonk

| Column | Type |
| :----- | :--- |
| id | INTEGER |
| vineyard | CHARACTER VARYING |
| variety | CHARACTER VARYING |
| year | INTEGER |
| number_of_bottles | INTEGER |
| city | CHARACTER VARYING |
| price | DECIMAL |
| will_trade | BOOLEAN |
| user_name | CHARACTER VARYING|
| user_id | Reference to User |
| foreign key | Reference to User |
| updated_at | TIMESTAMP WITHOUT TIME ZONE |
| created_at | TIMESTAMP WITHOUT TIME ZONE |

####Validations and Constraints for
* vineyard, variety, year, number_of_bottles, city, price and will_trade must be filled in


###Table for Message

| Column | Type |
| :----- | :--- |
| id | INTEGER |
| sender_user_name | CHARACTER VARYING |
| receiver_user_name | CHARACTER VARYING |
| plonk_message| CHARACTER VARYING |
| user_id | Reference to User |
| updated_at | TIMESTAMP WITHOUT TIME ZONE |
| created_at | TIMESTAMP WITHOUT TIME ZONE |

####Validations and Constraints for Message
* sender_user_name, receiver_user_name and  plonk_message must be filled in

Note - the phase I implementation approach for messages is that each message
is copied and one is owned by the sender and the other is owned by the receiver. It was implemented this way so each user has it's own message list so that when a user clears their list the other user won't lose the messages.   In a future phase the implementation may change to use a single message which is linked to both users and it is deleted only when each owner has cleared it.


###Associations
* User is the parent of Message.  User has many messages.   A message belongs to a User
* User is the parent of a Plonk Ad.  User has many Plonk Ads.   A Plonk Ad belongs to a User



###ActiveRecord operations (for planning purposes,  may not be a complete list)
* Finding a particular user by user_name  user = User.find_by(user_name: 'mkutter72')
* Getting all messages for user     user.messages
* Creating a new message for user   user.message.create!()
* Clearing the list of messages - want to delete messages as well - how?
* Finding Plonk based on city   plonk_list = Plonk.find_by(city: 'Boston')
* Finding Plonk based on type  plonk_list = Plonk.find_by(type: 'Cabernet')
* Finding a User to send a message to based on Plonk ad    user = plonk.user.username



###Authorization and Authentication
User authorization and authentication is provided by the project2-api repo that Antony Donovan created.

### URL For The Backend Server
https://powerful-earth-3914.herokuapp.com/
