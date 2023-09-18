package com.github.pontadev.picsearch.common.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		http
			.csrf(csfr -> csfr
					.disable())
			.headers(header -> header
					.frameOptions(option -> option
							.sameOrigin()))
			.authorizeHttpRequests(authorize -> authorize
					.anyRequest().permitAll());
		
		return http.build();
	}
}
