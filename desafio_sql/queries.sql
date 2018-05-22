drop table if exists cliente;
create table cliente
(
	id bigserial not null
		constraint cliente_pkey primary key,
	nome varchar(255),
	telefone varchar(20)
);

insert into cliente (id, nome, telefone)
values
(1, 'Anakin Skywalker', '88 94578-4102'),
(2, 'Luke Skywalker', '56 98796-3254'),
(3, 'Leia Organa', '88 32156-9462'),
(4, 'Han Solo', null);

drop table if exists cachorro;
create table cachorro
(
    id bigint NOT NULL,
    nome character varying(255),
    idade integer,
    cor_do_pelo character varying(50),
    porte character varying(50),
    raca character varying(50),
    dono_id bigint,
    CONSTRAINT cachorro_pkey PRIMARY KEY (id),
    CONSTRAINT cachorro_dono_id_fkey FOREIGN KEY (dono_id)
        REFERENCES cliente (id)
);

insert into cachorro (id, nome, idade, cor_do_pelo, porte, raca, dono_id)
values
(1, 'Darth', 10, 'Preto', 'Grande', 'Rottweiler', 1),
(2, 'R2D2', 5, 'Marrom', 'Médio', 'Beagle', 2),
(3, 'Chewie', 15, 'Marrom', 'Grande', 'Komondor', 4),
(4, 'Bacca', 15, 'Marrom', 'Pequeno', 'Shitzu', 4),
(5, 'Ben', 3, 'Preto', 'Médio', null, 4);

drop table if exists servico;
create table servico
(
	id bigint not null 
    constraint servico_pkey primary key,
	tipo varchar(255),
	valor float,
	data date,
	cachorro_id bigint references cachorro (id),
  cliente_id bigint references cliente (id)
);

insert into servico
values
(1, 'Banho', 40.00, '2018-02-23', 1, 1),
(2, 'Banho', 40.00, '2018-02-24', 2, 2),
(3, 'Tosa', 30.00, '2018-02-28', 3, 4),
(4, 'Vacinação', 100.00, '2018-02-28', 3, 4),
(5, 'Banho', 40.00, '2018-01-30', 4, 4),
(6, 'Tosa', 30.00, '2018-01-30', 4, 4),
(7, 'Vacinação', 100.00, '2018-01-30', 4, 4);