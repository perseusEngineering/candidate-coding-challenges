### Challenge: User service
The objective of this exercise is to implement a rest-service which is able to:

- Create new user with contact data
- Return user by id
- Return user by name
- Add additional mail/phone data
- Update existing mail/phone data
- Delete user

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
- You provide straightforward documentation how to build and run the service
- Submitted data is stored in database (free choice which one)
- You can only use the following programming languages: Scala, Java, Python


#### Bonus
- You let your service run within a container based environment (Docker, Kubernetes)
- You provide documentation of your services API endpoints
- Your service is covered with tests