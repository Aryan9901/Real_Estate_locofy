import { useMemo } from "react";

const TeamPoliciesContainer = ({
  propMargin,
  propMargin1,
  propMargin2,
  propMargin3,
  propMargin4,
}) => {
  const rEISStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const contactUsStyle = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const featuresStyle = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  const companyStyle = useMemo(() => {
    return {
      margin: propMargin3,
    };
  }, [propMargin3]);

  const teamAndPoliciesStyle = useMemo(() => {
    return {
      margin: propMargin4,
    };
  }, [propMargin4]);

  return (
    <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px] sm:flex-[unset] sm:self-stretch">
      <div className="w-[312px] h-[300px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <h3
              className="m-0 relative text-inherit leading-[24px] font-semibold font-inherit"
              style={rEISStyle}
            >
              REIS
            </h3>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </div>
        <div className="self-stretch h-[168px] flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
          <h3
            className="m-0 relative text-5xl leading-[32px] font-semibold font-inherit text-gray-black"
            style={contactUsStyle}
          >
            Contact Us
          </h3>
          <div className="relative leading-[24px]">Call : +123 400 123</div>
          <div className="relative leading-[24px] flex items-end w-[312px]">
            Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
            auctor felis.
          </div>
          <div className="relative leading-[24px] text-gray-700">
            Email: example@mail.com
          </div>
        </div>
        <div className="w-[304px] flex flex-row items-center justify-between">
          <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
            <img
              className="relative w-5 h-[21.7px]"
              alt=""
              src="/social-media-logo.svg"
            />
          </div>
          <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/social-media-logo1.svg"
            />
          </div>
          <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/social-media-logo2.svg"
            />
          </div>
          <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/social-media-logo3.svg"
            />
          </div>
          <div className="rounded bg-primary-50 flex flex-col items-center justify-center p-3.5">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src="/social-media-logo4.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
        <h3
          className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
          style={featuresStyle}
        >
          Features
        </h3>
        <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
          <div className="relative leading-[24px]">Home</div>
          <div className="relative leading-[24px]">Become a Host</div>
          <div className="relative leading-[24px]">Pricing</div>
          <div className="relative leading-[24px]">Blog</div>
          <div className="relative leading-[24px]">Contact</div>
        </div>
      </div>
      <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
        <h3
          className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
          style={companyStyle}
        >
          Company
        </h3>
        <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
          <div className="relative leading-[24px]">About Us</div>
          <div className="relative leading-[24px]">Press</div>
          <div className="relative leading-[24px]">Contact</div>
          <div className="relative leading-[24px]">Careers</div>
          <div className="relative leading-[24px]">Blog</div>
        </div>
      </div>
      <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
        <h3
          className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit"
          style={teamAndPoliciesStyle}
        >
          Team and policies
        </h3>
        <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
          <div className="relative leading-[24px]">Terms of servies</div>
          <div className="relative leading-[24px]">Privacy Policy</div>
          <div className="relative leading-[24px]">Security</div>
        </div>
      </div>
    </footer>
  );
};

export default TeamPoliciesContainer;
