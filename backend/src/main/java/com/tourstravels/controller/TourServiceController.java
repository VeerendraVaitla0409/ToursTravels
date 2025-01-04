package com.tourstravels.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.tourstravels.entity.TourServiceEntity;
import com.tourstravels.exception.NotFoundException;
import com.tourstravels.service.TourService;

@RestController
@CrossOrigin
public class TourServiceController {

	@Autowired
	private TourService tourService;
	
	@GetMapping("/services")
	public List<TourServiceEntity> getAllServices(){
		return tourService.getAllServices();
	}
	
	@GetMapping("/services/{id}")
	public TourServiceEntity getServiceById(@PathVariable Integer id) throws NotFoundException{
		return tourService.getServiceById(id);
	}
}
