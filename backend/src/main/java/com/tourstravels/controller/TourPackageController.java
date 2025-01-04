package com.tourstravels.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tourstravels.entity.TourPackageEntity;
import com.tourstravels.exception.NotFoundException;
import com.tourstravels.service.PackageService;

@RestController
@CrossOrigin
public class TourPackageController {
	
	@Autowired
	private PackageService packageService;
	
	@GetMapping("/packages")
	public List<TourPackageEntity> getAllPackages(){
		return packageService.getAllPackages();
	}
	
	@GetMapping("/packages/{id}")
	public TourPackageEntity getPackageById(@PathVariable Integer id) throws NotFoundException{
		return packageService.getPackageById(id);
	}
}
