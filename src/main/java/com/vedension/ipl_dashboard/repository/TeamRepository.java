package com.vedension.ipl_dashboard.repository;

import com.vedension.ipl_dashboard.model.Team;
import org.springframework.data.repository.CrudRepository;

public interface TeamRepository extends CrudRepository<Team, Long> {
     Team findByTeamName (String teamName);
}
