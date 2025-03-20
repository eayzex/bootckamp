-- #part 1;

-- CREATE TABLE Customer (
--     id SERIAL PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL
-- );
-- select * from customer;
-- CREATE TABLE Customer_Profile (
--     id SERIAL PRIMARY KEY,
--     isLoggedIn BOOLEAN DEFAULT FALSE,
--     customer_id INT UNIQUE REFERENCES Customer(id) ON DELETE CASCADE
-- );
-- select * from Customer_profile;
-- INSERT INTO Customer (first_name, last_name)
-- VALUES 
--     ('John', 'Doe'),
--     ('Jerome', 'Lalu'),
--     ('Lea', 'Rive');

-- INSERT INTO Customer_Profile (isLoggedIn, customer_id)
-- VALUES 
--     (TRUE, (SELECT id FROM Customer WHERE first_name = 'John')),
--     (FALSE, (SELECT id FROM Customer WHERE first_name = 'Jerome'));
-- SELECT c.first_name 
-- FROM Customer c
-- JOIN Customer_Profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = TRUE;

-- SELECT c.first_name, COALESCE(cp.isLoggedIn, FALSE) AS isLoggedIn
-- FROM Customer c
-- LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id;

-- SELECT COUNT(*) AS not_logged_in_customers
-- FROM Customer c
-- LEFT JOIN Customer_Profile cp ON c.id = cp.customer_id
-- WHERE cp.isLoggedIn = FALSE OR cp.isLoggedIn IS NULL;

-- part2
-- CREATE TABLE Book (
--     book_id SERIAL PRIMARY KEY,
--     title VARCHAR(100) NOT NULL,
--     author VARCHAR(100) NOT NULL
-- );
 -- select * from book ;
 
--  INSERT INTO Book (title, author)
-- VALUES 
--     ('Alice In Wonderland', 'Lewis Carroll'),
--     ('Harry Potter', 'J.K Rowling'),
--     ('To Kill a Mockingbird', 'Harper Lee');

-- CREATE TABLE Student (
--     student_id SERIAL PRIMARY KEY,
--     name VARCHAR(50) NOT NULL UNIQUE,
--     age INT CHECK (age <= 15)
-- );
 -- select * from student;

 -- insert into student(name, age)
 -- values 
 --  ('John', 12),
 --    ('Lera', 11),
 --    ('Patrick', 10),
 --    ('Bob', 14);

-- CREATE TABLE Library (
--     book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
--     borrowed_date DATE,
--     PRIMARY KEY (book_fk_id, student_fk_id)
-- );
-- select * from library;
-- INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
-- VALUES 
--  ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
--  (SELECT student_id FROM Student WHERE name = 'John'),
--  '2022-02-15'),

-- ((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
-- (SELECT student_id FROM Student WHERE name = 'Bob'),
--  '2021-03-03'),

-- ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
-- (SELECT student_id FROM Student WHERE name = 'Lera'),
-- '2021-05-23'),

-- ((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
-- (SELECT student_id FROM Student WHERE name = 'Bob'),
-- '2021-08-12');

-- SELECT s.name AS student_name, b.title AS book_title
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id;

-- SELECT AVG(s.age) AS avg_age
-- FROM Library l
-- JOIN Student s ON l.student_fk_id = s.student_id
-- JOIN Book b ON l.book_fk_id = b.book_id
-- WHERE b.title = 'Alice In Wonderland';

-- delete from student where name ='jhon';
select * from student;






 
 



