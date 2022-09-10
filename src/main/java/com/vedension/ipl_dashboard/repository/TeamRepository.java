package com.vedension.ipl_dashboard.repository;

import com.vedension.ipl_dashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TeamRepository extends CrudRepository<Team, Long> {
     Team findByTeamName (String teamName);
     List <Team> findAll();
}
