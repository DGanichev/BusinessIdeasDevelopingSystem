import React from 'react';
import {SkillList} from "../skill";

const UserProfileCard = ({data}) => (
    <div className="user-profile">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <h4>{data.username}</h4>
            </div>
            <div className="col-md-4">
                <h4>{data.email}</h4>
            </div>
            <div className="col-md-4">
                <a href={`/user/edit/`} className="white-text btn btn-primary btn-block">
                    Edit profile
                </a>
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-md-12">
                {data.firstName && data.lastName ? `${data.firstName} ${data.lastName}` : `No info about name provided`}
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-md-12">
                {data.mobileNum ? data.mobileNum : "No mobile number provided."}
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-md-12">
                {data.description ? data.description : "No description provided."}
            </div>
        </div>
        <hr/>
        <div className="row">
            <div className="col-md-12">
                <div className="list-group">
                    {
                        data.skills && data.skills.map(p => (
                            <div key={p.name} className="list-group-item">{p.name} <span
                                className="badge badge-primary">{p.value}</span></div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
);

export default UserProfileCard;
