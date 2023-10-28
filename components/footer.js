import TeamPoliciesContainer from "./team-policies-container";

const Footer = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start p-[50px] md:self-stretch md:w-auto md:flex-row md:gap-[0px] sm:flex-col">
      <TeamPoliciesContainer
        propMargin="unset"
        propMargin1="unset"
        propMargin2="unset"
        propMargin3="unset"
        propMargin4="unset"
      />
    </div>
  );
};

export default Footer;
