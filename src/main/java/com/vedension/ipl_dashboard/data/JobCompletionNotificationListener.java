package com.vedension.ipl_dashboard.data;

import com.vedension.ipl_dashboard.model.Team;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.batch.core.BatchStatus;
import org.springframework.batch.core.JobExecution;
import org.springframework.batch.core.listener.JobExecutionListenerSupport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.Map;

@Component
public class JobCompletionNotificationListener extends JobExecutionListenerSupport {

    private static final Logger log = LoggerFactory.getLogger(JobCompletionNotificationListener.class);

    private final EntityManager entityManager;

    @Autowired
    public JobCompletionNotificationListener(EntityManager entityManager) {
        this.entityManager = entityManager;
    }

    @Override
    @Transactional
    public void afterJob(JobExecution jobExecution) {
        if(jobExecution.getStatus() == BatchStatus.COMPLETED) {
            log.info("!!! JOB FINISHED! Time to verify the results");
            Map<String, Team> teamData =  new HashMap<>();
            entityManager.createQuery("select m.team1, count(*) from Match m group by m.team1", Object[].class)
                    .getResultList()
                    .stream()
                    .map(element -> new Team((String) element[0], (long) element[1]))
                    .forEach(team -> teamData.put(team.getTeamName(), team));

            entityManager.createQuery("select  m.team2, count(*) from Match m group by m.team2", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(element -> {
                        Team team = teamData.get((String) element[0]);
                        team.setTotalMatches(team.getTotalMatches() + (long) element[1]);
                    });

            entityManager.createQuery("select  m.matchWinner, count(*) from Match m group by m.matchWinner", Object[].class)
                    .getResultList()
                    .stream()
                    .forEach(element -> {
                        Team team = teamData.get((String) element[0]);
                        if (team != null) team.setTotalWins((long) element[1]);
                    });

            teamData.values().forEach(team -> entityManager.persist(team));
            teamData.values().forEach(team -> System.out.println(team.getTeamName() + " " + team.getTotalMatches() + " " + team.getTotalWins()));
        }
    }
}