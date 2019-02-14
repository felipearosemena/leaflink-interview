# B2B E-Commerce API Service


This project is meant to examine your ability to structure, organize,
and write a small API service.

## Project

LeafLink is a B2B E-Commerce company. This company's product is a
marketplace with a few core data models and relationships.

*Core Data Models*

* Company - The buyers and sellers on the marketplace
* Product - An item a Company sells, and another buys
* Order - Made when some Company agrees to buy some amount of Product(s) from
another company

*Key Relationships*

* A Company can be either a "buyer" or "seller".
* An Order is between two companies, a buyer and a seller.
* An Order contains one or more Products, each "line item" has a quantity and a price.
* A Product is "sold" by one "seller" Company and can be in many orders.

Given the above information, your task is to build and deliver a web application with a
a public HTTP API interface to the core models/resources above, with the following specifications and requirements.

- [ ] A new git repo with your project's code base. We are looking to see how organized your repo is and does it contain typical project folders and a thoughtful structure.
- [ ] A runnable python project that exposes an HTTP API interface
- [ ] Data modeling
- [ ] An HTTP API that offers the following
  - [ ] Documentation and clean url routing
  - [ ] Ability to LIST Company, Product, or Order objects
  - [ ] Ability to GET a specific Company, Product, or Order object
  - [ ] Ability to CREATE a Product object
- [ ] Reasonable test coverage

## Deliverables

- [ ] A link to a Git repository containing your work
- [ ]  A README file explaining which details how to run and interact with the app and the API it provides


## Onsite Review
When you join the LeafLink onsite you will have time to explain certain decisions, demo the API, and talk about how you'd improve if you had more time to expand capabilities. We look forward to doing a code review with you to understand how you think, we think, and how we communicate as potential teammates.

## Bonus

We welcome any PRs against this README you feel would make this project clearer