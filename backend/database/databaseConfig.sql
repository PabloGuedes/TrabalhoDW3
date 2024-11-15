CREATE TABLE financeiro (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR(255),
  data DATE,
  valor DECIMAL(10, 2),
  removido BOOLEAN DEFAULT FALSE
);


create table IF NOT EXISTS usuarios (
    usuarioid bigserial constraint pk_usuarios PRIMARY KEY,
    username varchar(10) UNIQUE,
    password text,
    deleted boolean DEFAULT false
);

CREATE EXTENSION if NOT EXISTS pgcrypto;

insert into usuarios values 
    (default, 'admin', crypt('admin', gen_salt('bf'))),
    (default, 'qwe', crypt('qwe', gen_salt('bf')))
ON CONFLICT DO NOTHING;