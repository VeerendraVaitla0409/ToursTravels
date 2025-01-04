package com.tourstravels.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tourstravels.entity.Enquiry;
import com.tourstravels.exception.NotFoundException;
import com.tourstravels.repository.EnquiryRepository;

@Service
public class EnquiryService {

	@Autowired
	private EnquiryRepository enquiryRepository;

	public List<Enquiry> getAllEnquiries() {
		return enquiryRepository.findAll();
	}

	public Enquiry getEnquiryById(Integer id) throws NotFoundException {

		Optional<Enquiry> enquiryOptional = enquiryRepository.findById(id);
		if (enquiryOptional.isEmpty()) {
			throw new NotFoundException("Enquiry with Id " + id + " Not Found");
		}
		return enquiryOptional.get();
	}

	public Enquiry addEnquiry(Enquiry enquiry) {
		return enquiryRepository.save(enquiry);
	}

}
