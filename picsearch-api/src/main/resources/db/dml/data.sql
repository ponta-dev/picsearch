ALTER SEQUENCE PROJECT_ID_SEQ RESTART WITH 1001;
TRUNCATE TABLE project;
INSERT INTO project (project_name, project_summary, create_date, update_date) VALUES ('sample_project', 'sumple_summary', TO_DATE('2023-01-01 00:00:00', 'YYYY-MM-DD hh:dd:ss'),TO_DATE('2023-01-01 00:00:00', 'YYYY-MM-DD hh:dd:ss'));
INSERT INTO project (project_name, project_summary, create_date, update_date) VALUES ('sample_project2', 'sumple_summary2', TO_DATE('2023-01-01 00:00:00', 'YYYY-MM-DD hh:dd:ss'),TO_DATE('2023-01-01 00:00:00', 'YYYY-MM-DD hh:dd:ss'));
