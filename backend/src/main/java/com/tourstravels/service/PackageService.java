package com.tourstravels.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tourstravels.entity.TourPackageEntity;
import com.tourstravels.exception.NotFoundException;
import com.tourstravels.repository.TourPackageRepository;

@Service
public class PackageService {

	@Autowired
	TourPackageRepository packageRepository;

	public List<TourPackageEntity> getAllPackages() {
		return packageRepository.findAll();
	}

	public TourPackageEntity getPackageById(Integer id) throws NotFoundException {
		Optional<TourPackageEntity> packageById = packageRepository.findById(id);
		if(packageById.isEmpty()) {
			throw new NotFoundException("Package with Id "+ id + " is not Found");
		}
		return packageById.get();
	}
	
	
}
