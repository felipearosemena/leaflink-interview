# B2B E-Commerce Web Application

## Overview

This project is meant to examine your ability to structure, organize,
and write a small web application. This project is meant to be at most a three hour
exercise. If you find yourself going over the time limit, please stop and submit
what you have.

## Deliverable

At a minimum, this code should be executable on a \*nix based computer. 

You should aim to deliver:
* A link to a Git repository containing your work
* A README file explaining:
  * How to startup and interact with you web application
  * A "post-mortem" explaining some of your thoughts on your work and project
    * What did you do well?
    * What did you do poorly?
    * Given more time what would you work on next?
    * How would you implement authentication to ensure a Company could only
    access its data?
    * How would you deploy this application?

## Project

Assume you work for a B2B E-Commerce company. This company's product is a
marketplace with a few core data models and relationships.

*Data Models*

* Company - The buyers and sellers on the marketplace
  * name - The name of the Company
* Product - An item a Company sells, and another buys
  * name - The name of the Product
  * price - The cost of the Product to purchase on the marketplace
  * quantity - The number of a Product available for purchase
* Order - Made when some Company agrees to buy some amount of Product(s) from
another company
  * date_created - The date and time an order was placed
  * buyer - The Company buying the Products
  * seller - The Company selling the Products

*Basic Relationships*

* A Company is a seller or "owner" of a product
* An Order is between two Companies, a buyer and a seller
* An Order contains one or more Products, each with a quantity ordered
* A Product's price is recorded at creation of an Order, this price is the price
of the Product at the at of purchase

Given the above information, your task is to build a web application with a
JSON RESTful API interface.

*At a minimum the application should:*

* Provide resource endpoints for the above three data models
  * Required: GET and LIST methods
* Contain default data to populate data models and present via the API

*Optional:*

* Other CRUD operations available via the API
* unit tests and/or coverage metrics

*Don't worry about:*

* Authentication or user management
* Any HTML or visual UI

*Some Notes*

The point of this exercise is to measure your ability to structure and design
basic elements of a web application. This means you should feel free to use
whichever 3rd party packages, development tools, or concepts you see appropriate.
It is up to you to decide if/what web framework to use, which way to persist
data, and how you'll implement your business logic.

Don't get to wrapped up in the details of the business logic or domain. Add
additional relationships, data models, attributes, etc as you see fit to solve
the problem.

## Judgment Criteria

We are looking for code quality, documentation, and layout first and foremost.
Specifically, how well is code laid out? Does the code separate concerns in a
sensical manner? Is code consistent? Are things named sensibly? Are you
following best practices and language guidelines?

Secondary to the above: How did you interpret and implement the given
conditions? How did you handle the model relationships? How is data persisted
(DB, textfile, JSON, etc.)?

Third: Did you go above and beyond the ask of the minimum requirements? Did you
implement unit testing? What does the git commit history look like?


