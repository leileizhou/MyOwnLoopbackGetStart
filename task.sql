use task;

create table tasks(
   task_id INT NOT NULL AUTO_INCREMENT,
   task_name VARCHAR(40) NOT NULL,
   task_desc VARCHAR(100) NOT NULL,
   task_date datetime,
   task_operator VARCHAR(40) NOT NULL,
   PRIMARY KEY ( task_id )
);

SELECT * FROM task.tasks;

/*自增长的column可以不设置值*/
insert into task.tasks (task_name, task_desc, task_date, task_operator) values("朝会", "参加朝会", "2017-09-20 08:40:00", "磊磊");

insert into task.tasks (task_name, task_desc, task_date, task_operator) values("语音", "UI开发", "2017-09-21 09:00:00", "玉龙");