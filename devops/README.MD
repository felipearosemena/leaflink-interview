# Dev Ops Interview Flow

## DevOps Phone Screen

## Take Home

### Applicant must complete Question 1 + one of the other 4, answers must be at least 250 words

* Given a  webapp (attached as zip) that needs to connect to a Postgres DB, create a docker-compose or other orchestration file that will allow the webapp to talk to these services in a portable env. If you choose not to use an orchestration file, explain how you would otherwise connect them in a portable way, why this is a superior approach, and how you would scale it

* What is an open source project of yours or that you contribute significantly to that you are proud of? Why did you build it / contribute to it? What are some challenges building and maintaining the project? How do you handle PRs, issues, and other collaborative tasks? 

* How have you improved a system you've worked on? What are some specifics on how you improved it and what are some takeaways that have guided you in future efforts?

* Have you ever found and/or fixed a serious vulnerability in a production system, whether your own or someone else's? How did you find / fix it? What is your overall philosophy on threat mitigation? 

* If you could redesign any piece of software you use, what would you change? How do you get around these pain points currently? What tooling do you want to se in the DevOps space that does not exist? How would you implement it, practically? 

## DevOps in-person interview 

### Engineering (Jeff, Aaron, Chris)

* "Simple" problem about log parsing: given this log of requests made to our server, we need to find and count up all instances of a certain API request. At first, just a simple awk/sed/grep solution, but then introduce considerations like making sure we don't include requests from own servers, requests from bots, etc

* This can be a whiteboarding algo thing that turns into an extended discussion (where do the logs come from, can we do analytics as the logs come in rather than post-hoc, etc)

* Discussion about previous roles, how they worked in a team 

### HR / Biz (Amy, Suze, Claire) 

* Culture fit, chillness, focus on instances where they took charge and had to learn a lot of new stuff at once

### Michael / Zach (we can interview together and then I can end with a shorter 1-on-1)
* Discuss answers to take home questions, what they want out of the role, where they want to take their career / skills
* Discuss past roles, what they liked, what they didn't
* General brain picking about tech, get a feel for how they operate

### Talk with Ryan / follow up with Michael or Zach

### Final decision 
* Yes
* No
* There are no other choices
