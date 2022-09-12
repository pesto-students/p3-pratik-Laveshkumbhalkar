

-- INSERT DATA TO CITIES TABLE IN WEARHOUSE DATABASE


INSERT INTO cities VALUES ('Pune','Maharastra',1),('Mumbai','Maharastra',2),('Lucknow','UP',3),('maihar','MP',19);



-- INSERT DATA TO CUSTOMER TABLE IN WEARHOUSE DATABASE


INSERT INTO `customer` VALUES (1,'Mr. Patil','xyz','Pune'),(2,'Mr. Shayam','ahf','Mumbai'),(3,'Mr. Singh','ajkgf','Lucknow'),(19,'Mr. Shayam','abc','maihar');


-- INSERT DATA TO ITEMS TABLE IN WEARHOUSE DATABASE

INSERT INTO items VALUES (1,'it a matchbox',0.50,1.00),(2,'AC',5.20,900.00),(3,'Fan',3.20,400.00);


-- INSERT DATA TO ORDERS TABLE IN WEARHOUSE DATABASE


INSERT INTO `orders` VALUES (1,'2022-08-15'),(2,'2022-07-15'),(3,'2022-07-07');


-- INSERT DATA TO STORE TABLE IN WEARHOUSE DATABASE

INSERT INTO `stores` VALUES (1,'vanu','Pune'),(2,'xyz','Mumbai'),(3,'abc','Lucknow');


-- INSERT DATA TO WEARHOUSE TABLE IN WEARHOUSE DATABASE


INSERT INTO wearhouses VALUES (1,'xyz','Pune','["asa", "sd"]'),(2,'abc','Mumbai','["jg", "sk"]'),(3,'hdrf','Lucknow','["jjgbg", "sk"]');



-- SELECT ON WEARHOUSR DATABSE

SELECT min(weight) FROM items;
SELECT * FROM warehouses WHERE location = "Pune";
SELECT * FROM items JOIN customer ON customer.cno = items.itemno;
SELECT * FROM items JOIN customer ON customer.cno = items.itemno WHERE customer.cname = "Mr. Patil";
SELECT * FROM orders JOIN customer ON customer.cno = orders.ono;

