import Loader, { Loading } from "../../components/loader/Loader";
import TopBar from "../../components/topbar/TopBar";
import { ProfileData, ProfileMenu, ProfileWrapper, ProfilerWrapper } from "./Profile.styles";

import DEVICE_PHONE from '../../assets/devices/DEVICE_PHONE.svg'
import DEVICE_TABLET from '../../assets/devices/DEVICE_TABLET.svg'
import DEVICE_LAPTOP from '../../assets/devices/DEVICE_LAPTOP.svg'
import DEVICE_TV from '../../assets/devices/DEVICE_TV.svg'
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../contexts/Global.context";

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

export interface ProfilerType {
    Age: number,
    Country: string,
    Device: string,
    Gender: string,
    Label: string,
    "Join Date": string,
    "Last Payment Date": string,
    "Monthly Revenue": number,
    "Plan Duration": string;
    "Subscription Type": string,
    "User ID": number
}

export default function Profile() {

    const [loading, setLoading] = useState<boolean>(true)

    const { isLoggedIn, profile } = useGlobalContext()

    useEffect(() => {
        if (profile) {
            const timeout = setTimeout(() => {
                setLoading(false)
            }, 1500)
    
            return () => {
                clearTimeout(timeout)
            }
        }
    }, [profile])


    if (loading || !profile || !isLoggedIn) {
        return <Loader />
    }

    return (
        <ProfileWrapper>
            <TopBar />
            <ProfileMenu>
                <ProfileData>
                    <Profiler 
                        metric="Plan"
                        value={profile["Subscription Type"]}
                    />
                    <Profiler 
                        metric="Country"
                        value={profile["Country"]}
                    />
                    <Profiler 
                        metric="Primary Device"
                        value={profile["Device"]}
                        img={
                            profile["Device"] === "Tablet" ? DEVICE_TABLET : 
                            profile["Device"] === "Laptop" ? DEVICE_LAPTOP :
                            profile["Device"] === "Smartphone" ? DEVICE_PHONE :
                            DEVICE_TV   
                        }
                    />
                </ProfileData>
                <Loading />
            </ProfileMenu>
        </ProfileWrapper>
    )
}