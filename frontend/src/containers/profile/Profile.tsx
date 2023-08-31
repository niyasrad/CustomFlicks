import Loader, { Loading } from "../../components/loader/Loader";
import TopBar from "../../components/topbar/TopBar";
import { ProfileData, ProfileMenu, ProfileWrapper, ProfilerWrapper } from "./Profile.styles";

import DEVICE_PHONE from '../../assets/devices/DEVICE_PHONE.svg'
import DEVICE_TABLET from '../../assets/devices/DEVICE_TABLET.svg'
import DEVICE_LAPTOP from '../../assets/devices/DEVICE_LAPTOP.svg'
import DEVICE_TV from '../../assets/devices/DEVICE_TV.svg'
import { useEffect, useState } from "react";
import axios from "axios";

export function Profiler({ metric, value, img }: { metric: string, value: string, img?: string }) {

    return (
        <ProfilerWrapper>
            <p>{metric}</p>
            { img ?
                <img src={img} alt="Device"/>
                :
                <h4>{value}</h4>
            }
        </ProfilerWrapper>
    )
}

interface ProfilerType {
    Age: number,
    Country: string,
    Device: string,
    Gender: string,
    "Join Date": string,
    "Last Payment Date": string,
    "Monthly Revenue": number,
    "Plan Duration": string;
    "Subscription Type": string,
    "User ID": number
}

export default function Profile() {

    const [profileData, setProfileData] = useState<ProfilerType>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios.get(import.meta.env.VITE_BASE_API + '/get_user/1')
        .then((res) => {
            setProfileData(res.data)
            setLoading(false)
        })
        .catch(() => {})
    })

    if (loading || !profileData) {
        return <Loader />
    }

    return (
        <ProfileWrapper>
            <TopBar />
            <ProfileMenu>
                <ProfileData>
                    <Profiler 
                        metric="Plan"
                        value={profileData["Subscription Type"]}
                    />
                    <Profiler 
                        metric="Country"
                        value={profileData["Country"]}
                    />
                    <Profiler 
                        metric="Primary Device"
                        value={profileData["Device"]}
                        img={
                            profileData["Device"] === "Tablet" ? DEVICE_TABLET : 
                            profileData["Device"] === "Laptop" ? DEVICE_LAPTOP :
                            profileData["Device"] === "Smartphone" ? DEVICE_PHONE :
                            DEVICE_TV   
                        }
                    />
                </ProfileData>
                <Loading />
            </ProfileMenu>
        </ProfileWrapper>
    )
}