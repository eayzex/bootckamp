-- update film 
-- set language_id = 
-- (select language_id from language where name = 'french'
--  limit 1
--   )
--  where film_id in (1,2,3);
-- select * from language;
-- SELECT
--     conname AS constraint_name,
--     conrelid::regclass AS table_name,
--     a.attname AS column_name,
--     cl.relname AS referenced_table,
--     af.attname AS referenced_column
-- from
--     pg_constraint AS c
--     join pg_attribute AS a ON a.attnum = ANY(c.conkey)
--     join pg_class AS cl ON cl.oid = c.confrelid
--     join pg_attribute AS af ON af.attnum = ANY(c.confkey)
-- where
--     conrelid = 'customer'::regclass;
-- drop table customer_review;
-- SELECT COUNT(*)
-- FROM rental
-- WHERE return_date IS NULL;
-- ###
-- SELECT f.title, r.rental_rate
-- FROM rental r
-- JOIN film f ON r.film_id = f.film_id
-- WHERE r.return_date IS NULL
-- ORDER BY r.rental_rate DESC
-- LIMIT 30;
-- SELECT f.title
-- FROM film f
-- JOIN film_actor fa ON f.film_id = fa.film_id
-- JOIN actor a ON fa.actor_id = a.actor_id
-- WHERE f.description iLIKE '%sumo%' 
--   AND a.first_name = 'Penelope' 
--   AND a.last_name = 'Monroe';
-- select title, description, length, rating 
-- from film 
-- where length < 60 
-- and rating = 'R';
-- SELECT f.title, r.return_date, p.amount
-- FROM rental r
-- JOIN customer c ON r.customer_id = c.customer_id
-- JOIN payment p ON r.rental_id = p.rental_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew'
-- AND c.last_name = 'Mahan'
-- AND p.amount > 4.00
-- AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01';
-- SELECT f.title, f.description, f.replacement_cost
-- FROM rental r
-- JOIN customer c ON r.customer_id = c.customer_id
-- JOIN inventory i ON r.inventory_id = i.inventory_id
-- JOIN film f ON i.film_id = f.film_id
-- WHERE c.first_name = 'Matthew' 
-- AND c.last_name = 'Mahan'
-- AND (LOWER(f.title) LIKE '%boat%' OR LOWER(f.description) LIKE '%boat%')
-- ORDER BY f.replacement_cost DESC
-- LIMIT 1;













