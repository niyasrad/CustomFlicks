import { Loading } from "../../components/loader/Loader";
import TopBar from "../../components/topbar/TopBar";
import { ProfileData, ProfileMenu, ProfileWrapper, ProfilerWrapper } from "./Profile.styles";

import DEVICE_PHONE from '../../assets/devices/DEVICE_PHONE.svg'
import DEVICE_TABLET from '../../assets/devices/DEVICE_TABLET.svg'
import DEVICE_LAPTOP from '../../assets/devices/DEVICE_LAPTOP.svg'
import DEVICE_TV from '../../assets/devices/DEVICE_TV.svg'

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

const appliedMetric = {
    "Age": 35,
    "Country": "Canada",
    "Device": "Tablet",
    "Gender": "Female",
    "Join Date": "5/9/2021",
    "Last Payment Date": "22-06-23",
    "Monthly Revenue": 15,
    "Plan Duration": "1 Month",
    "Subscription Type": "Premium",
    "User ID": 2
}

export default function Profile() {

    return (
        <ProfileWrapper>
            <TopBar />
            <ProfileMenu>
                <ProfileData>
                    <Profiler 
                        metric="Plan"
                        value={appliedMetric["Subscription Type"]}
                    />
                    <Profiler 
                        metric="Country"
                        value={appliedMetric["Country"]}
                    />
                    <Profiler 
                        metric="Primary Device"
                        value={appliedMetric["Device"]}
                        img={
                            appliedMetric["Device"] === "Tablet" ? DEVICE_TABLET : 
                            appliedMetric["Device"] === "Laptop" ? DEVICE_LAPTOP :
                            appliedMetric["Device"] === "Smartphone" ? DEVICE_PHONE :
                            DEVICE_TV   
                        }
                    />
                </ProfileData>
                <Loading />
            </ProfileMenu>
        </ProfileWrapper>
    )
}