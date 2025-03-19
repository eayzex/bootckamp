-- select * from language;
-- select f.title, f.description, l.name as language_name
-- from film f 
-- join language l on l.language_id = f.language_id;
-- select f.title, f.description, l.name as language_name 
-- from language l 
-- left join film f on l.language_id =f.language_id;
-- create table new_film(
-- id INT primary key,
-- name varchar(50) not null
-- );
-- select * from new_film
-- create table customer_review(
-- review_id serial primary key, 
-- film_id INT,
-- language_id INT,
-- title varchar(200),
-- score INT check (score between 1 and 10),
-- review_text TEXT,
-- last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- constraint fk_film_id foreign key (film_id) references new_film(id) on delete cascade,
-- constraint fk_language_id foreign key (language_id) references language(language_id)
-- );
-- select * from customer_review;
-- insert into language (language_id, name)
-- values (1, 'english'), (2, 'french');
-- INSERT INTO customer_review (film_id, language_id, title, score, review_text)
-- VALUES
--     (1, 1, 'Great Movie', 8, 'This movie was really enjoyable and well acted.'),
--     (2, 2, 'Très bon film', 9, 'Un film captivant avec une excellente histoire.');
-- select * from customer_review;
-- DELETE FROM customer_review
-- WHERE review_id IN (1, 2, 3, 4);
-- DELETE FROM customer_review WHERE film_id = 1;
-- DELETE FROM new_film WHERE id = 1;
-- DELETE FROM customer_review WHERE film_id = 2;
-- DELETE FROM new_film WHERE id = 2;





