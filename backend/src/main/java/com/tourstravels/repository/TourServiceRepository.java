package com.tourstravels.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tourstravels.entity.TourServiceEntity;

public interface TourServiceRepository extends JpaRepository<TourServiceEntity, Integer> {

}
