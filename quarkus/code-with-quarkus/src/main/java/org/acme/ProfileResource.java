package org.acme;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;

import io.smallrye.mutiny.Uni;

@Path("/profile")
public class ProfileResource {

    @GET
    public Uni<Profile> getProfile() {
        Profile profile = new Profile("1", "Shivan", "TW","SELECTED");
        return profile.getProfile();
    }
}
