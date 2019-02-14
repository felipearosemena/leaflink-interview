## LeafLink

### Instructions
This file is a markdown document which has some basic technical questions to assess your fit within the LeafLink tech stack. Please provide your solutions to the problems within this markdown file. A recommended markdown editor is [Mou](http://25.io/mou/). Once completed, email your solutions with the filename 'tech-solutions-{{first_name}}-{{last_name}}.md'. Please respond within 48 hours of receiving this document.

**Why LeafLink**

What interests you about LeafLink from an industry standpoint and our proposed tech offerings?

`[response]`

**Linux**

How do I reconnect to an existing screen or tmux session named 'leaflink'?

`[solution]`

How would I "follow" the output of a server log named 'access.log'?

`[solution]`

How would I remove all files in a directory that start with an 'a' and have a '.jpg' extension?

`[solution]`

How would I see all running processes and memory they consume?

`[solution]`

How would I combine the following files: '1.log', '2.log', '3.log' into a single file named 'master.log'?

`[solution]`

**Database**

What is a database index and when is it wise to build an index?

`[solution]`

Table Name: 'pets'

| owner |      pet      | age |
|-------|:-------------:|----:|
| bob   |      dog      |  3  |
| cindy |      cat      |  5  |
| lisa  |      cat      |  7  |
| tony  |      fish     |  1  |


Write a query to return all unique pets in the 'pets' table.

`[solution]`

Write a query to return the oldest cat owner in the 'pets' table.

`[solution]`

Write a query to return the average age of all cats and dogs in the 'pets' table.

`[solution]`

**Python**

What is your favorite python module and why?

`[solution]`

Write python code to return an iterable which contains all unique numbers in the list [1, 3, 4, 5, 2, 2, 1, 4].

`[solution]`

Write python code to find the largest number in [1, 3, 4, 5, 2, 2, 1, 4].

`[solution]`

Write python code to return common elements between l = [1, 'A', 3, 5] and p = [8, 3, 5, 'A'].

`[solution]`

Write python code to sort the following from highest to lowest [1, 3, 4, 5, 2, 2, 1, 4].

`[solution]`


**Django**

Write a formal Django model for a typical 'Blog' entry.

`[solution]`

Using the Django ORM how would you find all owners in the 'pets' table above who have a cat older than 1? Assume the Model name is "Pet".

`[solution]`

Render your query set above using Django template syntax as an HTML Table.

`[solution]`


**API**

Write python code to print all pet owner names and the pet they have for the following 'JSON web service'.
```
http://somesite.com/api/v1/owners

[{
	"owner": {
		"first_name": "tom",
		"last_name": "smith"
	},
	"pet": "dog"
}, {
	"owner": {
		"first_name": "lisa",
		"last_name": "wirth"
	},
	"pet": "bird"
}, {
	"owner": {
		"first_name": "marry",
		"last_name": "ann"
	},
	"pet": "cat"
}, {
	"owner": {
		"first_name": "mike",
		"last_name": "ray"
	},
	"pet": "dog"
}]

```

`[solution]`

**Javascript**

What is the DOM?

`[solution]`

Write a jQuery selector to select all list items that have 'cat' as a class.


```
<ul>
    <li class="dog">dog</li>
    <li class="cat">cat</li>
    <li class="fish">fish</li>
    <li class="cat">cat</li>
</ul>
```


`[solution]`
