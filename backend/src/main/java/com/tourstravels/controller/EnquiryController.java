package com.tourstravels.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tourstravels.entity.Enquiry;
import com.tourstravels.exception.NotFoundException;
import com.tourstravels.service.EnquiryService;

@RestController
@CrossOrigin
public class EnquiryController {

	@Autowired
	private EnquiryService enquiryService;
	
	
	@GetMapping("/enquiries")
	public List<Enquiry> getAllEnquiries(){
		return enquiryService.getAllEnquiries();
	}
	
	@GetMapping("/enquiries/{id}")
	public Enquiry getEnquiryById(@PathVariable Integer id) throws NotFoundException {
		return enquiryService.getEnquiryById(id);
	}
	
	@PostMapping("/enquiries/add")
	public Enquiry addEnquiry(@RequestBody Enquiry enquiry) {
		return enquiryService.addEnquiry(enquiry);
	}
}
