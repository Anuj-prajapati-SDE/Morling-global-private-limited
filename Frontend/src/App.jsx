import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import FaqsPage from "./pages/FaqsPage";
import Error404Page from "./pages/Error404Page";
import AboutPage from "./pages/About/AboutPage";
import RefundPolicyPage from "./pages/Security/RefundPolicyPage";
import HardwareInstallationRepairAndMaintenanceServices from "./pages/Services/HardwareInstallationRepairAndMaintenanceServices";
import BroadbandInstallationShiftingAndTechnicalSupportServices from "./pages/Services/BroadbandInstallationShiftingAndTechnicalSupportServices";
import SoftwareDevelopmentServices from "./pages/Services/SoftwareDevelopmentServices";
import RecruitmentAndManpowerServices from "./pages/Services/RecruitmentAndManpowerServices";
import RecruitTrainAndDeploysServices from "./pages/Services/RecruitTrainAndDeploysServices";
import ComprehensiveHardwareAndSoftwareAmcServices from "./pages/Services/ComprehensiveHardwareAndSoftwareAmcServices";
import PrivaryPolicyPage from "./pages/Security/PrivaryPolicyPage";
import TermsConditionPage from "./pages/Security/TermsConditionPage";
import ContactPage from "./pages/ContactPage";
function App() {
  
  
  return ( 
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/broadband_installation_shifting_and_technical_support_services" element={<BroadbandInstallationShiftingAndTechnicalSupportServices />} />
        <Route path="/software_development_services" element={<SoftwareDevelopmentServices />} />
        <Route path="/recruitment_and_manpower_services" element={<RecruitmentAndManpowerServices />} />
        <Route path="/recruit_train_and_deploys_services" element={<RecruitTrainAndDeploysServices />} />
        <Route path="/comprehensive_hardware_and_software_amc_services" element={<ComprehensiveHardwareAndSoftwareAmcServices />} />
        <Route path="/faqs" element={<FaqsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionPage />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />
        <Route path="/privary-policy" element={<PrivaryPolicyPage />} />
        <Route path="/hardware_installation_repair_and_maintenance_services" element={<HardwareInstallationRepairAndMaintenanceServices />} />

         
        {/* 404 Page */} 
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </Router>
  )
}

export default App
