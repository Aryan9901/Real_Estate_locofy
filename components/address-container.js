import CardContainer from "./card-container";

const AddressContainer = () => {
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[8px]">
        <CardContainer
          imageDimensions="/property-image@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
        />
        <CardContainer
          imageDimensions="/property-image1@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
        />
        <CardContainer
          imageDimensions="/property-image2@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
        />
        <CardContainer
          imageDimensions="/property-image3@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
        />
        <CardContainer
          imageDimensions="/property-image@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
        />
        <CardContainer
          imageDimensions="/property-image4@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
        />
        <CardContainer
          imageDimensions="/property-image5@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
        />
        <CardContainer
          imageDimensions="/property-image6@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
        />
      </div>
    </div>
  );
};

export default AddressContainer;
