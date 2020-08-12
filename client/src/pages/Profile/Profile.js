import React from 'react'
import ProfileCard from "../../components/ProfileCard"
import ECard from '../../components/ECard/ECard'
import Container from '../../components/Container'

function Profile(){
    return (
        <div>
            <Container>
          <ProfileCard />
          <ECard />
          </Container>
        </div>
    )
}

export default Profile;
