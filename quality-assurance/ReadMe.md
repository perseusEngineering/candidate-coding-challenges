#### Challenge: Have I've been pwned
The objective is to implement an automated test suit that covers the following two checks:

##### First scenario:
* open https://haveibeenpwned.com/ with in a browser
* type in email address: ``test@something.com``
* check that website shows pwned-warning ![see image](pwned-message.png)

##### Second scenario:
* open https://haveibeenpwned.com/ with in a browser
* type in email address: ``qwerty@somehting.com``
* check that website shows no pwned-warning ![see image](not-pwned-message.png)
* HINT: in case pwnd warning is shown you might need to use another fictional email adress which hasn't been pwned

#### Constraints:
* you provide an executable test suite (eg. via command line, selenium)
* you provide a clear documentation how to run the test suite
* you provide the code and/or configurations of your suite 

#### Extra/Bonus:
* you provide a Dockerfile to run the tests
* your testsuite can check a list of emails in a loop and outputs a report which emails are pwned and which not
