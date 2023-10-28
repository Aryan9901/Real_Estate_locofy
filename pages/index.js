import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Header from "../components/header";
import AddressContainer from "../components/address-container";
import FormContainer from "../components/form-container";

const PropertiesGridView = () => {
  return (
    <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-left text-base text-gray-black font-body-regular-600">
      <Header />
      <section className="self-stretch h-60 flex flex-col items-center justify-center bg-[url('/category@3x.png')] bg-cover bg-no-repeat bg-[top] text-center text-33xl text-gray-white font-body-regular-400">
        <div className="flex flex-col items-center justify-start gap-[12px]">
          <h1 className="m-0 relative text-inherit leading-[72px] font-semibold font-inherit">
            Properties
          </h1>
          <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
            <span>{`Home / `}</span>
            <span className="font-medium text-gray-white">Properties</span>
          </div>
        </div>
      </section>
      <div className="self-stretch flex flex-col items-center justify-start pt-16 px-0 pb-2 gap-[95px] lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
        <div className="w-[272px] flex flex-row items-center justify-start">
          <div className="flex flex-row items-end justify-start gap-[16px]">
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <img className="relative w-6 h-6" alt="" src="/listbullets.svg" />
              <img className="relative w-6 h-6" alt="" src="/squaresfour.svg" />
            </div>
            <div className="relative leading-[24px]">Sort by:</div>
            <Dropdown
              overlay={
                <Menu>
                  {[
                    { value: "Popular properties" },
                    { value: "Latest properties" },
                    { value: "Recommended properties" },
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
                {`Default Order `}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
        </div>
        <AddressContainer />
        <div className="flex flex-row items-end justify-center gap-[8px] text-center text-primary-500">
          <div className="rounded bg-primary-50 flex flex-row items-start justify-start p-2.5">
            <img className="relative w-6 h-6" alt="" src="/arrowleft.svg" />
          </div>
          <div className="rounded-10xs bg-primary-500 flex flex-col items-start justify-start py-2.5 px-[9px] text-gray-white">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              1
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              2
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              3
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              ...
            </div>
          </div>
          <div className="rounded-10xs bg-primary-50 flex flex-col items-start justify-start py-2.5 px-[9px]">
            <div className="relative leading-[24px] font-semibold flex items-end justify-center w-[26px]">
              54
            </div>
          </div>
          <div className="rounded bg-primary-500 flex flex-row items-start justify-start p-2.5">
            <img className="relative w-6 h-6" alt="" src="/arrowright.svg" />
          </div>
        </div>
      </div>
      <FormContainer />
    </div>
  );
};

export default PropertiesGridView;
