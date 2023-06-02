package com.ISCES.service;


import com.ISCES.entities.Candidate;
import com.ISCES.repository.CandidateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class CandidateService {
    CandidateRepo candidateRepo;

    @Autowired
    public CandidateService(CandidateRepo candidateRepo) {
        this.candidateRepo = candidateRepo;
    }

    public List<Candidate> getAllCandidates(){
        return candidateRepo.findAll();
    }

    @Transactional
    public Candidate findById(Long candidateId){
        return candidateRepo.findByCandidateId(candidateId);
    }



    @Transactional
    public Candidate save(Candidate candidate){
        return candidateRepo.save(candidate);
    }

    @Transactional
        public void getVote(Candidate  candidate){
        candidate.setVotes(candidate.getVotes() + 1);
        candidateRepo.save(candidate);
    }


    @Transactional
    public List<Candidate> findCandidateByDepartmentId(Long departmentId){
        return candidateRepo.findByStudent_DepartmentId(departmentId);
    }

    @Transactional
    public List<Candidate> findByDepartmentIdAndStatus(Long departmentId, Boolean status){
        return candidateRepo.findByStudent_DepartmentIdAndStatus(departmentId,status);
    }
}
