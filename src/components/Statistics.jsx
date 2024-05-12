import { useEffect, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

// ChartComponents
import AreaChartComponent from "./Charts/AreaChart";
import BarChartComponent from "./Charts/BarChart";
import LineChartComponent from "./Charts/LineChart";
import SimpleLineChart from "./Charts/SimpleLine";
import SocialMedias from "./Charts/SocialMedias";

// Dummy Data
import { socialMediasData } from '../API/data';

const initialMediaValue = socialMediasData.find(socialMedia => socialMedia.platform === 'instagram');

export default function Statistics() {
  const [socialMedia, setSocialMedia] = useState(initialMediaValue);

  useEffect(() => {
    mediaBtnClasses();
  }, [socialMedia]);

  const mediaBtnClasses = () => {
    const buttonClasses = {
      facebook: 'btn px-3 py-2 rounded-pill btn-light',
      instagram: 'btn px-3 py-2 rounded-pill btn-light',
      linkedin: 'btn px-3 py-2 rounded-pill btn-light',
      twitter: 'btn px-3 py-2 rounded-pill btn-light',
    };

    buttonClasses[socialMedia.platform] = `btn px-3 py-2 rounded-pill btn-${getButtonColor(socialMedia.platform)}`;
    setBtnClasses(buttonClasses);
  };

  const handleSelectSocialMedia = (selectedMedia) => {
    setSocialMedia(selectedMedia);
    mediaBtnClasses();
  };

  const getButtonColor = (platform) => {
    switch (platform) {
      case 'facebook':
        return 'primary';
      case 'instagram':
        return 'danger';
      case 'linkedin':
        return 'info';
      case 'twitter':
        return 'dark';
      default:
        return 'light';
    }
  };

  const [btnClasses, setBtnClasses] = useState({
    facebook: 'btn px-3 py-2 rounded-pill btn-light',
    instagram: 'btn px-3 py-2 rounded-pill btn-light',
    linkedin: 'btn px-3 py-2 rounded-pill btn-light',
    twitter: 'btn px-3 py-2 rounded-pill btn-light',
  });

  return (
    <main className="p-5 bg-light d-flex flex-column align-items-center justify-content-center">
      <Container>
        <SocialMedias socialMediasData={socialMediasData} onSelectSocialMedia={handleSelectSocialMedia} btnClasses={btnClasses} />
        <Row className="my-3">
          <Col lg={4} sm={12}>
            <SimpleLineChart selectedSocialMedia={socialMedia} />
          </Col>
        </Row>
        <h3 className="my-5 text-dark fs-bold">Sosyal Medyalar Arası Karşılaştırma</h3>
        <Row className="my-4 p-2">
          <h3>Toplam Beğeni</h3>
          <Col lg={6}>
            <LineChartComponent />
          </Col>
          <Col lg={6}>
            <h3>Paylaşılan Post</h3>
            <AreaChartComponent />
          </Col>
          <Col lg={10} className="d-flex justify-content-center mx-auto mt-5">
            <BarChartComponent />
          </Col>
        </Row>
      </Container>
    </main>
  );
}
