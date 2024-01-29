-- 1 - Todos os clientes do estado de MG
select customer."name" as name_client
from customer
  join customer_address on customer.id = customer_address.customer_id
where customer_address.state = 'MG';
-- 2 - Todos os clientes do sexo masculino que
-- moram na cidade de São Paulo (capital)
select customer."name" as name_client
from customer
  join customer_address on customer.id = customer_address.customer_id
where customer_address.city = 'São Paulo'
  and customer.gender = 'male';
-- 3 - Todas as compras acima de R $3.000,00 em ordem crescente;
