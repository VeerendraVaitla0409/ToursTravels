package com.tourstravels.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tourstravels.entity.TourServiceEntity;
import com.tourstravels.exception.NotFoundException;
import com.tourstravels.repository.TourServiceRepository;

@Service
public class TourService {

	@Autowired
	TourServiceRepository tourServiceRepository;

	public List<TourServiceEntity> getAllServices() {
		return tourServiceRepository.findAll();
	}

	public TourServiceEntity getServiceById(Integer id) throws NotFoundException {
		Optional<TourServiceEntity> serviceById = tourServiceRepository.findById(id);
		if(serviceById.isEmpty()) {
			throw new NotFoundException("Service with Id "+ id + " is not Found");
		}
		return serviceById.get();
	}

}
