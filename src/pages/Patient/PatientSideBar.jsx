// import patientImg from  '../assets/img/user-2-f.png'
// import female from  '../assets/img/female.png'
// import { SlCalender } from "react-icons/sl";
const PatientSideBar = ({user}) => {
    return (
        <aside className="w-60 border-l border-gray-200 bg-white">
        <div className="p-6">
          <div className="text-center mb-6">
            <img
              src={user.img}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
          </div>
  
          <div className="space-y-4">
            <div className="flex items-center">
            {/* <img src={female} alt='female-icon'/> */}
              <i className="fas fa-calendar-alt w-5 text-gray-400"></i>
              {/* <SlCalender/> */}
              <div className="ml-3">
                <div className="text-sm text-gray-500">Date Of Birth</div>
                <div className="text-sm font-medium">August 23, 1996</div>
              </div>
            </div>
  
            <div className="flex items-center">
              <i className="fas fa-venus w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Gender</div>
                <div className="text-sm font-medium">Female</div>
              </div>
            </div>
  
            <div className="flex items-center">
              <i className="fas fa-phone w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Contact Info</div>
                <div className="text-sm font-medium">(415) 555-1234</div>
              </div>
            </div>
  
            <div className="flex items-center">
              <i className="fas fa-phone-volume w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Emergency Contacts</div>
                <div className="text-sm font-medium">(415) 555-5678</div>
              </div>
            </div>
  
            <div className="flex items-center">
              <i className="fas fa-shield-alt w-5 text-gray-400"></i>
              <div className="ml-3">
                <div className="text-sm text-gray-500">Insurance Provider</div>
                <div className="text-sm font-medium">Sunrise Health Assurance</div>
              </div>
            </div>
          </div>
  
          <button className="w-full mt-6 px-4 py-2 bg-custom text-white rounded-lg !rounded-button font-medium hover:bg-custom/90">
            Show All Information
          </button>
  
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Lab Results</h3>
            <div className="space-y-3">
              <a href="#" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-vial text-gray-400 mr-3"></i>
                  <span className="text-sm">Blood Tests</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-laptop-medical text-gray-400 mr-3"></i>
                  <span className="text-sm">CT Scans</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-x-ray text-gray-400 mr-3"></i>
                  <span className="text-sm">Radiology Reports</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-x-ray text-gray-400 mr-3"></i>
                  <span className="text-sm">X-Rays</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
              <a href="#" className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-flask text-gray-400 mr-3"></i>
                  <span className="text-sm">Urine Test</span>
                </div>
                <i className="fas fa-download text-gray-400"></i>
              </a>
            </div>
          </div>
        </div>
      </aside>
    );
}

export default PatientSideBar;