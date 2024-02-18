import { TiMessages } from "react-icons/ti";
import { AiOutlineSafety } from "react-icons/ai";
import { CgSmartphoneChip } from "react-icons/cg";
import { SiHackthebox } from "react-icons/si";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="min-h-screen text-[#9999B3]">
      <div>
        <img
          src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className=" p-6">
          <h2 className="text-center mt-3 text-2xl font-semibold text-[#2ECC71]">
            Who We Are
          </h2>
          <p className="text-center mt-2">
            At UrbanSpyTech, whatever your requirements and concerns are, our
            investigation team and professional hackers have you covered. Our
            partners and associates are committed to excellence and have a long
            history of successfully representing our customers. The National
            Association of Investigative Specialists has accepted us as a
            member.
          </p>

          <p className="text-center mt-3">
            Our Professional hackers are certified in ethical hacking and Cisco
            with Years of experience in Web app hacking, Mobile app hacking,
            Network vulnerability assessment, and Incident Response. Virus and
            malware removal specialist, Database Management and Hacking,
            Tracking and Funds recovery expert.
          </p>
        </div>
      </div>

      <div className=" p-4 mt-3 ">
        <div className="flex flex-col gap-5 md:flex-row md:mx-auto md:w-11/12 md:gap-4 ">
          <div className="flex flex-row gap-4 md:gap-4">
            <div>
              <AiOutlineSafety size={50} color="green" />
            </div>
            <div>
              <h3 className="text-black font-semibold">
                Safe & Secure Service
              </h3>
              <p>
                Protection of all kinds is our business – including, but not
                limited to: penetration testing and ethical hacking,
                counter-intelligence and counter-surveillance, industrial
                espionage, surveillance detection and interruption
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4  md:gap-4">
            <div>
              <TiMessages size={50} color="green" />
            </div>
            <div>
              <h3 className="text-black font-semibold">
                Software & Mobile Phone Hacking
              </h3>
              <p>
                Next generation of smartphone monitoring software, worry less
                about your child or employee abusing their SMS or Internet
                privileges.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4  md:gap-4">
            <div>
              <CgSmartphoneChip size={50} color="green" />
            </div>
            <div>
              <h3 className="text-black font-semibold">Private Investigaton</h3>
              <p>
                View the target, Instant Location. Our targets never see us
                coming neither do they know when our malwares are installed on
                their devices
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4  md:gap-4">
            <div>
              <SiHackthebox size={50} color="green" />
            </div>
            <div>
              <h3 className="text-black font-semibold">
                Social Engineers "Human Hacking"
              </h3>
              <p>
                With little or no technology involved, our team of team
                specialize in mitigating and carrying out social engineering
                attacks on people or targeted organisations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Hero;
