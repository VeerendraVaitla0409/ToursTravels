package com.tourstravels.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tourstravels.entity.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Integer> {

}
