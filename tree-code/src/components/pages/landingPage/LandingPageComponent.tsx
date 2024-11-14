import { AboutUs } from "./aboutUs/LandingPageAboutUs";
import { History } from "./history/LandingPageHistory";
import { Home } from "./home/LandingPageHome";
import { Partners } from "./partners/LandingPagePartners";

export default function LandingPage () {

    return (
        <>
        <Home />
        <Partners />
        <AboutUs />
        <History />
        </>
    )

}