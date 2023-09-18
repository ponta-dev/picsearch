CREATE SEQUENCE IF NOT EXISTS PROJECT_ID_SEQ
	INCREMENT BY 1
	MAXVALUE 999999
	START WITH 1001
	NO CYCLE;

CREATE TABLE IF NOT EXISTS PROJECT (
	project_id integer DEFAULT nextval('project_id_seq') PRIMARY KEY,
	project_name varchar(200) NOT NULL,
	project_summary varchar(1000),
	create_date timestamp without time zone NOT NULL,
	update_date timestamp without time zone NOT NULL,
	logical_delete_flg boolean DEFAULT false
);