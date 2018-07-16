
package br.com.conductor.heimdall.core.repository;

/*-
 * =========================LICENSE_START==================================
 * heimdall-core
 * ========================================================================
 * Copyright (C) 2018 Conductor Tecnologia SA
 * ========================================================================
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ==========================LICENSE_END===================================
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.conductor.heimdall.core.entity.Environment;

/**
 * Provides methods to access a {@link Environment}.
 *
 * @author Filipe Germano
 *
 */
public interface EnvironmentRepository extends JpaRepository<Environment, Long> {
     
	 /**
	  * Finds a Environment by its inbound URL.
	  * 
	  * @param  inboundURL		The inbound URL
	  * @return					The Environment found
	  */
     Environment findByInboundURL(String inboundURL);
     
     /**
      * Check if an environment has apis attached
      * 
      * @param id
      * @return
      */
     @Query(value = "select count(0) from apis_environments where environment_id = :id", nativeQuery = true)
     Integer findApisWithEnvironment(@Param("id") Long id);

}
