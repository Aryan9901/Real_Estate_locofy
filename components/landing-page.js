import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Button } from "@mui/material";
import AreaCard from "./area-card";
import SellHomeContainer from "./sell-home-container";
import CardWithInputs from "./card-with-inputs";
import WashingtonContainer from "./washington-container";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <main className="bg-gray-white w-[1920px] h-[5096px] flex flex-col items-center justify-start text-center text-21xl text-primary-800 font-body-regular-600">
      <header className="self-stretch bg-gray-white h-[98px] flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
        <div className="flex-1 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
            <div className="flex flex-col items-start justify-start">
              <div className="relative leading-[24px] font-semibold">REIS</div>
              <div className="relative text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-primary-900 lg:hidden md:hidden sm:hidden">
            <div className="flex flex-row items-start justify-start gap-[30px]">
              <div className="relative leading-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
                HOME
              </div>
              <div className="relative leading-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
                ABOUT US
              </div>
              <div className="relative leading-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
                OUR AGENTS
              </div>
              <div className="relative leading-[22px] font-semibold hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
                PROPERTIES
              </div>
              <div className="relative leading-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-up] active:opacity-[1]">
                GALLERY
              </div>
              <div className="relative leading-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
                BLOG
              </div>
              <div className="relative leading-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
                CONTACT US
              </div>
              <div className="relative leading-[22px] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
                SEARCH
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex md:flex">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </div>
      </header>
      <div className="self-stretch flex flex-col items-center justify-start py-[120px] px-[30px] bg-[url('/hero-section@3x.png')] bg-cover bg-no-repeat bg-[top] text-33xl text-gray-white font-body-regular-400">
        <div className="self-stretch flex flex-col items-center justify-center gap-[62px] max-w-[95%px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] md:max-w-full">
            <div className="self-stretch relative leading-[72px] font-semibold">
              Find Your Dream Home
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-primary-50">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <form className="self-stretch flex flex-col items-center justify-start gap-[17px]">
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <button
                className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded overflow-hidden flex flex-row items-start justify-start hover:[background:linear-gradient(#fff,_#fff),_#f7fcfe]"
                autoFocus={true}
                disabled={false}
              >
                <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray1-200 text-center hover:text-gray1-200">
                  Rent
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-3.5 px-6 bg-gray1-100 rounded overflow-hidden flex flex-row items-start justify-start hover:bg-primary-500">
                <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray1-200 text-center hover:text-gray1-200">
                  Sale
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center">
              <nav className="m-0 flex-1 rounded-lg bg-gray-white flex flex-row items-center justify-between py-8 px-[62px] box-border max-w-[1400px] md:w-[300px] md:flex-col md:gap-[20px] md:items-start md:justify-start md:ml-[auto] md:mr-[auto]">
                <div className="w-[137px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-center">
                    Locations
                  </div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {[
                          { value: "New York" },
                          { value: "Los Angeles" },
                          { value: "Chicago" },
                          { value: "Berlin" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[177px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                    Property Type
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "Studio apartments" },
                          { value: "One-bedroom apartments" },
                          { value: "Two-bedroom apartments" },
                          { value: "Three-bedroom apartments" },
                          { value: "Four or more bedroom apartments/houses" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className="w-[155px] flex flex-col items-start justify-start gap-[16px]">
                  <div className="relative text-base leading-[24px] capitalize font-semibold font-body-regular-600 text-primary-700 text-left flex items-end w-[150px]">
                    Rent Range
                  </div>
                  <Dropdown
                    className="self-stretch"
                    overlay={
                      <Menu>
                        {[
                          { value: "$500-$2000" },
                          { value: "$2500-$10000" },
                          { value: "$10000+" },
                        ].map((option, index) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded w-[102px] flex flex-row items-center justify-center box-border hover:bg-steelblue">
                  <a className="[text-decoration:none] relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
                    Search
                  </a>
                </button>
              </nav>
            </div>
          </form>
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px]">
        <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Properties by Area
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%px] text-left text-5xl text-gray-white">
          <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
            <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              <AreaCard />
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-2@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start relative bg-[url('/card-3@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-4@3x.png')] bg-cover bg-no-repeat bg-[top] hover:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] active:opacity-[1] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Arlington
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] md:flex-[unset] md:self-stretch">
                <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
                  <div className="relative leading-[32px] font-semibold">
                    Centerville
                  </div>
                  <div className="relative text-base leading-[24px] text-center">
                    25 listings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-col items-center justify-start py-[70px] px-0">
        <div className="self-stretch flex flex-col items-center justify-start pt-[75px] px-0 pb-0 box-border gap-[54px] max-w-[95%px]">
          <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] box-border gap-[24px] max-w-[95%px]">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Properties by Area
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[86px]">
            <SellHomeContainer
              imageId="/icon.svg"
              homeActionText="Sell your home"
            />
            <SellHomeContainer
              imageId="/icon1.svg"
              homeActionText="Rent your home"
              propWidth="312px"
            />
            <SellHomeContainer
              imageId="/icon2.svg"
              homeActionText="Buy a home"
              propWidth="unset"
            />
            <SellHomeContainer
              imageId="/icon3.svg"
              homeActionText="Free marketing"
              propWidth="312px"
            />
          </div>
        </div>
      </div>
      <form className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative text-21xl leading-[48px] font-semibold font-body-regular-600 text-primary-800 text-center">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] font-body-regular-600 text-lightslategray text-center">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
            <CardWithInputs imageDimensions="/property-image7@2x.png" />
            <CardWithInputs imageDimensions="/property-image8@2x.png" />
            <CardWithInputs imageDimensions="/property-image9@2x.png" />
            <CardWithInputs imageDimensions="/property-image10@2x.png" />
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-steelblue">
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
            Load more listing
          </div>
        </button>
      </form>
      <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px]">
        <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Latest Properties of Rent
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px]">
            <WashingtonContainer />
            <WashingtonContainer propBackgroundImage="url('/card-21@3x.png')" />
            <WashingtonContainer propBackgroundImage="url('/card-31@3x.png')" />
            <WashingtonContainer propBackgroundImage="url('/card-41@3x.png')" />
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-steelblue">
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
            Load more listing
          </div>
        </button>
      </div>
      <div className="self-stretch bg-primary-50 flex flex-row flex-wrap items-start justify-center py-[86px] px-[5px]">
        <div className="flex-1 flex flex-col items-center justify-start py-0 px-2.5 box-border gap-[40px] max-w-[900px]">
          <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
            <div className="self-stretch relative leading-[48px] font-semibold">
              Contact us
            </div>
            <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className="self-stretch rounded-xl bg-gray-white shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col items-center justify-start py-7 px-[30px] gap-[17px] text-left text-5xl text-darkslategray font-poppins">
            <div className="self-stretch flex flex-col items-center justify-start gap-[6px]">
              <b className="self-stretch relative leading-[36px]">
                Enquiry Form
              </b>
              <div className="self-stretch relative text-[18px] leading-[30px] font-components-input-text text-slategray">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[10px] text-base text-darkgray font-components-input-text">
              <div className="self-stretch flex flex-row items-start justify-center gap-[10px] md:flex-col md:gap-[10px] md:items-start md:justify-center">
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1-300 md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    First name
                  </div>
                </div>
                <div className="self-stretch flex-1 rounded flex flex-col items-start justify-center py-4 px-3 border-[1px] border-solid border-gray1-300 md:flex-[unset] md:self-stretch">
                  <div className="relative tracking-[0.15px] leading-[24px]">
                    Last name
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded flex flex-col items-start justify-start py-4 px-3 border-[1px] border-solid border-gray1-300">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Email id
                </div>
              </div>
              <div className="self-stretch rounded box-border h-[105px] flex flex-col items-start justify-start p-3 border-[1px] border-solid border-gray1-300">
                <div className="relative tracking-[0.15px] leading-[24px]">
                  Comments or questions
                </div>
              </div>
              <Button
                sx={{ width: 222 }}
                color="primary"
                size="medium"
                variant="contained"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default LandingPage;
