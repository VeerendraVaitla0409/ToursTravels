package com.tourstravels.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tourstravels.entity.TourPackageEntity;

public interface TourPackageRepository extends JpaRepository<TourPackageEntity, Integer> {

}
