-- Database: wearhouse

-- DROP DATABASE IF EXISTS wearhouse;

CREATE DATABASE wearhouse
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


-- Table: public.cities

-- DROP TABLE IF EXISTS public.cities;

CREATE TABLE IF NOT EXISTS public.cities
(
    city character(20) COLLATE pg_catalog."default" DEFAULT NULL::bpchar,
    state character(20) COLLATE pg_catalog."default" DEFAULT NULL::bpchar,
    c_id integer NOT NULL,
    CONSTRAINT cities_pkey PRIMARY KEY (c_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cities
    OWNER to postgres;


-- Table: public.wearhouses

-- DROP TABLE IF EXISTS public.wearhouses;

CREATE TABLE IF NOT EXISTS public.wearhouses
(
    wid integer NOT NULL,
    wname character varying(30) COLLATE pg_catalog."default",
    location character varying(30) COLLATE pg_catalog."default",
    extra_content json,
    c_id integer,
    s_id integer,
    CONSTRAINT wearhouses_pkey PRIMARY KEY (wid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.wearhouses
    OWNER to postgres;


-- Table: public.stores

-- DROP TABLE IF EXISTS public.stores;

CREATE TABLE IF NOT EXISTS public.stores
(
    sid integer NOT NULL,
    store_name character varying(20) COLLATE pg_catalog."default",
    location_city character varying(20) COLLATE pg_catalog."default",
    c_id integer,
    CONSTRAINT stores_pkey PRIMARY KEY (sid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.stores
    OWNER to postgres;



    -- Table: public.customer

-- DROP TABLE IF EXISTS public.customer;

CREATE TABLE IF NOT EXISTS public.customer
(
    cno integer NOT NULL,
    cname character varying(50) COLLATE pg_catalog."default",
    addr character varying(50) COLLATE pg_catalog."default",
    cu_city character varying(20) COLLATE pg_catalog."default",
    CONSTRAINT customer_pkey PRIMARY KEY (cno)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.customer
    OWNER to postgres;


-- Table: public.orders

-- DROP TABLE IF EXISTS public.orders;

CREATE TABLE IF NOT EXISTS public.orders
(
    ono integer NOT NULL,
    odate date,
    cno integer,
    CONSTRAINT orders_pkey PRIMARY KEY (ono)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.orders
    OWNER to postgres;


-- Table: public.items

-- DROP TABLE IF EXISTS public.items;

CREATE TABLE IF NOT EXISTS public.items
(
    itemno integer NOT NULL,
    description text COLLATE pg_catalog."default",
    weight numeric(5,2),
    cost numeric(5,2),
    CONSTRAINT items_pkey PRIMARY KEY (itemno)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.items
    OWNER to postgres;


    

-- Table: public.quantity

-- DROP TABLE IF EXISTS public.quantity;

CREATE TABLE IF NOT EXISTS public.quantity
(
    qid integer NOT NULL,
    itemno integer,
    CONSTRAINT quantity_pkey PRIMARY KEY (qid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.quantity
    OWNER to postgres;

