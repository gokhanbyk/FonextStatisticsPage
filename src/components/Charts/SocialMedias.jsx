/* eslint-disable react/prop-types */

function SocialMedias({ onSelectSocialMedia, btnClasses, socialMediasData }) {
  return (
    <div className="d-flex gap-3 justify-content-start w-100">
      {socialMediasData.map((socialMedia, idx) => (<button key={idx} onClick={() => onSelectSocialMedia(socialMedia)} className={btnClasses[socialMedia.platform]}>{socialMedia.platform}</button>
      ))
      }
    </div >
  );
}

export default SocialMedias;