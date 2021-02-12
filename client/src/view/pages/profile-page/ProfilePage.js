import React from 'react';
import './ProfilePage.scss'
import ProfileImageContainer from '../../../components/Profile_Image_Container/ProfileImageContainer'

const ProfilePage = () => {
    return (
        <div className="profile-card-container">
            <div className="container profile-card">
                <div className="profile-image">
                    <ProfileImageContainer
                        firstname="Rishabh"
                        lastName="Mishra"
                        className="mt-5"
                        // url={'https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70'}
                    />
                    <div className="profile-small-details">
                        Rishabh Mishra
                    </div>
                </div>
                <div className="profile-data">
                    <div className="container profile-data-card">
                        Right
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;



