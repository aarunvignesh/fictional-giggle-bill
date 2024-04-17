package org.acme;

public class Profile {
    private String Id;
    private String Name;
    private String CurrentlyWorkingAt;
    private String InterviewStatus;

    public Profile(String id, String name, String currentlyWorkingAt, String interviewStatus){
        this.Id = id;
        this.Name = name;
        this.CurrentlyWorkingAt =  currentlyWorkingAt;
        this.InterviewStatus = interviewStatus;
    }

    public Profile getProfile(){
        return this;
    }
}
