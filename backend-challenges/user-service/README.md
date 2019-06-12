### Challenge: User service
The objective is to implement a rest-service which is able to:

* create new user with contact data
* return user by id
* return user by name
* add additional mail/phone data
* update existing mail/phone data
* delete user

The data objects are defined as followed:
```
User:
    id: <int>
    lastName: <string>
    firstName: <string>
    emails: List<Email>
    phoneNumbers: List<PhoneNumber>

Email:
    id: <int>
    mail: <string>
    
PhoneNumber:
    id: <int>
    number: <string>
```

#### Constraints
* you provide a straight forward documentation how to build and run the service
* submitted data is stored in database (free choice which one)
* free choice of following programming languages: Scala, Java, Python


#### Bonus
* you let your service run within a container based environment (Docker, Kubernetes)
* you provide a documentation of your services API endpoints
* your service is covered with tests