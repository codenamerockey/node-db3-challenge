# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName from products
join categories
on products.categoryId = categories.categoryId

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderID, ShipperName from Orders
join shippers
on orders.shipperId = shippers.shipperId
where orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

Select OrderID, ProductName, Quantity from OrderDetails
join Products
on OrderDetails.ProductID = Products.ProductID
where OrderId = '10251'

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

Select OrderID, CustomerName, Lastname from Orders
join Employees
On Orders.EmployeeID = Employees.EmployeeID
join Customers
on Orders.CustomerID = Customers.CustomerID

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
