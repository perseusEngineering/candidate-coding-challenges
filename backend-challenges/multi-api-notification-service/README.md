### Challenge: Multi API notification service
The objective is to build a set of different standalone services which are able to create a notification by a template and sent the generated notification to an imaginary mail-service.
We assume that the usage of that mail service is paid by request. Therefore, in case of sending newsletters, the service should only be called with a batch of at least 10 messages.
There are 3 services that has to be implemented:

* User-Service is able to return [user-data](users.json) by:
    * user-id
    * all users

* Template-Service is able to:
    * return a specifc template by id
    * return a specifc template by key

* Notification-Service can be triggered in two use-cases:

    * use-case one: assume a new user is created
        * user data is loaded by user-service
        * [welcome template](templateWelcome.txt) is loaded by template service and enriched with user-data
        * once template is enriched with data it is sent directly to imaginary mail-service

    * use-case two: asume newsletter hast to be sent:
        * [newsletter](templateNewsletter.txt) is loaded by template service and enriched with user-data of all subscribed users
        * enriched newsletter messages are sent as a batch of at least 10 to imaginary mail service


#### Constraints
* you provide a straight forward documentation how to build and run the services
* your services are covered with tests
* free choice of following programming languages: Scala, Java, Python

#### Bonus
* all services have to run as standalone applications
* you let your services run within a container based environment (Docker, Kubernetes)
* you provide a documentation of your services API endpoints
* user and template service are connected to database an get data from there instead of provided files