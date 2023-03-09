import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export default function MainFooter() {
  return (
    <Footer container={true} className="bg-zinc-800">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand href="/" src="/images/logo.png" alt="Jumpstart Logo" width="55" height="55">
              <p className="text-white font-semibold text-2xl">Jumpstart</p>
            </Footer.Brand>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-white" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="text-white">
                  Jumpstart
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Founder
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-white" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="text-white">
                  Github
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-white" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#" className="text-white">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#" className="text-white">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Steffansim" year={2023} className="text-white" />
          <div className="mt-2 flex space-x-4 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
            <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
            <Footer.Icon href="#" icon={BsGithub} className="text-white" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
